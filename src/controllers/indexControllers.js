// Podrian estar en archivos txt
var tun="La tunelería inteligente es un sistema que permite la instalación de redes subterráneas, la remediación de suelos contaminados y la reinserción de cañerías. A diferencia del sistema tradicional de apertura de zanjas a cielo abierto, esta modalidad trabaja sin alterar la superficie del terreno en donde opera. Permite instalar de manera segura servicios por debajo de ríos, arroyos, autopistas, rutas, edificios, vías férreas y pistas de aeropuertos, por ejemplo. La tunelería horizontal dirigida ha sido ampliamente adoptada en países desarrollados debido a las enormes ventajas y beneficios que reporta."

var obra="Desarrollamos proyectos tanto en las regiones urbanas como interurbanas y realizamos todas las tareas requeridas por las distintas etapas de los proyectos: ingeniería, provisión de materiales, equipos y mano de obra, además de las actividades demandadas para la habilitación de la red (pruebas y mediciones)."

var man="El mantenimiento preventivo consiste en recorridas sobre la red del cableado de FO, mediante las cuales se verifica el estado de todos los elementos que la componen, es decir, sus canalizaciones, postes, cámaras, cajas de empalme, ODFs, conectores, rotulados, etc., mediante distintos procedimientos a fin de prevenir inconvenientes futuros y mantener en perfectas condiciones su funcionalidad."

var otro="Desarrollamos proyectos para gas y petróleo. Proveemos personal capacitado y certificado de acuerdo a los requerimientos de API 1104 para trabajos de reemplazos de cañerias, soldaduras, refuerzos, entre otros."
      

module.exports= {
    index:(req, res, next)=>{
        switch(req.query.servicio){
            case "tunelera":res.render('index', { title: 'INGEME S.A.', style: "index", texto:tun, img:"img-tunel.jpg"});
            break;
            case "obras":res.render('index', { title: 'INGEME S.A.', style: "index", texto:obra,img:"img-obra.jpeg"});
            break;
            case "mantenimiento":res.render('index', { title: 'INGEME S.A.', style: "index", texto:man,img:"img-mante.jpeg"});
            break;
            case "gas":res.render('index', { title: 'INGEME S.A.', style: "index", texto:otro,img:"img-gas.jpeg"});
            break;
            default:res.render('index', { title: 'INGEME S.A.', style: "index", texto:"",img:undefined});
  }
}
}