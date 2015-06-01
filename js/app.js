

var syncURLChriva = "http://www.arancioonline.org/chriva/sync_api";

var syncURL = "http://www.arancioonline.org/chriva/sync_api/clienti";



var employees;

var calendario

var idoperatore;


var sigCapture = null;


 document.addEventListener('deviceready', function () {
	 
	
	StatusBar.overlaysWebView( false );     
	StatusBar.backgroundColorByHexString('#ffffff');
	StatusBar.styleDefault();
	FastClick.attach(document.body);
	 if (navigator.notification) { // Override default HTML alert with native dialog
				window.alert = function (message) {
					navigator.notification.alert(
						message,    // message
						null,       // callback
						"Chriva Mobile", // title
						'OK'        // buttonName
			);
            };
		}
 }, false);




$(document).on("pageshow","#manutenzione",function(){ 


var conn = checkConnection();

	$('#ConnStatus').html('Stao connessione: '+conn);

});

$(document).on("pageshow","#index",function(){ 	

if(isNumeric(localStorage["idoperatore"])){
	/// l'operatore è loggato
	
	
	$('#block_login').hide();
	$('#block_menu').show();
	$('.jqm-list').show();
	
	$('#id_op').html('<strong>ID:</strong> '+localStorage["idoperatore"]);
	$('#nome_op').html('<strong>Op:</strong> '+localStorage["nomeoperatore"]);
	$('#email_op').html('<strong>Mail:</strong> '+localStorage["emailoperatore"]);
	
	
	
	
	}else{
		
		// NON loggato
		$('#block_login').show();
		$('#block_menu').hide();
		$('.jqm-list').hide();
		}

});

////  MODULO PRELIEVO DETTAGLIO 

$(document).on("pageshow","#modulo_ordine",function(){ 	
	
	var id = localStorage["cal_id"];
	var idcliente = localStorage["cliente_id"];
	
	localStorage["iddettc"] = '';
	localStorage["label_prova_add"] = '';
	
	find_singolo_dato('calendario','IDCalendarioONLINE','IDCalendario',id);
	var IDCalOnline = localStorage["valore_ritorno"];
	
	console.log('online = '+IDCalOnline);
	if(IDCalOnline != ""){console.log('online');}
	$('#idcliente').val(idcliente);
	$('#idcal').val(id);
	

	$("#signature").parents("*").css("overflow", "visible");
	sigCapture = new SignatureCapture( "signature" );
	
	
	populate_modulo(id);
	populate_modulo_dett_prel(id);	
	populate_select_AS(idcliente);
	populate_select_tipoprova(IDProvaNL);
	
$('#DataIntervento2').datetimepicker({
dayOfWeekStart : 1,
lang:'it',
timepicker:true,
format:'d-m-Y H:i',
defaultDate: false,
 onSelectDate:function(dp,$input){
    crud('UPDATE', 'calendario', 'DataIntervento', 'idCalendario',id, dp.dateFormat('d-m-Y'));
	crud('UPDATE', 'calendario', 'Ora', 'idCalendario',id, dp.dateFormat('H'));
  	crud('UPDATE', 'calendario', 'Minuto', 'idCalendario',id, dp.dateFormat('i'));
  }
  
	
});



	

});



function populate_select_tipoprova(select_name){
	
	    var self = this;
		
		$('#IDProvaNL')
    .find('option')
    .remove()
    .end()
  ;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		      this.db.transaction(
            function(tx) {
		tx.executeSql('SELECT IDProva, Prova FROM tab_prove WHERE Prova <>"" Order By Prova ',
  [],
  function(tx,results){
    var len = results.rows.length;
	 $('#IDProvaNL').append('<option value="" selected ></option>');
  
    for (var i=0; i<len; i++){
      $('#IDProvaNL').append('<option value="'+results.rows.item(i).IDProva+
        '" >'+results.rows.item(i).Prova+'</option>');
    }
   
	$("#IDProvaNL").selectmenu('refresh', true);
  }

);
		
			}
			);
	}
	
	
		
		
	
	
function populate_modulo(id){
		
		
		 $('#ragsoc').empty();
		 
		 
		var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		this.db.transaction(
        function(tx) {
		tx.executeSql('SELECT idCalendario, DataIntervento, Ora, Minuto, PresenzaDi, Firma, Concluso, RagioneSociale FROM calendario LEFT JOIN ana_clienti ON calendario.IDCliente=ana_clienti.IDCliente  WHERE idCalendario = ' + id ,
  [],
  function(tx,results){
    var len = results.rows.length;
    for (var i=0; i<len; i++){
      
	  var dataint = results.rows.item(i).DataIntervento + ' '+ results.rows.item(i).Ora+':'+results.rows.item(i).Minuto;
	  	$('#DataIntervento').val(results.rows.item(i).DataIntervento);
		
		/*$("#DataIntervento").datetimepicker('setDate', results.rows.item(i).DataIntervento);
		$("#DataIntervento").datetimepicker('defaultDate', results.rows.item(i).DataIntervento);*/
		
		localStorage["DataIntervento"] = results.rows.item(i).DataIntervento;
		localStorage["OraIntervento"] = results.rows.item(i).Ora+':'+results.rows.item(i).Minuto;
		
		$('#PresenzaDi').val(results.rows.item(i).PresenzaDi);
		$('#display_firma').hide();
		$('#canvasContainer').show();
		if(results.rows.item(i).Firma!=''){
			document.getElementById("img_firma").src="data:image/png;base64,"+results.rows.item(i).Firma;
			$('#display_firma').show();
			//$('#canvasContainer').hide();
		
		}else{
			$('#canvasContainer').show();
		}
		$('#ragsoc').append('Modulo: '+results.rows.item(i).RagioneSociale);
		$('#DataIntervento').val(dataint);
    }
  
  }

);
		
			}
			);
			
			
	
	}
	

function populate_modulo_dett_prel(id){
	
	
		$('#box_prelievo').empty();
		var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		this.db.transaction(
        function(tx) {
			
		tx.executeSql('SELECT IDDettC, IDListino, IDSuperficie, NSuperficie, SuperficiePrel, IDProdotto, IDTipoProdotto, IDCliente, IDContratto, IDCalendario,  NumProtocollo, Anno, ARR_analisi, Qta, UC, Prezzo, Fissato, Periodicita, NumSettimane, ParteDa, Gruppo, GruppoSup, Descrizione, ts_Calendario_Prodotto.Note, ts_Calendario_Prodotto.NoteSito, IDDett, ARR_Stadio, Lotto, TempC, TempAcc, Conservabile, Finito, Visto, Incompleto, NoteIncompleto, RimandatoA, RimandatoDA, Prova FROM ts_Calendario_Prodotto LEFT JOIN tab_prove ON ts_Calendario_Prodotto.IDProva=tab_prove.IDProva WHERE IDCalendario = ' + id +' ORDER BY Gruppo, GruppoSup',
  [], 
  function(tx,results){
    var len = results.rows.length;
	console.log('rows found:'+len);
	if(len>0){
		
		$("#box_prelievo").append('<div data-role="controlgroup" >');
		gruppocheck = "";
		contUC	= 1;
		
    for (var i=0; i<len; i++){
		var data_theme  = "";
		if(results.rows.item(i).Finito=='1'){
		 data_theme = 'data-theme="b"';
		}
		
		labelUC = "";
		
		
		 if(results.rows.item(i).UC >1 ){
	
			gruppocheck = results.rows.item(i).Gruppo;
		 	labelUC = 'Un. '+ contUC.toString();
		 	contUC = parseInt(contUC) +1;
		}
      $("#box_prelievo").append('<a href="#dett_prelievi" onclick="save_dett_modulo('+results.rows.item(i).IDDettC+',\''+labelUC+'\')" data-id="'+results.rows.item(i).IDDettC+'"  '+data_theme+'   data-role="button" >'+results.rows.item(i).Prova+' '+labelUC +'</a>');
	  
	 
    }
	
	$("#box_prelievo").append('</div>');
	$('#box_prelievo').trigger("create");

	}
  
  },
	function errorHandler(tx, error) {
        console.log("Error : " + error.message + " in " );
    }

);
		
			}
			);
			
			
	
	}
		
	
function populate_select_AS(idcliente){
	
	    var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		this.db.transaction(
        function(tx) {
		tx.executeSql('SELECT idAltra, RagioneSociale FROM altre_sedi WHERE IDCliente = ' + idcliente ,
  [],
  function(tx,results){
    var len = results.rows.length;
    for (var i=0; i<len; i++){
      $('#idAltra').append('<option value="'+results.rows.item(i).idAltra+
        '" >'+results.rows.item(i).RagioneSociale+'</option>');
    }
    $('#idAltra').append('<option value="">Stessa Sede</option>');
	
	$("#idAltra").selectmenu('refresh', true);
  }

);
		
			}
			);
	}


////  FINE MODULO PRELIEVO DETTAGLIO 


////  LISTA CLIENTI 

$(document).on("pageshow","#listaclienti",function(){ 
	
	getEmployeeList();
});

function getEmployeeList() {
	
	$('#employeeList li').remove();
	
	dao.findAll(function(employees) {
        $('#list').empty();
        var l = employees.length;
        for (var i = 0; i < l; i++) {
            var employee = employees[i];
            	$('#employeeList').append('<li><a href="#clienti_dettaglio" onclick="save_idcliente(' + employee.IDCliente + ')" id="' + employee.IDCliente + '" >' +
					'<h4> ' + employee.RagioneSociale +'</h4>' +
					'<p>' + employee.SedeLegale + '</p>' +
					'<span class="ui-li-count">0</span></a></li>');
        }
		$('#employeeList').listview('refresh');
    });
	
	
		
		
	
}

//// FINE  LISTA CLIENTI 

///// LISTA DEI MODULI  INTERVENTO

$(document).on("pageshow","#interventi",function(){ 
	localStorage["cal_id"] = null;
	getModuliList();
});





function getModuliList() {
	
	
		
	$('#worksList li').remove();
	
	dao.findAllWork(function(interventi) {
        $('#list').empty();
        var l = interventi.length;
        for (var i = 0; i < l; i++) {
            var intervento = interventi[i];
			var datatheme = "";
			if(intervento.Concluso == '1'){datatheme = 'data-theme="b"';}
            	$('#worksList').append('<li '+datatheme+' ><a href="#modulo_ordine" onclick="save_par_calendario('+intervento.idCalendario+','+intervento.IDCliente+')">' +
					'<h4> ' + intervento.RagioneSociale +'</h4>' +
					'<p>' + intervento.SedeLegale + '</p>' +
					'</a></li>');
        }
		$('#worksList').listview('refresh');
    });
		
		
		
		
		
		
	
}


/// ///// FINE LISTA DEI MODULI  INTERVENTO





////// MODULO DETTAGLIO PRELIEVO 

	$(document).on("pagebeforeshow","#dett_prelievi",function(){ 


	
	
 	iddettc = localStorage["iddettc"];

	 populate_dett_prelievo(iddettc);
	
});

function populate_dett_prelievo(iddettc){
	
	
	this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
			
	this.db.transaction(
	function(tx) {
		var sql = 'SELECT IDDettC, IDListino, IDSuperficie, NSuperficie, SuperficiePrel, IDProdotto, IDTipoProdotto, IDCliente, IDContratto, IDCalendario, IDSuperficie, NumProtocollo, Anno, ARR_analisi, Qta, UC, Prezzo, Fissato, Periodicita, NumSettimane, ParteDa, Gruppo, GruppoSup, Descrizione, ts_Calendario_Prodotto.Note, ts_Calendario_Prodotto.NoteSito, IDDett, ARR_Stadio, Lotto, TempC, Conservabile, Finito, Visto, Incompleto, NoteIncompleto, RimandatoA, RimandatoDA, Prova FROM ts_Calendario_Prodotto LEFT JOIN tab_prove ON ts_Calendario_Prodotto.IDProva=tab_prove.IDProva WHERE IDDettC = ' + iddettc ;
		console.log(sql);
			tx.executeSql(sql,
	  [],
	  function(tx,results){
		var len = results.rows.length;
		for (var i=0; i<len; i++){
		 
		 $('#Note_dett').val(results.rows.item(i).Note);
		 $('#Lotto').val(results.rows.item(i).Lotto);
		 $('#TempC').val(results.rows.item(i).TempC);
		 $('#NoteSito').val(results.rows.item(i).NoteSito);
		 $('#Conservabile_dett').val(results.rows.item(i).Conservabile);
		 
		 $('#label_dett_prev').html(results.rows.item(i).Prova+ ' '+localStorage["label_prova_add"]);
		 
		 
		 $("#IDSuperficie").selectmenu('refresh', true);
		 
		   
		 populate_select_superfici('IDSuperficie',results.rows.item(i).IDSuperficie)
		 populate_select_tipoprod('IDTipoProdotto',results.rows.item(i).IDTipoProdotto)
		 populate_select_statolav('IdStadioLavorazione',results.rows.item(i).ARR_Stadio)
		 
		 
		}
   
	
  }

);
		
	}
);
			
}



function populate_select_superfici(select_name,index){
	
	    var self = this;
		$('#IDSuperficie')
    .find('option')
    .remove()
    .end()
  ;
		
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		      this.db.transaction(
            function(tx) {
		tx.executeSql('SELECT IDSuperficie, Superficie FROM tab_superfici Order By Superficie ',
  [],
  function(tx,results){
    var len = results.rows.length;
	
	var selected = '';
		if(index==''){selected = 'selected';}
	 $('#IDSuperficie').append('<option value="" '+selected+' >--seleziona--</option>');
	 
	 
    for (var i=0; i<len; i++){
		
		var selected = '';
		if(index==results.rows.item(i).IDSuperficie){selected = 'selected';}
		
      $('#IDSuperficie').append('<option value="'+results.rows.item(i).IDSuperficie+
        '"  '+selected+'>'+results.rows.item(i).Superficie+'</option>');
    }
   
	$("#IDSuperficie").selectmenu('refresh', true);
  }

);
		
			}
			);
	}



function populate_select_tipoprod(select_name,index){
	
	    var self = this;
		
		$('#IDTipoProdotto')
   .find('option')
    .remove()
    .end()
  ;



        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);

		      this.db.transaction( 
            function(tx) {
		tx.executeSql('SELECT IDProdotto,  TipoProdotto FROM tab_tipoprodotti Order By TipoProdotto ',
  [],
  	function(tx,results){
    var len = results.rows.length;
	
	var selected = '';
		if(index==''){selected = 'selected';}
	 $('#IDTipoProdotto').append('<option value="" '+selected+' >--seleziona--</option>');
		
    for (var i=0; i<len; i++){
		
		var selected = '';
		if(index==results.rows.item(i).IDProdotto){selected = 'selected';}
		
      $('#IDTipoProdotto').append('<option value="'+results.rows.item(i).IDProdotto+
        '" '+selected+' >'+results.rows.item(i).TipoProdotto+'</option>');
    }
   
	$("#IDTipoProdotto").selectmenu('refresh', true);
  }

);
		
			}
			);
	}

function populate_select_statolav(select_name,index){
	
	    var self = this;
		
			$('#IdStadioLavorazione')
   .find('option')
    .remove()
    .end()
  ;
  
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		 
		this.db.transaction(
        function(tx) {
			tx.executeSql('SELECT IdStadioLavorazione,  StadioLavorazione FROM tab_stadiolavorazione Order By StadioLavorazione ',
  [],
  			function(tx,results){
			var len = results.rows.length;
			
			var selected = '';
		if(index==''){selected = 'selected';}
	 	$('#IdStadioLavorazione').append('<option value="" '+selected+' >--seleziona--</option>');
		
			
			for (var i=0; i<len; i++){
			
				var selected = '';
				if(index==results.rows.item(i).IdStadioLavorazione){selected = 'selected'; }
				
				$('#IdStadioLavorazione').append('<option value="'+results.rows.item(i).IdStadioLavorazione+
				'" '+selected+'>'+results.rows.item(i).StadioLavorazione+'</option>');
			}
   
				$("#IdStadioLavorazione").selectmenu('refresh', true);
  }

);
		
			}
			);
	}

////////