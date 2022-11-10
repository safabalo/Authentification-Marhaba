const User = require('../models/users')
const jwt = require('jsonwebtoken')
const verifyEmail = async (req,res)=>{
    let token = req.params.token
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    const result = await User.findOne({email: user.email})

    if(!result){
        res.send('error')
    }else{
        result.status = true
        await result.save()
        res.send('Votre status a été changer')

    }

}

module.exports = {verifyEmail}