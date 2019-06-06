module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.helpers.validateErrors
    const bcrypt = require('bcrypt-nodejs')

    const validateData = async(user, userDb) => {
        try{
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword,
            'Senhas não conferem')
            const getUserInDb = await userDb.findOne({ email: user.email }, {})
            if(!user.id){
                notExistsOrError(getUserInDb, 'Usuário já cadastrado')
            }

            return { isValid: true, msg: "" }
        }
        catch(error){
            return { isValid: false, msg: error }
        }
    }

    const insertUser = async(userDb, userData) => {  
        try{ 
            userDb.save({ nome: "Anderson" })
            console.log("User saved")
            return { code: 201, msg: "Usuário Criado" }
        }
        catch(error){
            console.log(error)
            if(error.code === 11000)
                throw  { code: 400, msg: "E-mail já cadastrado"}
            throw { code: 500, msg: error }
        }
    }

    const updateUser = async(userDb, userData) => {
            try{
                console.log(userData)
                await userDb.update({ _id: userData.id }, { ...userData }, { upsert: true })
                return { code: 201, msg: "Usuário Atualizado" }
            }
            catch(error){
                console.log(error)
                throw { code: 500, msg: error }
            }
    }

    const encryptPassword = password =>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    return { insertUser, updateUser, validateData, encryptPassword }
}
