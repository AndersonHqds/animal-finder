module.exports = app => {
    const Animal = app.mongoose.model('Animal', {
        owner: String,
        breed: String,
        color: String,
        latitude: String,
        longitude: String,
        isGot: Boolean,
        isSeen: Boolean,
        cellphone: String,
        street: String,
        number: Number,
        picture: Array
    })

    return { Animal }
}