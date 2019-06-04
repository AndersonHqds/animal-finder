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
        user.save().then(() => {
            console.log("User saved")
            res.status(201).send("Usuário criado")
        })
        
    }

    const get = (_, res) => {
        const { User } = app.db.user
        
        User.find({},{ password: 0, __v: 0}, (err, users) => {
            if(err)
                return res.status(500).send("Bad Request")
            if(users.length === 0)
                return res.status(404).send("Nada encontrado")
            res.status(200).send(JSON.stringify(users))
        })
    }

    const getById = (req, res) => {
        const { User } = app.db.user
        User.findOne({ "_id": req.params.id }, { password: 0, __v: 0 })
            .then(stat => {
                res.status(200).json(stat)
            })
    }

    return { save, get, getById }
}