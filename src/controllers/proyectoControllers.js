module.exports= {
    index:(req, res, next)=>{
        res.render('proyectos', { title: 'INGEME S.A.', style: "index"})
    }
}