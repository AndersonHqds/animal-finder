const admin = require('./admin.js')
module.exports = app => {
    
    const USERS = 'users'
    const ANIMALS = 'animals'

    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.checkToken)
    app.post('/signup', app.api.user.save)

    app.route(`/${ USERS }`)
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))
    
    app.route(`/${ USERS }/:id`)
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))  
    
    app.route(`/${ ANIMALS }`)
        .all(app.config.passport.authenticate())
        .post(app.api.animal.save)
        .get(admin(app.api.animal.get))
    
    app.route(`/${ ANIMALS }/:id`)
        .all(app.config.passport.authenticate())
        .put(app.api.animal.save)
        .get(app.api.animal.getById)
}
