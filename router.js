'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
            .get(jsonku.index);
    
    app.route('/tambah').post(jsonku.getCountData);
}