module.exports = app => {
    const User = app.mongoose.model('User', {
        name: String,
        email: String,
        password: String,
        phone: String,
        city: String,
        state: String,
        cep: String,
        street: String,
        number: Number,
        picture: String
    })

    return { User }
}