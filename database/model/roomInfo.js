const schema = require('../schema/roomInfo');
const { smartHome: db } = require('../mongo');

const Model = db.model('roomInfo', schema);

exports = module.exports = {
    model: Model,
    Model
};