const ApiError =  require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, name, email, role) => {
    return jwt.sign(
        {id, name, email, role},
        process.env.SECRET_KEY,
        {expiresIn: "24h"}
    );
}
class UserController{
    async registration(req,res, next){
        const {name, email, password, role} = req.body
        if (!email || ! password){
            return next(ApiError.badRequest('Unresolved email or password'))
        }
        const candidate = await User.findOne({email: `${email}`}).exec()
        if(candidate){
            return next(ApiError.badRequest('User with this email already exists'))
        }
        const hashPassword = await  bcrypt.hash(password, 5)
        const user = await User.create({name, email, role, password: hashPassword})
        const token = generateJwt(user.id, user.name, user.email, user.role)
        return res.json({token})
    }

    async login(req,res, next){
        const {email, password} = req.body
        const user = await User.findOne({email: `${email}`}).exec()
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return next(ApiError.internal('Invalid password'))
        }
        const token  = generateJwt(user.id, user.name, user.email, user.role)
        return res.json({token})
    }

    async check(req,res) {
        const token = generateJwt(req.user.id, req.user.name, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()