const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const { db: dbConfig } = require('../config');

const getDbConfig = (dataSource) => {
    const config = dbConfig[dataSource];
    if (!config) {
        console.error(`[数据库配置错误] config.db.${dataSource} not found `);
        throw new Error('db config not found');
    }
    return config;
};

const connect = (dataSource) => {
    const config = getDbConfig(dataSource);
    const db = mongoose.createConnection(config.url, config.options);
    db.on('error', console.error.bind(console, `${dataSource} connect error ...`));
    db.once('open', () => {
        console.info(`${dataSource} db open`);
        autoIncrement.initialize(mongoose.connection);
    });
    return db;
};

exports = module.exports = {
    mongoose,
    smartHome: connect('smartHome'),
};