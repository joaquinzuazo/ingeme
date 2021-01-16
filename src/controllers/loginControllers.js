const conexion = require("./conexionDbControllers");
const util=require("util");
const qy=util.promisify(conexion.query).bind(conexion); // permite el uso de asyn-await en la conexion mysql
const bcrypt=require('bcrypt');


module.exports= {
    vista:(req, res, next)=>{
      res.render('login', { title: 'INGEME S.A.', style: "index"})
  },
    login:async (req, res, next)=>{
        const query="SELECT * FROM users WHERE email=?";
        const respuesta=await qy(query,[req.body.email]);
        if(respuesta.length!=0){
          if(bcrypt.compareSync(req.body.password,respuesta[0].pass)){
            req.session.login=respuesta[0]
            delete (req.session.login.pass)
            res.redirect("/users")
          } else {
            res.render('login', {title: 'INGEME S.A.',style:"index", error:"La contraseña es incorrecta."})
          }
        } else {
        res.render('login', {title: 'INGEME S.A.',style:"index", error:"El usuario no existe."})
        }
    }
} 