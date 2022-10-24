const bcrypt = require('bcryptjs');
const Users = require('../models/users');
const jwt = require('jsonwebtoken')

const clientLogin = async (req, res) =>{ 
    let token = req.cookies.jwt;
    if(!token){
        res.send("Il faut s'authentifier avant d'accéder ")
    }else{
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const id = verify._id
        const user = await Users.findOne({_id: id}).populate("roles")

        const role = user.roles[0].roles

        if(role === "client" ){
            res.send('Bonjour '+user.prenom +' '+user.nom + ' , votre rôle est : '+role)
        }
        else{
            res.send("you don't have acces to this page")
        }
    }   
}

module.exports = {
    clientLogin
}