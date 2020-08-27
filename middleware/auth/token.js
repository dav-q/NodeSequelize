const Moment= require('moment');
const Jwt= require('jwt-simple');

exports.CheckToken = (req,res,next)=>{

    if (!req.headers['authorization']) {
        // res.json({ code:"401",error: 'Nos tiene permisos para acceder' });        
        res.sendStatus(401);        
    }

    const GenerateToken=req.headers['authorization'].split(" ")[1];

    var access={};

    try {
        access=Jwt.decode(GenerateToken,'secret')
    } catch (error) {
        res.json({ error: 'Token inválido' });
    }

    if (access.expiredAt<Moment().unix()) {
        res.json({ error: 'Token ha expirado!' });        
    }

    req.UserId=access.user_id;

    next()

}