const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificultad: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            validate: {
                min: 1,
                max: 5
            },
            allowNull: false,
        },
        duración: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 96
            },
            allowNull: true
        },
        temporada: {
            type: DataTypes.ARRAY(DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')),
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    })
};