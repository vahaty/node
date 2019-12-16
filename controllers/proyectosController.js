const Proyectos = require('../model/Proyectos');
const slug = require('slug');

exports.poyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll(); // trae todo lo que tng la bbdd
    //   res.send('Index');
    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto = (req, res) => {
    //   res.send('Index');
    res.render('nuevoProyecto', {
        nombrePagina: 'nuevoProyecto'
    });
}

// funciona asincrona
exports.nuevoProyecto = async (req, res) => {
    // res.send('Formulario enviado');
    // envar a la consola lo que el usuario escriba
    console.log(req.body);

    // validar que este relleno
    const { nombre } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ texto: 'Agregar un nombre al proyecto' })
    }

    if (errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo proyecto ',
            errores
        })
    } else {
        // console.log(slug(nombre));
        // const url = slug(nombre).toLowerCase();
        // insertar en bbdd
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}

exports.proyectoPorUrl = (req, res) =>{
    res.send(req.params.url);
}