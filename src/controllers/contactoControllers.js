module.exports= {
    index:(req, res, next)=>{
      res.render('contacto', {title: 'INGEME S.A.', style:"index"})
    },
    envio:(rq,res,next)=>{
      res.render('contacto', {title: 'INGEME S.A.', style:"index", consulta:"Consulta enviada",mensaje:"Hola "+rq.body.nombre+", nos pondemos en contacto a la brevedad."})
    }
}