'use strict';
var ampBodyModel = require('../models/amp/ampBodyModels');
var mongoose = require('mongoose');
var bodySchema = ampBodyModel.ampBodySchema;



var amp = mongoose.model('ampBody',bodySchema);
var create_amp_document = createNewAMP();
