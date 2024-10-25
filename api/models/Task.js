const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

// define the task model
const taskModel = mongoose.Schema({
    id: { type: 'string', required: true, unique: true },
    name: { type: 'string', required: true },
    archived: { type: 'boolean', required: true },
})

// use the unique validator plugin to ensure id is unique
taskModel.plugin(uniqueValidator);

module.exports = mongoose.model('Task', taskModel);