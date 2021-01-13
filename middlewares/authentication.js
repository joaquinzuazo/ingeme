module.exports=function(caso){
    switch(caso){
        case("usuario"):return function(req,res,next){
            if(!req.session.login){
            next()
            } else  {
            res.redirect("/users")
            }
        }
        case("invitado"):return function(req,res,next){
            if(req.session.login){
            next()
            } else  {
            res.redirect("/login")
            }
        }
}
}