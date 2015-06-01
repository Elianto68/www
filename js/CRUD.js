// JavaScript Document



var db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);

var oggi = "";
var d = new Date();
var anno =  d.getFullYear();
var mese=((d.getMonth()+1)>=10)? (d.getMonth()+1) : '0' + (d.getMonth()+1); 
var giorno = d.getDay();
var oggi = anno+"-"+mese+"-"+giorno;

var errCallback = function(){
alert("Errore nella transazione del database.");
}

var saveWinkle = function(winklename, location, successCallback){
db.transaction(function(transaction){
transaction.executeSql(("INSERT OR REPLACE INTO calendario ( IDCliente, IDOperatore, FuoriCalendario, DataPianificato, DataIntervento, Ora, Minuto, idAltra, PresenzaDi, Titolo, Qualifica, Firma, Concluso, VistoC, Note) VALUES (?, ?);"),
['49', location], function(transaction, results){successCallback(results);}, errCallback);
});
};


var NuovoCalendario = function(IDCliente, IDoperatore, successCallback){
db.transaction(function(transaction){
transaction.executeSql(("INSERT OR REPLACE INTO calendario ( IDCliente, IDOperatore, FuoriCalendario, DataPianificato, DataIntervento, Ora, Minuto, idAltra, PresenzaDi, Titolo, Qualifica, Firma, Concluso, VistoC, Note) VALUES (?, ?);"),
['49', location], function(transaction, results){successCallback(results);}, errCallback);
});
};




function crud(azione, tabella, campo, indexfield,indexvalue, valore){
	
	    var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		var sql = "";
		
		if(azione == 'UPDATE'){
			
			sql = "UPDATE "+tabella+' SET '+campo+'="'+valore+'" WHERE '+indexfield+'='+indexvalue+'; ';
			
			}
		if(azione == 'DELETE'){
			
			sql = 'DELETE FROM '+tabella+' WHERE '+indexfield+'='+indexvalue+'; ';
			 console.log(sql);
			
		}	
			
		     	db.transaction(function(transaction){
					transaction.executeSql(sql);
				}); 
				
				 console.log(sql)
				 
				 
	}
	
function find_singolo_dato(tabella,campo,index,indexvalue){
	
	
	var self = this;
	var valore_ritorno = "";
	localStorage["valore_ritorno"] = "";
	
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		this.db.transaction(
        function(tx) {
			var sql  ='SELECT '+campo+' FROM '+tabella+' WHERE '+index+' = '+indexvalue+' ;'
		tx.executeSql( sql ,
  [],
  function(tx,results){
    var len = results.rows.length;
	
	if(len>0){
    
		
		row = results.rows.item(0);
		valore_ritorno =row[campo];
		console.log('trovato:' +valore_ritorno);
		localStorage["valore_ritorno"] = valore_ritorno;
		return valore_ritorno;
    }
  
  }

);
		
			}
			);
	
	}


	
	
	function canc_modulo(){
	if(confirm('Confermi la cancellazione del modulo ? ')){
		
		
		var idcal = localStorage["cal_id"];
		var idcl = localStorage["cliente_id"];
	
		crud('DELETE', 'Calendario', ' ', 'idCalendario',idcal, ' ')
	
		setTimeout(function(){
               	$.mobile.changePage("#interventi", { allowSamePageTransition:true } );
            },20);
	
		
		   
		
	}
	}
	
		
	
function oggi(){	
	
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy+'/'+mm+'/'+dd;

return today;
}


	
	function insert_nuovo_modulo(){
	
	if(confirm('Confermi l\'inserimento di un nuovo modulo prelievo')){
		var idcliente 	= localStorage["cliente_id"]; 
		var idoperatore = localStorage["idoperatore"];
		var today = oggi;
		
	 	var self = this;
		
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		var sql = "INSERT INTO Calendario (IDCliente, IDOperatore, FuoriCalendario, DataPianificato) VALUES (?, ?, 1, ?)";
		
	
				db.transaction(function(transaction){
					
					  var params = [idcliente, idoperatore, today];
					
                    transaction.executeSql(sql, params);
				});		
	
	$.mobile.navigate("#modulo_ordine");
			//$.mobile.changePage("modulo_ordine", {reloadPage:true});
		}	
	
	}	
	
	
	
	
function canc_dett(){
	if(confirm('Confermi la cancellazione della riga ? ')){
	
	var iddettc = localStorage["iddettc"];
	crud('DELETE', 'ts_Calendario_Prodotto', ' ', 'IDDettC',iddettc, ' ')
		
		
		   setTimeout(function(){
              $.mobile.navigate("#modulo_ordine");
            },20);
		
	}
	}	

function update(valore,campo){
	
		var idcl 	= localStorage["cliente_id"]; 
		var idoperatore = localStorage["idoperatore"];
		var idcal = localStorage["cal_id"];
		
	
	
		if(campo=='Firma'){
			var valore = sigCapture.toString();
			
			document.getElementById("img_firma").src="data:image/png;base64,"+valore;
			$('#display_firma').show();
			$('#canvasContainer').hide();
			
			
			}
			
			
			if(campo=='Firma_canc'){
			var valore 	= "";
			campo		='Firma';
			
			document.getElementById("img_firma").src="";
			
			$('#display_firma').hide();
			$('#canvasContainer').show();
			
			}
			
		crud('UPDATE', 'calendario', campo, 'idCalendario',idcal, valore)
		
		}
		
		function update_dett(valore,campo){
		
		
		var iddettc = localStorage["iddettc"];
		
		
		crud('UPDATE', 'ts_Calendario_Prodotto', campo, 'IDDettC',iddettc, valore)
		
		}
		

function find_gruppo(idcal){
			
			
		valore_ritorno = 0;	
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		this.db.transaction(
        function(tx) {
			var sql  ='SELECT Gruppo FROM ts_Calendario_Prodotto WHERE IDCalendario = '+idcal+' ORDER BY Gruppo; '
			
		
			
		tx.executeSql( sql ,
  [],
  function(tx,results){
    var len = results.rows.length;
	
	console.log('rows for GRUPPO found:'+len);
	

    for (var i=0; i<len; i++){
	
    
		alert(results.rows.item(i).Gruppo);
		
		valore_ritorno =results.rows.item(i).Gruppo;
		
		
    
	}
  }

);
		
			}
			);
	
		console.log('trovato Ultimo Gruppo:' +valore_ritorno);
		valore_ritorno = (valore_ritorno*1)+1;
		console.log('trovato Next Gruppo:' +valore_ritorno);
		return valore_ritorno;	
}	
	
	
	
function check_modulo(){
		
		var idprova = $("#IDProvaNL").val();
		var qty = $("#qty").val();
		
	
		if(idprova==''){
				alert('Selezionare una prova');
				return false;
				}
				
			if(qty==''){
				alert('Inserire una quantita');
				return false;
				}	
		if(!(isNumeric(qty))){
			alert('Inserire un valore numerico per la quantita');
			return false;
			
			}
			
		else return true;
		}
		
		
	
	
	function check_modulo_dett(){
		
		var IDTipoProdotto = $("#IDTipoProdotto").val();
		var Note_dett = $("#Note_dett").val();
		var Lotto = $("#Lotto").val();
		var TempC = $("#TempC").val();
		var Conservabile_dett = $("#Conservabile_dett").val();
		var IdStadioLavorazione = $("#IdStadioLavorazione").val();
		var NoteSito = $("#NoteSito").val();
		var IDSuperficie = $("#IDSuperficie").val();
		          
	
			if(IDTipoProdotto==''){
				alert('Selezionare tipo prodotto');
				return false;
				}
				
			if(Note_dett==''){
				alert('Inserire una descrizione ');
				console.log('return false');
				return false;
				}	
			if(Lotto==''){
			alert('Inserire un valore numerico per il Lotto');
			console.log('return false');
			return false;
			
			}
			if(TempC==''){
			alert('Inserire un valore numerico per la Temperatura');
			console.log('return false');
			return false;
			
			}
			if(Conservabile_dett==''){
			alert('Inserire un valore numerico per la conservabilita');
			console.log('return false');
			return false;
			
			}
			if(IdStadioLavorazione==''){
			alert('Inserire un valore numerico per lo stadio di lavorazione');
			console.log('return false');
			return false;
			
			}
			if(NoteSito==''){
			alert('Inserire un valore numerico per il sito del campionamento');
			console.log('return false');
			return false;
			
			}	
			if(IDSuperficie==''){
			alert('Inserire un valore numerico per la superficie');
			return false;
			
			}		
		else return true;
		}


		
function save_nuovo_prova(){
		
		var idprova = $("#IDProvaNL").val();
		var qty = $("#qty").val();
		var uc = $("#UC").val();
		var arr = "";
		
		
		
		
	if(check_modulo()){
				insert_dett_prove(idprova,qty,uc);
		   		setTimeout(function(){
               	$.mobile.changePage("#modulo_ordine", { allowSamePageTransition:true } );
            },20);
	}
	
	}	
	
	function insert_dett_prove(idprova,qty,uc){
	
		var idcal = localStorage["cal_id"];
	 	var self = this;
		//var gruppo = find_gruppo(idcal);
		var gruppo = '1';
		var arr = find_singolo_dato('tab_prove','ARR_PROVE','IDProva',idprova);
		
	
		
		
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		var sql = "INSERT INTO ts_Calendario_Prodotto (IDProva, IDCalendario, Qta, Gruppo) VALUES (?,?,?,?)";
		
		
		if(qty>0){
			for (var i=0; i<qty; i++){
				db.transaction(function(transaction){
					
					  var params = [idprova, idcal, qty, gruppo];
					
                    transaction.executeSql(sql, params);
				});
				
				//console.log('Inserito '+qty+' prove.');
			}
		}
				 
				
		
	
	}
	function chiudi_dett_riga(){
	
	if(check_modulo_dett()){
	  update_dett('1','Finito');
	
	$.mobile.changePage("#modulo_ordine", { allowSamePageTransition:true } );
	}
	
	}
	
	function chiudi_modulo(){
	
		if(confirm('Confermi la chiusura del modulo?')){
	  update('1','Concluso');
	
	$.mobile.changePage("#interventi", { allowSamePageTransition:true } );
		}
	
	}
	