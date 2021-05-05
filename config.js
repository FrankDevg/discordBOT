module.exports = {
    prefix: '-',
    statusBot: 'ON',
    //encapsulamiento de modulos
    //SU
    superusers: [''], //process.env.ID Agregar ids de desarrolladores 412660462065549324
    categories: [
        { name: 'test', priority: 2 },
        { name: 'general', priority: 3 }


    ],
    // Grupos de usuarios confiruacion de acuerdo al servidor dependiendo los rules que deseo tener
    groups: [
        { name: 'user', permLvl: 0 },
        { name: 'member', permLvl: 1 },
        { name: '🔦Mods', permLvl: 2 },
        { name: '🎮-King', permLvl: 3 }
    ]



}