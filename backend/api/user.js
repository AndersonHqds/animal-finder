module.exports = app => {

    const save = (req, res) => {
        const { User } = app.db.user
        const data = req.body

        const user = new User({
            name: data.name,
            email: data.email,
            password: data.password,
            telefone: data.telefone,
            cidade: data.cidade,
            estado: data.estado,
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            foto: data.foto
        })
        user.save().then(() => console.log("User saved"))
        res.status(200).send("OK")
    }

    const get = (req, res) => {
        const { User } = app.db.user

        console.log(User.find())
    }

    return { save, get }
}