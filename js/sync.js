// JavaScript Document


var isconnected = true;






function checkConnection() {
   // var networkState = navigator.connection.type;
 	/*var stato_text;
    var states = {};
	
    states[Connection.UNKNOWN]  = 'Connessione Generica';
    states[Connection.ETHERNET] = 'Connessione Ethernet';
    states[Connection.WIFI]     = 'Connessione WiFi';
    states[Connection.CELL_2G]  = 'Connessione Cell 2G';
    states[Connection.CELL_3G]  = 'Connessione Cell 3G';
    states[Connection.CELL_4G]  = 'Connessione Cell 4G';
    states[Connection.CELL]     = 'Connessione Cell Generica';
    states[Connection.NONE]     = 'Nessuna Connessione';

    return  states[networkState];*/
}




	
	


$('#sincro_page').on('pageshow', function(event) {
	
	var stato = '';
	
	
	$('#conn_status').html(stato);
	
	
		if(stato == 'Nessuna Connessione'){
			
			$("#conn_status").attr("class", "conn_no");
			var isconnected = false;
	
		}else{
			$("#conn_status").attr("class", "conn_ok");
			var isconnected = true;
		}
	
	
	
});


	
	function sync_to_server(cosa){
		
	console.log('inizio Sync');
	var stato = "ok";
	
	if(stato == 'Nessuna Connessione'){
		
		alert('Non hai connessione a internet! Riprovare piu tardi');
		return false;
	
	}else{
		
	var wheresql = "";
	if(cosa=='tutti'){ 
		wheresql = " WHERE Concluso = 1 AND Sync = 0 ";
		}else{
		var idCalendario = localStorage["cal_id"];	
		wheresql = " WHERE Concluso = 1 AND Sync = 0 AND idCalendario = "+idCalendario;
		}

	    var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		
		
		
		  this.db.transaction(
           function(tx) {
		tx.executeSql('SELECT idCalendario, IDCalendarioONLINE,  IDCliente, IDOperatore, FuoriCalendario, DataPianificato, DataIntervento, Ora, Minuto, idAltra, PresenzaDi, Titolo, Qualifica, Firma, Concluso, VistoC, Note FROM Calendario  ' + wheresql  ,
  [],
  function(tx,results){
    var len = results.rows.length;
    for (var i=0; i<len; i++){
		
		var idcal_processing = results.rows.item(i).idCalendario;
		var idcliente_processing = results.rows.item(i).IDCliente;
		
		$.ajax({
		type: 'POST',
		data: { idCalendario:		 idcal_processing,
				IDCalendarioONLINE:	 results.rows.item(i).IDCalendarioONLINE,
				IDCliente:			 results.rows.item(i).IDCliente,
				Mese:				 '3',
				IDOperatore:		 results.rows.item(i).IDOperatore,
				FuoriCalendario:	 results.rows.item(i).FuoriCalendario,
				DataPianificato:	 results.rows.item(i).DataPianificato,
				DataIntervento:		 '2015-03-02',
				//DataIntervento:		 results.rows.item(i).DataIntervento,
				Ora:				 results.rows.item(i).Ora,
				Minuto:				 results.rows.item(i).Minuto,
				idAltra:			 results.rows.item(i).idAltra,
				PresenzaDi:			 results.rows.item(i).PresenzaDi,
				Qualifica:			 results.rows.item(i).Qualifica,
				Firma:				 results.rows.item(i).Firma,
				Concluso:			 results.rows.item(i).Concluso,	
				VistoC:				 results.rows.item(i).VistoC,
				Sync:				 '1',
				Note:				 results.rows.item(i).Note,
				Cosa:				 'calendario'
			
				 },
		url: 'http://www.arancioonline.org/chriva/sync_api/postdata.php',
		success: function(data){
		
			console.log(data);
			alert(data.esito);
			alert(data.idcal);
			console.log('processing..'+idcal_processing);
			sync_ts_cal_prod(idcal_processing, idcliente_processing, data.idcal);
			crud('UPDATE', 'calendario', 'Sync', 'idCalendario',idcal_processing, '1')
				//alert(data.esito);
			//alert('Your comment was successfully added');
		},
		error: function(data){
			console.log(data);
			//alert('There was an error adding your comment');
		}
	});
	
      
    }
   

  }

);
	
	
			}
			); //// fine sync calendario
			
	
			
	}
	
		$.mobile.changePage("#interventi", { allowSamePageTransition:true } );
	}
	
	
	function sync_ts_cal_prod(idCalendario, idcliente_processing,idcalgestionale){
		
				
		/// sync calendario _ prodotto	
			if(idCalendario!='0'){ wheresql = " WHERE IDCalendario = "+idCalendario;}	
		  this.db.transaction(
           function(tx) {
		tx.executeSql('SELECT IDDettC, IDDettCONLINE, IDSuperficie, NSuperficie, SuperficiePrel, IDProdotto, IDTipoProdotto, IDCliente, IDContratto, IDCalendario,  NumProtocollo, Anno, ARR_analisi, Qta, UC, Prezzo, Fissato, Periodicita, NumSettimane, ParteDa, Gruppo, GruppoSup, Descrizione, ts_Calendario_Prodotto.Note, ts_Calendario_Prodotto.NoteSito, IDDett, ARR_Stadio, Lotto, TempC, TempAcc, Conservabile, Finito, Visto, Incompleto, NoteIncompleto, RimandatoA, RimandatoDA, Prova, ts_Calendario_Prodotto.IDProva FROM ts_Calendario_Prodotto LEFT JOIN tab_prove ON ts_Calendario_Prodotto.IDProva=tab_prove.IDProva   ' + wheresql  ,
  [],
  function(tx,results){
    var len = results.rows.length;
    for (var i=0; i<len; i++){
		
		
		
		$.ajax({
		type: 'POST',
		data: { IDCalendario:		 	idcalgestionale,
				IDDettCONLINE:		 	results.rows.item(i).IDDettCONLINE,
				IDTipoProdotto:	 	 	results.rows.item(i).IDTipoProdotto,
				IDProva:	 	 	 	results.rows.item(i).IDProva,
				IDCliente:			 	idcliente_processing,
				Note:		 		 	results.rows.item(i).Note,
				Lotto:	 			 	results.rows.item(i).Lotto,
				TempC:	 			 	results.rows.item(i).TempC,
				Conservabile:		 	results.rows.item(i).Conservabile,
				ARR_Stadio:				results.rows.item(i).ARR_Stadio,
				NoteSito:			 	results.rows.item(i).NoteSito,
				IDSuperficie:			results.rows.item(i).IDSuperficie,
				Cosa:				 	'ts_Calendario_Prodotto'
			
				 },
		url: 'http://www.arancioonline.org/chriva/sync_api/postdata.php',
		success: function(data){
		
			console.log(data);
				//alert(data.esito);
			//alert('Your comment was successfully added');
		},
		error: function(data){
			console.log(data);
			crud('UPDATE', 'calendario', 'Sync', 'idCalendario',idCalendario, '0')
			//alert('There was an error adding your comment');
		}
	});
	
	
	
	
      
    }
   

  }

);
	
	
			}
			);///// fine sync calendario prodotto
		
		
		
		
		
		
		}
	
	//// LOGIN REMOTO 
	
	$(document).on('pagebeforeshow', '#index', function(){  
        $(document).on('click', '#btn_login', function() { // catch the form's submit event
        if($('#login-1').val().length > 0 && $('#password-1').val().length > 0){
            // Send data to server through ajax call
            // action is functionality we want to call and outputJSON is our data
			
			
			$.ajax({
		type: 'POST',
		data: { password:		$('#password-1').val(),
				login:		 	$('#login-1').val(),
				Cosa:	 	 	'loginform'
				
			
				 },
		url: 'http://www.arancioonline.org/chriva/sync_api/postdata.php',
		 beforeSend: function() {
                        // This callback function will trigger before data is sent
                        $.mobile.loading('show') // This will show ajax spinner
                    },
					
		success: function(data){
		
			console.log(data);
			
				$.mobile.loading('hide') ;
				localStorage["idoperatore"]  = data.idoperatore;
				localStorage["nomeoperatore"]  = data.nome;
				localStorage["emailoperatore"]  = data.email;
				
				$.mobile.changePage("#index", { allowSamePageTransition:true } );
				
			//alert('Your comment was successfully added');
		},
		error: function(data){
			console.log(data);
			$.mobile.loading('hide') ;
			alert('Errore nel login, riprovare.');
		}
		
			});
                    
        } else {
            alert('Compilare tutti i campi');
        }           
            return false; // cancel original event to prevent form submitting
        });    
});


	
	
	
	//// LOGOUT 
	
	
	$(document).on('pagebeforeshow', '#manutenzione', function(){  
	 $(document).on('click', '#btn_logout', function() { 
	 
	 
	 if(confirm('Effettuo il logout?')){
		 localStorage["idoperatore"]  = null;
		 localStorage["nomeoperatore"]  = null;
		localStorage["emailoperatore"]  = null;
		 $.mobile.changePage("#index");
		 
		 }
	 });
	
	});