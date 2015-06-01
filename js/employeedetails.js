$(document).on("pageshow","#clienti_dettaglio",function(){ 
	var id = localStorage["cliente_id"]


//displayEmployee(data)

	call_cliente(id);
	
	//$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
});



function call_cliente(idcliente){
	
	
		
	    var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		      this.db.transaction(
            function(tx) {
		tx.executeSql('SELECT RagioneSociale, SedeLegale, Telefoni, Email FROM ana_clienti WHERE IDCliente = ' + idcliente ,
  [],
  function(tx,results){
    var len = results.rows.length;
    for (var i=0; i<len; i++){
		$('#rag_sociale').html(results.rows.item(i).RagioneSociale)
    
	  $('#dettaglio_cliente').append('<li  >'+results.rows.item(i).SedeLegale+'</li>');
	  $('#dettaglio_cliente').append('<li >'+results.rows.item(i).Telefoni+'</li>');
	  $('#dettaglio_cliente').append('<li  >'+results.rows.item(i).Email+'</li>');
	  	$('#dettaglio_cliente').listview('refresh');
    }
   

  }

);

	
			}
			);
	}