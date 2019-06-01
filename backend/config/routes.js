module.exports = app => {
    app.route('/')
        .post(app.api.user.save)
        .get(app.api.user.get)
}