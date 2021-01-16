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
    obras:async(req,res,next)=>{
        const query="SELECT * FROM obras";
        const respuesta=await qy(query);
        res.render("userObras",{title: 'INGEME S.A.',style:"index",obras:respuesta})
    },
    datos:async (req,res,next)=>{
        let query="SELECT * FROM obras WHERE id=?";
        const respuestaObra=await qy(query,[req.params.id]);
        query="SELECT * FROM datos_utiles WHERE id_obra=?";
        const respuestaDatos=await qy(query,[req.params.id]);
        res.render("userDatos",{title: 'INGEME S.A.',style:"index",obra:respuestaObra[0], datos:respuestaDatos})
    },
    reportes:async (req,res,next)=>{
        let query="SELECT * FROM obras WHERE id=?";
        const respuestaObra=await qy(query,[req.params.id]);
        query="SELECT * FROM avances WHERE id_obra=?";
        const respuestaDatos=await qy(query,[req.params.id]);
        res.render("userReporte",{title: 'INGEME S.A.',style:"index",obra:respuestaObra[0], datos:respuestaDatos})
    },
    menuObra:async(req,res,next)=>{
        switch(req.body.button){
            case ("guardar"):{
                let query="INSERT INTO obras (nombre, detalle, ubicacion) VALUES (?, ?, ?)";
                let respuesta=await qy(query,[req.body.nombre,req.body.detalle,req.body.ubicacion]);
                break;
            }
            case ("editar"):{
                var query="SELECT * FROM obras WHERE id=?";
                var respuesta=await qy(query,[req.body.id]);
                if(respuesta.length==0){
                    break;
                } else {
                    query="UPDATE obras SET nombre=?, detalle=?, ubicacion=? WHERE id=?"
                    respuesta=await qy(query,[req.body.nombre,req.body.detalle, req.body.ubicacion,req.body.id])
                    break;
                }
            }
            case ("eliminar"):{
                var query="SELECT * FROM obras WHERE id=?";
                var respuesta=await qy(query,[req.body.id]);
                if(respuesta.length==0){
                    break;
                } else {
                    query="DELETE FROM obras WHERE id=?"
                    respuesta=await qy(query,[req.body.id])
                    // quedaría ver como enviar algun mensaje a la vista
                    break;
                }
            }
        }
        res.redirect("/users/obras")
    },
    menuDatos:async(req,res,next)=>{
        switch(req.body.button){
            case ("guardar"):{
                let query="INSERT INTO datos_utiles (id_obra,fecha,dato) VALUES (?, ?, ?)";
                let respuesta=await qy(query,[req.params.id,req.body.fecha,req.body.dato]);
                break;
            }
            case ("editar"):{
                var query="SELECT * FROM datos_utiles WHERE id=?";
                var respuesta=await qy(query,[req.body.id]);
                if(respuesta.length==0){
                    break;
                } else {
                    query="UPDATE datos_utiles SET fecha=?, dato=? WHERE id=?"
                    respuesta=await qy(query,[req.body.fecha,req.body.dato, req.body.id])
                    break;
                }
            }
            case ("eliminar"):{
                var query="SELECT * FROM datos_utiles WHERE id=?";
                var respuesta=await qy(query,[req.body.id]);
                if(respuesta.length==0){
                    break;
                } else {
                    query="DELETE FROM datos_utiles WHERE id=?"
                    respuesta=await qy(query,[req.body.id])
                    // quedaría ver como enviar algun mensaje a la vista
                    break;
                }
            }
        }
        res.redirect("/users/obras/"+req.params.id+"/datos")
    },
    menuReportes:async(req,res,next)=>{
        switch(req.body.button){
            case ("guardar"):{
                let query="INSERT INTO avances (id_obra,fecha,tarea,estado) VALUES (?, ?, ?,?)";
                let respuesta=await qy(query,[req.params.id,req.body.fecha,req.body.tarea,req.body.estado]);
                break;
            }
            case ("editar"):{
                var query="SELECT * FROM avances WHERE id=?";
                var respuesta=await qy(query,[req.body.id]);
                if(respuesta.length==0){
                    break;
                } else {
                    query="UPDATE avances SET fecha=?, tarea=?, estado=? WHERE id=?"
                    respuesta=await qy(query,[req.body.fecha,req.body.tarea,req.body.estado, req.body.id])
                    break;
                }
            }
            case ("eliminar"):{
                var query="SELECT * FROM avances WHERE id=?";
                var respuesta=await qy(query,[req.body.id]);
                if(respuesta.length==0){
                    break;
                } else {
                    query="DELETE FROM avances WHERE id=?"
                    respuesta=await qy(query,[req.body.id])
                    // quedaría ver como enviar algun mensaje a la vista
                    break;
                }
            }
        }
        res.redirect("/users/obras/"+req.params.id+"/reportes")
    }
}