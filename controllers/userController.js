const ApiError =  require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, PersonalCollections} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id,email, role) => {
    return jwt.sign(
        {id,email,role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController{
    async registration(req,res, next){
        const {email, password, role} = req.body
        if (!email || ! password){
            return next(ApiError.badRequest('Unresolved email or password'))
        }
        const candidate = await User.findOne({email})
        if(candidate){
            return next(ApiError.badRequest('User with this email already exists'))
        }
        const hashPassword = await  bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const personalCollections = await PersonalCollections.create({user_id: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req,res, next){
        const {email, password} = req.body
        const user = await User.findOne({"email": {email}})
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, req.user.password)
        if (!comparePassword){
            return next(ApiError.internal('Invalid password'))
        }
        const token  = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    async check(req,res){
        const token  = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
          }
}

module.exports = new UserController()