/**
 * Created by yeanzhi on 16/10/18.
 */
'use strict';
let _config = {};
if(process.env.NODE_ENV === 'dev'){
    _config = require('./dev.js');
}else if (process.env.NODE_ENV === 'development'){
    _config = require('./development.js');
}else if (process.env.NODE_ENV === 'staging'){
    _config = require('./staging.js');
}else if (process.env.NODE_ENV === 'production'){
    _config = require('./production.js');
}else{
    _config = require('./production.js');
}

module.exports = Object.assign({
    name:'{{name}}'
},_config);
