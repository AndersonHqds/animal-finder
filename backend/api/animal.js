module.exports = app => {
    const { Animal } = app.db.animal

    const save = (req, res) => {
        
        const data = req.body
        
        const user = new Animal({
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
        User.find({},{ password: 0, __v: 0}, (err, users) => {
            if(err)
                return res.status(500).send("Bad Request")
            if(users.length === 0)
                return res.status(404).send("Nada encontrado")
            res.status(200).send(JSON.stringify(users))
        })
    }

    const getById = (req, res) => {
        User.findOne({ "_id": req.params.id }, { password: 0, __v: 0 })
            .then(stat => {
                return res.status(200).json(stat)
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