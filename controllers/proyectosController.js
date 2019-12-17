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

exports.formularioProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    //   res.send('Index');
    res.render('nuevoProyecto', {
        nombrePagina: 'nuevoProyecto',
        proyectos
    });
}

// funciona asincrona
exports.nuevoProyecto = async (req, res) => {
    // res.send('Formulario enviado');
    // envar a la consola lo que el usuario escriba
    console.log(req.body);
    const proyectos = await Proyectos.findAll();

    // validar que este relleno
    const { nombre } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ texto: 'Agregar un nombre al proyecto' })
    }

    if (errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo proyecto ',
            errores,
            proyectos
        })
    } else {
        // console.log(slug(nombre));
        // const url = slug(nombre).toLowerCase();
        // insertar en bbdd
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async (req, res) => {
    res.send(req.params.url);
    const proyectos = await Proyectos.findAll();
    // solo trae uno 
    const proyecto = Proyecto.findOne({
        where: {
            url: req.params.url
        }
    });
    if (!proyecto) {
        return next();
    }
    console.log(proyecto);
    res.send('OK')

    // render to view 
    res.render('tareas', {
        nombrePagina: 'Tareas del proyecto',
        proyecto,
        proyectos
    })
}

exports.formularioEditar = async (req, res) => {
    const proyectosPromise = Proyectos.findAll();
    const proyectoPromise = Proyectos.findOne({
        where: {
            id: req.params.id
        }
    });
    const [proyectos, proyecto] = await Promise.all([proyectosPromise, proyectoPromise]);
    res.render('nuevoProyecto', {
        nombrePagina :'Editar proyecto',
        proyectos,
        proyecto
    })
}