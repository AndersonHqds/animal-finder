module.exports = app => {
    const { Animal } = app.db.animal
    
    const save = async(req, res) => {
        
        const animal = { ...req.body }
        if(req.params.id) animal.id = req.params.id

        const animalDb = new Animal({ ...animal })

        const isValid = await Animal.findOne({ "owner": req.user.id, "_id": req.params.id }) || [] 

        if(req.params.id && isValid.length !== 0){
            animal.owner = req.user.id
            Animal
            .update({ "owner": req.user.id, "_id": req.params.id }, { ...animal }, { upsert: true })
            .then(() => {
                return res.status(201).send("Animal Atualizado")
            })
        }
        else if(req.params.id && isValid.length === 0){
            return res.status(400).send("Animal inexistente ou não é de sua autoria")
        }
        else{
            animalDb.save().then(() => {
                console.log("Animal saved")
                res.status(201).send("Animal criado")
            })
        }
    }

    const get = (_, res) => {   
        Animal.find({},{}, (err, animals) => {
            if(err)
                return res.status(500).send("Bad Request")
            if(animals.length === 0)
                return res.status(404).send("Nada encontrado")
            return res.status(200).send(animals)
        })
    }

    const getById = (req, res) => {
        Animal.findOne({ "_id": req.params.id }, {})
            .then(animal => {
                return res.status(200).json(animal)
            })
    }

    const remove = (req, res) => {
        try{
            Animal.deleteOne({ "_id": req.params.id }, (err, numberOfRemoved) => {
                if(err) return res.status(400).send(JSON.stringify(err))
                if(numberOfRemoved === 0) return res.status(404).send("Animal não encontrado")

                return res.status(200).send("Animal deletado")
            })
        }
        catch(e){
            return res.status(500).send(JSON.stringify(e))
        }
    }

    return { save, get, getById, remove }
}