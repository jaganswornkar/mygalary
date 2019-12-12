'use strict';
module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    url: DataTypes.STRING,
    filename: DataTypes.STRING,
    filetype: DataTypes.STRING
  }, {});
  files.associate = function(models) {
    // associations can be defined here
  };
  return files;
};