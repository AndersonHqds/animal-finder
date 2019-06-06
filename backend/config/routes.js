const admin = require('./admin.js')
module.exports = app => {
    
    const USERS = 'users'
    
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.checkToken)

    app.route(`/${ USERS }`)
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))
    
    app.route(`/${ USERS }/:id`)
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))
        
    
}