const User = require('../models/user')

const Login = async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email:email, password:password})

        if(user){
            res.status(200).json(user)
        }
        else{
            res.status(404).json({ 'msg' : 'invalid login credentials' })
        }
    } 
    catch (error) {
        res.status(500).json({ 'msg' : error.message })
    }
}

module.exports = { Login }