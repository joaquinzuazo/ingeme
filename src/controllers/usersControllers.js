const conexion = require("./conexionDbControllers");
const util=require("util");
const qy=util.promisify(conexion.query).bind(conexion);

module.exports={
    index:(req,res,next)=>{
        res.render("userIndex",{title: 'INGEME S.A.',style:"index",usuario:req.session.login.nombre})
    },
    otros:(req,res,next)=>{
        res.send("OK")
    },
    obras:async (req,res,next)=>{
        const query="SELECT * FROM obras";
        const respuesta=await qy(query);
        return res.render("userObras",{title: 'INGEME S.A.',style:"index",obras:respuesta})
    },
    datos:async (req,res,next)=>{
        let query="SELECT * FROM obras WHERE id=?";
        const respuestaObra=await qy(query,[req.params.id]);
        query="SELECT * FROM datos_utiles WHERE id_obra=?";
        const respuestaDatos=await qy(query,[req.params.id]);
        console.log(respuestaDatos)
        res.render("userDatos",{title: 'INGEME S.A.',style:"index",obra:respuestaObra[0].nombre, datos:respuestaDatos})
    }
}