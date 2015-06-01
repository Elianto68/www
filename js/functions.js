function isNumeric(val) {
		var validChars = '0123456789';
		/*if(isdouble=='1'){
        	var validChars = '0123456789.,';
		}*/


        for(var i = 0; i < val.length; i++) {
            if(validChars.indexOf(val.charAt(i)) == -1)
                return false;
        }


        return true;
    }
	



function save_idcliente(id){
	
	localStorage["cliente_id"] = id;
	}

	
function save_par_calendario(idcal,idcliente){
	
	localStorage["cal_id"] = idcal;
	localStorage["cliente_id"] = idcliente;
	}
	
function save_dett_modulo(id,label){
	
	localStorage["iddettc"] = id;
	localStorage["label_prova_add"] = label;
	console.log('Settato idettc='+id);
	}	
	
	
	