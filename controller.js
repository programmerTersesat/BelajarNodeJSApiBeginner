'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku Berjalan",res);
}

exports.getCountData = function(req,res){
    var cekKata = req.body.cekKata;
    var hasilHitungKata = cekHitungData(cekKata);

    var kasihResponse = {
        "resultHitungKata" : hasilHitungKata
    }

    response.ok(kasihResponse,res);

}


function cekHitungData(data){
    let dataTemp  = data.split(" ")
    // console.info(dataTemp.length);
            
    let result = dataTemp.length;
    return result;
}