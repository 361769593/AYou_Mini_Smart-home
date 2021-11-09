const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const { Schema } = mongoose;

/**
 * 房间信息表
 */
const schema = new Schema({
    roomId: { type: String, required: true }, // 房间ID
    roomName: { type: String, required: true }, // 房间名称
    temp: { type: String, default: '0' }, // 房间温度
    humi: { type: String, default: '0' }, // 房间湿度
}, {
    _id: false,
    collection: 'roomInfo',
    timestamps: true,
});

schema.plugin(mongoosePaginate);

exports = module.exports = schema;