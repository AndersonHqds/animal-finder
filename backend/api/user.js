const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { User } = app.db.user

    const encryptPassword = password =>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = (req, res) => {
        
        const data = req.body

        const user = new User({ ...data })
        user.admin = false
        user.password = encryptPassword(user.password)
        user.save()
            .then(() => {
                console.log("User saved")
                return res.status(201).send("Usuário criado")
            })
            .catch(error => {
                if(error.code === 11000)
                return  res.status(400).send("E-mail já cadastrado")
                res.status(500).send(error)
            })
        
    }

    const get = (_, res) => {   
        User.find({},{ password: 0, __v: 0}, (err, users) => {
            if(err)
                return res.status(500).send("Bad Request")
            if(users.length === 0)
                return res.status(404).send("Nada encontrado")
            return res.status(200).send(users)
        })
    }

    const getById = (req, res) => {
        User.findOne({ "_id": req.params.id }, { password: 0, __v: 0 })
            .then(stat => {
                return res.status(200).send(stat)
            })
    }

    const remove = (req, res) => {
        try{
            User.deleteOne({ "_id": req.params.id }, (err, numberOfRemoved) => {
                if(err) return res.status(400).send(JSON.stringify(err))
                if(numberOfRemoved === 0) return res.status(404).send("Usuario não encontrado")

                return res.status(200).send("Usuário deletado")
            })
        }
        catch(e){
            return res.status(500).send(JSON.stringify(e))
        }
    }

    return { save, get, getById, remove }
}