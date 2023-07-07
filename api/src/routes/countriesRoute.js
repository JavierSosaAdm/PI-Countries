const { Router } = require('express');
const { Activity, Country } = require('../db');

const router = Router();

const information = async() => {
    return await Country.findAll({
        include:{
            model: Activity,
            atributos: [ 'id', 'name', 'dificultad', 'duración', 'temporada ' ],
            through:{atributos: []},
        }
    })
}

router.get('/', async(req, res) => {
    const name = req.query.name;
    let todosLosPaises = await information();

    if(name) {
        let paisNombre = await todosLosPaises.filter(pais => pais.name.toLowerCase().includes(name.toLocaleLowerCase()))
        paisNombre.length?
        res.status(200).send(paisNombre):
        res.status(404).send('Pais no encontrado')
    } else {
        res.status(200).send(todosLosPaises)
    }
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    let todosLosPaises = await information();
    console.log(id);
    if(id) {
        let idPaises = await todosLosPaises.filter(pais => pais.id.toLowerCase() === id.toLowerCase())
        idPaises.length?
        res.status(200).json(idPaises):
        res.status(404).send('Country not found')
    }
})

module.exports = router;