const { secret } = require('../credentials/.env.js')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const signin = async (req, res) => {

        const { email, password } = req.body

        if (!email || !password)
            return res.status(400).send("Informe a senha / E-mail")

        const { User } = app.db.user
        const user = await User.findOne({ email: email }, {})

        if (!user) return res.status(400).send("Usuário não encontrado")
        try {
            const isValid = bcrypt.compareSync(password, user.password)
            if (!isValid) return res.status(401).send("Email/senha inválidos")
        } catch (error) {
            console.log(error)
        };



        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, secret)
        })
    }

    const checkToken = async (req, res) => {
        const user = req.body || null

        try {
            if (user) {
                const token = jwt.decode(user.token, secret)

                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch (e) { /* Token isn't valid */ }

        res.send(false)
    }

    return { signin, checkToken }
}