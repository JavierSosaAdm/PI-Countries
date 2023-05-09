const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(3), // para que el id sean string de 3 letras
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    imgBandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregión: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    área: {
      type: DataTypes.INTEGER, //datos numéricos
      allowNull: true,
    },
    población: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false, //desactiva agregat datos de fecha y hora a la tabla
    freezeTableName: true, // desactiva el plural del nombramiento
  });
};
