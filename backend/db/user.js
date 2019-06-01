module.exports = app => {
    const User = app.mongoose.model('User', {
        name: String,
        email: String,
        password: String,
        telefone: String,
        cidade: String,
        estado: String,
        cep: String,
        rua: String,
        numero: Number,
        foto: String
    })

    return { User }
}