module.exports= {
    index:(req, res, next)=>{
        res.render("vision", {title: 'INGEME S.A.', style: "index"})
    }
}