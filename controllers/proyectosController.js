exports.poyectosHome = (req, res) => {
    //   res.send('Index');
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    //   res.send('Index');
    res.render('nuevoProyecto', {
        nombrePagina: 'nuevoProyecto'
    });
}

exports.nuevoProyecto = (req, res) => {
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

    }
}