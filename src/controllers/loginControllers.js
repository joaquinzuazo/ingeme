const fs=require("fs")
const path=require("path")

module.exports= {
    vista:(req, res, next)=>{
      res.render('login', { title: 'INGEME S.A.', style: "index"})
  },
    login:(req, res, next)=>{
      let user=fs.readFileSync(path.join(__dirname,"..","data",'user.json'),{encoding:"utf-8"});
      user=JSON.parse(user)
      if(req.body.email==user["email"] && req.body.password==user["contraseña"]){
          res.send("Hola "+req.body.email+" tu login fue exitoso.")
      } else {
        res.render('login', { title: 'INGEME S.A.',style: "index", error:"Contraseña o email incorrecto"})
      }      
}
}