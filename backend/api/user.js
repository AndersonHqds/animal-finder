const bcrypt = require('bcrypt-nodejs')
const { resizeImageAndCheckNudity } = require('../helpers/images')
const { USERS } = require('../helpers/consts')

module.exports = app => {
    const { User } = app.db.user
    const userHelper = app.helpers.user
    /* ROUTES */

    const save = async (req, res) => {
        
        const checkImage = await resizeImageAndCheckNudity(req.files, USERS)
        if(!checkImage.ok){
            return res.status(400).send(checkImage.message)
        }

        const user = { ...req.body }
        user.picture = req.files[0].filename
        if (req.params.id) user.id = req.params.id
        if (!req.originalUrl.startsWith('/users')) user.admin = false
        if (!req.user || !req.user.admin) user.admin = false

        const dataValidated = await userHelper.validateData(user, User)
        if (!dataValidated.isValid) return res.status(400).send(dataValidated.msg)

        user.password = userHelper.encryptPassword(user.password)
        delete user.confirmPassword

        try{
            if (user.id) {
                const { code, msg } = await userHelper.updateUser(User, user)
                return res.status(code).send(msg)
            }
            else {
                const { code, msg } = await userHelper.insertUser(User, user)
                return res.status(code).send(msg)     
            }
        }
        catch (error) { return res.status(error.code).send(error.msg) }   
    }

    const get = (_, res) => {
        User.find({}, { password: 0, __v: 0 }, (err, users) => {
            if (err)
                return res.status(500).send("Bad Request")
            if (users.length === 0)
                return res.status(404).send("Nada encontrado")
            return res.status(200).send(users)
        })
    }

    const getById = (req, res) => {
        User.findOne({ "_id": req.params.id }, { password: 0, __v: 0 })
            .then(user => {
                return res.status(200).send(user)
            })
    }

    const remove = (req, res) => {
        try {
            User.deleteOne({ "_id": req.params.id }, (err, numberOfRemoved) => {
                if (err) return res.status(400).send(JSON.stringify(err))
                if (numberOfRemoved === 0) return res.status(404).send("Usuario não encontrado")

                return res.status(200).send("Usuário deletado")
            })
        }
        catch (e) {
            return res.status(500).send(JSON.stringify(e))
        }
    }

    return { save, get, getById, remove }
}