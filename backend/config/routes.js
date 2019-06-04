module.exports = app => {
    
    const USERS = 'users'
    
    app.route(`/${ USERS }`)
        .post(app.api.user.save)
        .get(app.api.user.get)
    
    app.route(`/${ USERS }/:id`)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)
}