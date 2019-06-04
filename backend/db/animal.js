module.exports = app => {
    const Animal = app.mongoose.model('Animal', {
        owner: Object,
        breed: String,
        color: String,
        latitude: String,
        longitude: String,
        isGot: Boolean,
        isSeen: Boolean,
        cellphone: String,
        street: String,
        number: Number,
        picture: String
    })

    return { Animal }
}