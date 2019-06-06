const { secret } = require('../credentials/.env.js')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    
    const params = {
        secretOrKey: secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    const strategy = new Strategy(params, (payload, done) => {
        const { User } = app.db.user

        User.findOne({ "_id": payload.id }, { password: 0, __v: 0 })
            .then(user => done(null, user ? { ...payload } : false ))
            .catch(error => done(error, false))
    })

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
    
}