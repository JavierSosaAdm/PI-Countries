const { Router } = require('express');
const { Activity, Country } = require('../db');

const router = Router();

router.post('/', async (req, res) => {
    let {
        name,
        dificultad,
        duración,
        temporada,
        coutry,
        img
    } = req.body;
    
    let activityCreate = await Activity.create({
        name,
        dificultad,
        duración,
        temporada,
        coutry,
        img 
    })

    let paisDataBase = await Country.findAll({where:{name: country}})
    activityCreate.addCountry(paisDataBase)
    res.send('Actividad creada exitosamente')
});

router.get('/', async (req, res) => {
    try {
        const name = req.query.name;
        let todasLasActividades = await Activity.findAll();

        if(name) {
            let activityName = await todasLasActividades.filter(actividad => actividad.name.toLowerCase().includes(name.toLowerCase()))
            activityName.length?
            res.status(200).send(activityName):
            res.status(404).send('No se encuentra actividad')
        } else {
            res.status(200).send(todasLasActividades)
        }

    } catch (error) {
        console.log(error)
    }
})

router.get('/', async(req, res) => {
    try {
        let result = await Activity.findAll();

        if(!result.length) {
            return res.status(200).send('No se encontraron actividades') 
        }
        return res.status(200).json(result)

    } catch (error) {
        console.log(error)
    }
});

router.delete('/:id', async(req, res) => {
    const {id} = req.params;

    try {
        
        if(id) {
            Activity.destroy(
                {where: {id: id}}
            );
            res.status(200).send('actividad borrada')
        } else {
            res.status(404).send('No se encuentra actividad')
        }

    } catch (error) {
        console.log(error)
    }
});


router.put('/:id', async(req, res) => {
    const name = req.query.name;
    let {
        dificultad,
        duración,
        temporada,
        country,
        img
    } = req.body;

    if(!dificultad || !duración || !temporada || !country) {
        return res.status(404).json({error: 'Faltan completar parámetros'})
    }

    let todasLasActividades = await Activity.findAll();
    if(name) {
        let activityName = await todasLasActividades.filter(actividad => actividad.name.toLowerCase() === name.toLowerCase()) // toLowerCase() pasa todas las cadeans a mayusculas y poder compararlas, sin afectar lo que esta escrito.
        await Activity.update({
            id: activityName[0].id,
            dificultad: dificultad,
            duración: duración,
            temporada: temporada,
            country: country,
            img: img
        },
        {
            where: {name: name}
        })
        activityName?
        res.status(200).send(activityName):
        res.status(404).send('No se encuentra actividad') 
    } else {
        res.status(200).send(todasLasActividades);
    }
});

module.exports = router;