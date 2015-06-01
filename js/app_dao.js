function create_table(table){
	
	this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='"+table+"'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing '+table+' table in Chriva database');
                        }
                        else
                        {
                            console.log(''+table+' table does not exist in local SQLite database');
                            self.createTable(callback);
                        }
                    });
            }
        )
	}
	
	
window.dao =  {

 

    initialize: function(callback) {
        var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
	

        // Testing if the table exists is not needed and is here for logging purpose only. We can invoke createTable
        // no matter what. The 'IF NOT EXISTS' clause will make sure the CREATE statement is issued only if the table
        // does not already exist.
		
		this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='ana_clienti'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing ana_clienti table in Chriva database');
                        }
                        else
                        {
                            console.log('ana_clienti table does not exist in local SQLite database creating....');
                            self.createTable(callback);
                        }
                    });
            }
			);
			
			
			
			this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='tab_tipoprodotti'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing tab_tipoprodotti table in Chriva database');
                        }
                        else
                        {
                            console.log('ana_clienti table tab_tipoprodotti not exist in local SQLite database creating....');
                            self.createTable_TipoProdotto(callback);
                        }
                    });
            }
			
			
			
        )
		
		
		this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='tab_stadiolavorazione'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing stadiolavorazione table in Chriva database');
                        }
                        else
                        {
                            console.log('ana_clienti table stadiolavorazione not exist in local SQLite database creating....');
                            self.createTable_StadioLavorazione(callback);
                        }
                    });
            }
			
			
			
        )
		
		
		
		
		this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='tab_superfici'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing tab_superfici table in Chriva database');
                        }
                        else
                        {
                            console.log('ana_clienti table tab_superfici not exist in local SQLite database creating....');
                            self.createTable_tab_superfici(callback);
                        }
                    });
            }
			
			
			
        )
		
		
			this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='tab_prove'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing tab_prove table in Chriva database');
                        }
                        else
                        {
                            console.log('ana_clienti table tab_prove not exist in local SQLite database creating....');
                            self.createTable_Campionamento(callback);
                        }
                    });
            }
			
			
			
        )
     		this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='calendario'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing calendario table in Chriva database');
                        }
                        else
                        {
                            console.log('ana_clienti table calendario not exist in local SQLite database creating....');
                            self.createTable_Calendario(callback);
                        }
                    });
            }
			
			
			
        )   


     		this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='ts_Calendario_Prodotto'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing ts_Calendario_Prodotto table in Chriva database ');
                        }
                        else
                        {
                            console.log('ana_clienti table ts_Calendario_Prodotto not exist in local SQLite database creating....');
                            self.createTable_Calendario_dett(callback);
                        }
                    });
				
            }
			
			
			
        )   
		
		
		
     		this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='tab_elencoprove'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing ts_Calendario_Prodotto table in Chriva database ');
                        }
                        else
                        {
                            console.log('ana_clienti table ts_Calendario_Prodotto not exist in local SQLite database creating....');
                            self.createTable_elencoprove(callback);
                        }
                    });
					//callback();
            }
			
			
			
        ) 
		

		
			
		this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='altre_sedi'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing altre_sedi table in Chriva database ');
                        }
                        else
                        {
                            console.log('ana_clienti table altre_sedi not exist in local SQLite database creating....');
                            self.createTable_AltraSede(callback);
                        }
                    });
					//callback();
            }
			
			
			
        ) 
		
		
			this.db.transaction(
            function(tx) {
                tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='tab_materiale'", this.txErrorHandler,
                    function(tx, results) {
                        if (results.rows.length == 1) {
							
                            console.log('Using existing tab_materiale table in Chriva database ');
                        }
                        else
                        {
                            console.log('table tab_materiale not exist in local SQLite database creating....');
                            self.createTable_Materiale(callback);
                        }
                    });
					callback();
            }
			
			
			
        ) 
		
		
    },
        
    createTable: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql =
                    "CREATE TABLE IF NOT EXISTS ana_clienti ( " +
                    "IDCliente INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    "RagioneSociale VARCHAR(250), " +
                    "SedeLegale VARCHAR(250), " +
                    "Telefoni VARCHAR(150), " +
                    "Email VARCHAR(150), " +
                    "Attivo INTEGER, " +
                    "UltimaModifica VARCHAR(50))";
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table clienti successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	    createTable_TipoProdotto: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql =
                    "CREATE TABLE IF NOT EXISTS tab_tipoprodotti ( " +
                    "IDProdotto INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    "TipoProdotto VARCHAR(250), " +
                    "EsempiProdotti VARCHAR(250), " +
                    "CatProdoto VARCHAR(150), " +
                    "Attivo INTEGER)";
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_tipoprodotti successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	    createTable_StadioLavorazione: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql =
                    "CREATE TABLE IF NOT EXISTS tab_stadiolavorazione ( " +
                    "IdStadioLavorazione INTEGER PRIMARY KEY AUTOINCREMENT, " +
					"StadioLavorazione VARCHAR(255), " +
                    "Attivo INTEGER )";
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_stadiolavorazione successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	 createTable_tab_superfici: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql =
                    "CREATE TABLE IF NOT EXISTS tab_superfici ( " +
                    "IDSuperficie INTEGER PRIMARY KEY AUTOINCREMENT, " +
					"Superficie VARCHAR(255), " +
                    "ARR_ANL VARCHAR(255) )";
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_superfici successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	    createTable_Campionamento: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql =
                    "CREATE TABLE IF NOT EXISTS tab_prove ( " +
                    "IDProva INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    "Prova VARCHAR(250), " +
                    "ARR_PROVE VARCHAR(250), " +
					"bool_uc INTEGER, " +
					"boll_int INTEGER, " +
					"bool_proto INTEGER, " +
                    "Note VARCHAR(250), " +
                    "Tipo_P VARCHAR(25), " +
                    "Attivo INTEGER)";
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table clienti successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	createTable_elencoprove: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql =
				"CREATE TABLE IF NOT EXISTS tab_elencoprove (" +
  "IDProva INTEGER PRIMARY KEY AUTOINCREMENT," +
  "Prova text," +
  "PrezzoBase FLOAT," +
  "GiorniPerLettura INTEGER ," +
  "um varchar(100) ," +
  "Norma varchar(150) ," +
  "Attivo INTEGER ," +
  "Gruppo INTEGER," +
  "ARR_GRUPPO varchar(255) ," +
  "DataSincro varchar(100))" ;
                
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_elencoprove successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	
	createTable_Materiale: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql ="CREATE TABLE IF NOT EXISTS tab_materiale (" +
  "IDMateriale INTEGER PRIMARY KEY AUTOINCREMENT," +
  "Materiale varchar(255) ," +
  "Prezzo FLOAT)";
  
                    
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table clienti successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	createTable_AltraSede: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql ="CREATE TABLE IF NOT EXISTS altre_sedi ( " +
 " idAltra  INTEGER PRIMARY KEY AUTOINCREMENT, " +
  "IDCliente INTEGER , " +
  "RagioneSociale varchar(255) , " +
  "SedeLegale varchar(255), " +
  "DataSinc varchar(255), " +
 " DataSincTemp varchar(255) ) ";
                    
                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table AltraSedi successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	createTable_Calendario: function(callback) {
        this.db.transaction(
            function(tx) {
				
			 var sql =	
		"CREATE TABLE IF NOT EXISTS calendario ( " +
  "idCalendario INTEGER PRIMARY KEY AUTOINCREMENT," +
  "IDCalendarioONLINE INTEGER  ," +
  "IDCliente INTEGER  ," +
  "IDOperatore INTEGER  ," +
  "FuoriCalendario INTEGER ," +
  "DataPianificato datetime  ," +
  "DataIntervento datetime  ," +
  "Ora VARCHAR(30)  ," +
  "Minuto INTEGER  ," +
  "idAltra INTEGER ," +
  "PresenzaDi VARCHAR(255)  ," +
  "Titolo VARCHAR(255)  ," +
  "Qualifica VARCHAR(255) ," +
  "Firma text," +
  "Concluso INTEGER ," +
  "VistoC INTEGER," +
  "Sync INTEGER DEFAULT 0," +
  "Note text)"; 

                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table calendario successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	
	
		createTable_Calendario_dett: function(callback) {
        this.db.transaction(
            function(tx) {
				
var sql =	"CREATE TABLE IF NOT EXISTS ts_Calendario_Prodotto (" +
  "IDDettC  INTEGER PRIMARY KEY AUTOINCREMENT," +
  "IDDettCONLINE  INTEGER ," +
  "IDListino INTEGER ," +
  "IDProva INTEGER  ," +
  "IDSuperficie INTEGER  ," +
  "NSuperficie INTEGER  ," +
  "SuperficiePrel INTEGER DEFAULT '100'," +
  "IDProdotto INTEGER ," +
  "IDTipoProdotto INTEGER ," +
  "IDCliente INTEGER ," +
  "IDContratto INTEGER ," +
  "IDCalendario INTEGER  ," +
  "IDCalFatt INTEGER ," +
  "NumProtocollo INTEGER ," +
  "Anno INTEGER ," +
  "ARR_analisi VARCHAR(255) ," +
  "Qta INTEGER  ," +
  "UC INTEGER  ," +
  "Fissato BOOLEAN  ," +
  "Periodicita INTEGER ," +
  "NumSettimane INTEGER ," +
  "ParteDa date ," +
  "Gruppo INTEGER ," +
  "GruppoSup INTEGER ," +
  "Descrizione text," +
  "Prezzo text," +
  "Note text," +
  "NoteSito text," +
  "IDDett INTEGER ," +
  "ARR_Stadio VARCHAR(250) ," +
  "Lotto VARCHAR(100) ," +
  "TempC VARCHAR(100) ," +
  "TempAcc INTEGER DEFAULT '4'," +
  "Conservabile INTEGER ," +
  "Finito BOOLEAN  ," +
  "Visto BOOLEAN  ," +
  "Incompleto BOOLEAN  ," +
  "NoteIncompleto VARCHAR(250)," +
  "RimandatoA INTEGER ," +
  "RimandatoDA INTEGER )" ;


                tx.executeSql(sql);
            },
            this.txErrorHandler,
            function() {
                console.log('Table ts_Calendario_Prodotto successfully CREATED in local SQLite database');
                callback();
            }
        );
    },
	


    dropTable: function(callback) {
		
		 var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
        this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS ana_clienti');
            },
            this.txErrorHandler,
            function() {
                console.log('Table ana_clienti successfully DROPPED in local SQLite database');
                //callback();
            }
        );
		
		 this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS calendario');
            },
            this.txErrorHandler,
            function() {
                console.log('Table calendario successfully DROPPED in local SQLite database');
                //callback();
            }
        );
		
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DELETE FROM ts_Calendario_Prodotto');
            },
            this.txErrorHandler,
            function() {
                console.log('Table ts_Calendario_Prodotto successfully EMPT in local SQLite database');
                //callback();
            }
        );
		
		
		 this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS ts_Calendario_Prodotto');
            },
            this.txErrorHandler,
            function() {
                console.log('Table ts_Calendario_Prodotto successfully DROPPED in local SQLite database');
                //callback();
            }
        );
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS tab_stadiolavorazione');
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_stadiolavorazione successfully DROPPED in local SQLite database');
               // callback();
            }
        );
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS tab_superfici');
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_superfici successfully DROPPED in local SQLite database');
               // callback();
            }
        );
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS tab_elencoprove');
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_elencoprove successfully DROPPED in local SQLite database');
               // callback();
            }
        );
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS tab_materiale');
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_stadiolavorazione successfully DROPPED in local SQLite database');
               // callback();
            }
        );
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS tab_prove');
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_prove successfully DROPPED in local SQLite database');
               // callback();
            }
        );
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS stadiolavorazione');
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_stadiolavorazione successfully DROPPED in local SQLite database');
               // callback();
            }
        );
		
		this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS tab_tipoprodotti');
            },
            this.txErrorHandler,
            function() {
                console.log('Table tab_tipoprodotti successfully DROPPED in local SQLite database');
               // callback();
            }
        );
		
			this.db.transaction(
            function(tx) {
                tx.executeSql('DROP TABLE IF EXISTS altre_sedi');
            },
            this.txErrorHandler,
            function() {
                console.log('Table altre_sedi successfully DROPPED in local SQLite database');
                callback();
            }
        );
		
		
    },

    findAll: function(callback) {
		
		
		 var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		      this.db.transaction(
			  
       
            function(tx) {
                var sql = "SELECT * FROM ana_clienti ORDER BY RagioneSociale";
                console.log('Local SQLite database: "SELECT * FROM clienti"');
                tx.executeSql(sql, this.txErrorHandler,
                    function(tx, results) {
                        var len = results.rows.length,
                            employees = [],
                            i = 0;
                        for (; i < len; i = i + 1) {
                            employees[i] = results.rows.item(i);
                        }
                        console.log(len + ' rows found');
						
                        callback(employees);
                    }
                );
            }
        );
    },
	
	findAllWork: function(callback) {
		
		
	
		
         var self = this;
        this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
		
		      this.db.transaction(
            function(tx) {
                var sql = "SELECT idCalendario, calendario.IDCliente, RagioneSociale, SedeLegale, Concluso FROM calendario JOIN ana_clienti ON calendario.IDCliente=ana_clienti.IDCliente WHERE Sync=0 ORDER BY RagioneSociale";
                console.log('Local SQLite database: "SELECT * FROM clienti"');
                tx.executeSql(sql, this.txErrorHandler,
                    function(tx, results) {
                        var len = results.rows.length,
                            interventi = [],
                            i = 0;
                        for (; i < len; i = i + 1) {
                            interventi[i] = results.rows.item(i);
                        }
                        console.log(len + ' rows found');
                        callback(interventi);
                    }
                );
            }
        );
    },

    getLastSync: function(callback) {
        this.db.transaction(
            function(tx) {
                var sql = "SELECT MAX(UltimaModifica) as lastSync FROM ana_clienti";
                tx.executeSql(sql, this.txErrorHandler,
                    function(tx, results) {
                        var lastSync = results.rows.item(0).lastSync;
						
                        //console.log('Last local timestamp is ' + lastSync);
                        callback(lastSync);
                    }
                );
            }
        );
    },

    sync: function(callback) {

        var self = this;
        console.log('Starting synchronization...');
		
		
		
/*        this.getLastSync(function(lastSync){
            self.getChanges(self.syncURL, lastSync,
                function (changes) {
                    if (changes.length > 0) {
                        self.applyChanges(changes, callback);
						
                    } else {
                        log('Nothing to synchronize');
                        //callback();
                    }
                }
            );
        });*/
		
	self.getClienti(
		
                function (clientisync) {
						
                    if (clientisync.length > 0) {
                        self.applyChanges(clientisync, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                        //callback();
                    }
                }
            );
			

		self.getCampionamento(
		
                function (camp) {
						
                    if (camp.length > 0) {
                        self.applyChanges_camp(camp, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                        //callback();
                    }
                }
            );
			
			self.getCalendario(
		
                function (cal) {
						
                    if (cal.length > 0) {
                        self.applyChanges_calendario(cal, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // callback();
                    }
                }
            );
			
			self.getCalendarioDett(
		
                function (caldet) {
						
                    if (caldet.length > 0) {
                        self.applyChanges_calendario_dett(caldet, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // callback();
                    }
                }
            );
			
		self.getTipoprodotti(
		
                function (prodotti) {
						
                    if (prodotti.length > 0) {
                        self.applyChanges_tipoprodotti(prodotti, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // callback();
                    }
                }
            );
		
		
		
		self.getStadiolavorazione(
		
                function (stadiolavorazione) {
						
                    if (stadiolavorazione.length > 0) {
                        self.applyChanges_stadiolavorazione(stadiolavorazione, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // callback();
                    }
                }
            );
		
		self.getTab_superfici(
		
                function (tab_superfici) {
						
                    if (tab_superfici.length > 0) {
                        self.applyChanges_tab_superfici(tab_superfici, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // callback();
                    }
                }
            );
		
		self.getMateriale(
		
                function (materiale) {
						
                    if (materiale.length > 0) {
                        self.applyChanges_materiale(materiale, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // callback();
                    }
					
					
                }
            );
			
			self.getElencoprove(
		
                function (prove) {
						
                    if (prove.length > 0) {
                        self.applyChanges_elencoprove(prove, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // callback();
                    }
                }
            );	
			
		self.getAltresedi(
		
                function (sedi) {
						
                    if (sedi.length > 0) {
                        self.applyChanges_altresedi(sedi, callback);
						
                    } else {
                        console.log('Nothing to synchronize');
                       // 
                    }
					
					callback();
                }
            );
			
			
    },

    getChanges: function(syncURL, modifiedSince, callback) {

        $.ajax({
            url: syncURL,
            data: {modifiedSince: modifiedSince},
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length + " changes that occurred after " + modifiedSince);
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },


    getClienti: function(callback) {

        $.ajax({
            url: syncURLChriva+'/clienti',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },
	
	
    getCampionamento: function(callback) {

        $.ajax({
            url: syncURLChriva+'/campionamento',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },
	
	 getCalendario: function(callback) {

        $.ajax({
            url: syncURLChriva+'/calendario/'+localStorage["idoperatore"],
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },
	
	 getCalendarioDett: function(callback) {

        $.ajax({
            url: syncURLChriva+'/calendario_dett/'+localStorage["idoperatore"],
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },


 getTipoprodotti: function(callback) {

        $.ajax({
            url: syncURLChriva+'/tipoprodotti',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },


 getStadiolavorazione: function(callback) {

        $.ajax({
            url: syncURLChriva+'/stadiolavorazione',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },


 getTab_superfici: function(callback) {

        $.ajax({
            url: syncURLChriva+'/tab_superfici',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },
	

 getAltresedi: function(callback) {

        $.ajax({
            url: syncURLChriva+'/altresedi',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
				
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },

 getElencoprove: function(callback) {

        $.ajax({
            url: syncURLChriva+'/elencoprove',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
                callback(data);
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },
	
	
	 getMateriale: function(callback) {

        $.ajax({
            url: syncURLChriva+'/materiale',
            dataType:"json",
            success:function (data) {
                console.log("The server returned " + data.length );
				
                callback(data);
				 
				
            },
            error: function(model, response) {
                console.log(response.responseText);
            }
        });

    },
	
	
	
	




    applyChanges: function(employees, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = employees.length;
                var sql =
                    "INSERT OR REPLACE INTO ana_clienti (IDCliente, RagioneSociale, SedeLegale, Telefoni, Email, Attivo, UltimaModifica) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = employees[i];
                    //console.log(e.IDCliente + ' ' + e.RagioneSociale);
                    var params = [e.IDCliente, e.RagioneSociale, e.Indirizzo, e.Telefoni, e.Email, e.Attivo, e.UltimaModifica];
                    tx.executeSql(sql, params);
                }
				logmnt('Synchronization complete  ana_clienti (' + l + ' items synchronized)');
                console.log('Synchronization complete  ana_clienti (' + l + ' items synchronized)');
				//$('#count-clienti').html(l);
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },


applyChanges_calendario: function(calendario, callback) {
	   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = calendario.length;
                var sql =
                    "INSERT OR REPLACE INTO calendario (idCalendario, IDCalendarioONLINE,  IDCliente, IDOperatore, FuoriCalendario, DataPianificato, DataIntervento, Ora, Minuto, idAltra, PresenzaDi, Titolo, Qualifica, Firma, Concluso, VistoC, Note) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = calendario[i];
                   //console.log(e.idCalendario + ' ' + e.IDCliente + ' ' + e.IDOperatore + ' ' + e.DataPianificato + ' ' + e.DataPianificato );
					
                    var params = [e.idCalendario, e.idCalendario, e.IDCliente, e.IDOperatore, e.FuoriCalendario, e.DataPianificato, e.DataIntervento, e.Ora, e.Minuto, e.idAltra, e.PresenzaDi, e.Titolo, e.Qualifica, e.Firma, e.Concluso, e.VistoC, e.Note];
					
                    tx.executeSql(sql, params);
                }
				 logmnt('Synchronization complete calendario (' + l + ' items synchronized)');
                console.log('Synchronization complete calendario (' + l + ' items synchronized)');
				$('#count-intpianificati').html(l);
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },
	
	
	
	
	
applyChanges_calendario_dett: function(calendariodett, callback) {
	   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = calendariodett.length;
                var sql =
                    "INSERT OR REPLACE INTO ts_Calendario_Prodotto (IDDettCONLINE, IDListino, IDProva, IDSuperficie, NSuperficie, SuperficiePrel, IDProdotto, IDTipoProdotto, IDCliente, IDContratto, IDCalendario, IDCalFatt, NumProtocollo, Anno, ARR_analisi, Qta, UC, Prezzo, Fissato, Periodicita, NumSettimane, ParteDa, Gruppo, GruppoSup, Descrizione, Note, NoteSito, IDDett, ARR_Stadio, Lotto, TempC, TempAcc, Conservabile, Finito, Visto, Incompleto, NoteIncompleto, RimandatoA, RimandatoDA) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?,?, ?, ?, ?, ?, ?, ?, ?,?, ?,?, ?, ?, ?, ?, ?, ?, ?,?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = calendariodett[i];
                   // console.log(e.idCalendario + ' ' + e.IDCliente  );
					
                    var params = [e.IDDettC, e.IDListino, e.IDProva, e.IDSuperficie, e.NSuperficie, e.SuperficiePrel, e.IDProdotto, e.IDTipoProdotto, e.IDCliente, e.IDContratto, e.IDCalendario, e.IDCalFatt, e.NumProtocollo, e.Anno, e.ARR_analisi, e.Qta, e.UC, e.Prezzo, e.Fissato, e.Periodicita, e.NumSettimane, e.ParteDa, e.Gruppo, e.GruppoSup, e.Descrizione, e.Note, e.NoteSito, e.IDDett, e.ARR_Stadio, e.Lotto, e.TempC, e.TempAcc, e.Conservabile, e.Finito, e.Visto, e.Incompleto, e.NoteIncompleto, e.RimandatoA, e.RimandatoDA];
					
                    tx.executeSql(sql, params);
                }
				logmnt('Synchronization complete ts_Calendario_Prodotto (' + l + ' items synchronized)');
                console.log('Synchronization complete ts_Calendario_Prodotto (' + l + ' items synchronized)');
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },
	
	
	
	applyChanges_camp: function(calendario, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = calendario.length;
                var sql =
                    "INSERT OR REPLACE INTO tab_prove (IDProva,  Prova, ARR_PROVE, bool_uc, boll_int, bool_proto, Tipo_P, Attivo) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = calendario[i];
                    //console.log(e.IDProva + ' ' + e.Prova + ' ' + e.ARR_PROVE + ' ' + e.bool_uc + ' ' + e.boll_int + ' ' + e.bool_proto+ ' ' + e.Attivo );
                    var params = [e.IDProva, e.Prova, e.ARR_PROVE, e.bool_uc, e.boll_int, e.bool_proto, e.Tipo_P, e.Attivo];
                    tx.executeSql(sql, params);
                }
				 logmnt('Synchronization complete tab_prove (' + l + ' items synchronized)');
                console.log('Synchronization complete tab_prove (' + l + ' items synchronized)');
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },
	
	
	applyChanges_tipoprodotti: function(tipoprodotti, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = tipoprodotti.length;
                var sql =
                    "INSERT OR REPLACE INTO tab_tipoprodotti (IDProdotto,  TipoProdotto, EsempiProdotti, CatProdoto, Attivo ) " +
                    "VALUES (?, ?, ?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = tipoprodotti[i];
                  //  console.log(e.TipoProdotto );
                    var params = [e.IDProdotto, e.TipoProdotto, e.EsempiProdotti, e.CatProdoto, e.Attivo];
                    tx.executeSql(sql, params);
                }
				logmnt('Synchronization complete tab_tipoprodotti (' + l + ' items synchronized)');
                console.log('Synchronization complete tab_tipoprodotti (' + l + ' items synchronized)');
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },
	
	
	
	
	applyChanges_stadiolavorazione: function(lavorazioni, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = lavorazioni.length;
				
				 var sql =
                    "INSERT OR REPLACE INTO tab_stadiolavorazione (IdStadioLavorazione,  StadioLavorazione ) " +
                    "VALUES (?, ?)";
					
              
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = lavorazioni[i];
                   // console.log(e.StadioLavorazione );
                    var params = [e.IdStadioLavorazione, e.StadioLavorazione];
                    tx.executeSql(sql, params);
                }
				  logmnt('Synchronization complete tab_stadiolavorazione(' + l + ' items synchronized)');
                console.log('Synchronization complete tab_stadiolavorazione(' + l + ' items synchronized)');
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },
	
	
	
	
	applyChanges_tab_superfici: function(superfici, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = superfici.length;
                 var sql =
                    "INSERT OR REPLACE INTO tab_superfici (`IDSuperficie`, `Superficie`, `ARR_ANL` ) " +
                    "VALUES (?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = superfici[i];
                   // console.log(e.StadioLavorazione );
                    var params = [e.IDSuperficie, e.Superficie, e.ARR_ANL];
                    tx.executeSql(sql, params);
                }
                logmnt('Synchronization complete tab_superfici(' + l + ' items synchronized)');
				console.log('Synchronization complete tab_superfici(' + l + ' items synchronized)');
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },
	
	applyChanges_materiale: function(materiale, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = materiale.length;
                var sql =
                    "INSERT OR REPLACE INTO tab_materiale (IDMateriale,  Materiale, Prezzo ) " +
                    "VALUES (?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = materiale[i];
                  //  console.log(e.Materiale );
                    var params = [e.IDMateriale, e.Materiale, e.Prezzo];
                    tx.executeSql(sql, params);
                }
                logmnt('Synchronization complete tab_materiale (' + l + ' items synchronized)');
				console.log('Synchronization complete tab_materiale (' + l + ' items synchronized)');
            },
            this.txErrorHandler,
            function(tx) {
                callback();
            }
        );
    },
	
	
	
	applyChanges_elencoprove: function(prove, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = prove.length;
                var sql =
                    "INSERT OR REPLACE INTO tab_elencoprove (IDProva,  Prova, PrezzoBase, Gruppo, Attivo, ARR_GRUPPO ) " +
                    "VALUES (?, ?, ?, ?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = prove[i];
                    //console.log(e.Prova );
                    var params = [e.IDProva, e.Prova, e.PrezzoBase, e.Gruppo, e.Attivo, e.ARR_GRUPPO];
                    tx.executeSql(sql, params);
                }
				$.mobile.loading('hide');
                logmnt('Synchronization complete tab_elencoprove (' + l + ' items synchronized)');
				console.log('Synchronization complete tab_elencoprove (' + l + ' items synchronized)');
            },
            this.txErrorHandler,
            function(tx) {
				
                callback();
            }
        );
    },
	
	
	
	
	applyChanges_altresedi: function(sedi, callback) {
		   this.db = window.openDatabase("chriva_mobile_v3", "1.0", "Sync Demo DB", 200000);
        this.db.transaction(
            function(tx) {
                var l = sedi.length;
                var sql =
                    "INSERT OR REPLACE INTO altre_sedi (idAltra,  IDCliente, RagioneSociale, SedeLegale ) " +
                    "VALUES (?, ?, ?, ?)";
                
				console.log('Inserting or Updating in local database:');
                var e;
                for (var i = 0; i < l; i++) {
                    e = sedi[i];
                    //console.log(e.RagioneSociale );
                    var params = [e.idAltra, e.IDCliente, e.RagioneSociale, e.SedeLegale];
                    tx.executeSql(sql, params);
                }
				logmnt('Synchronization complete altre_sedi (' + l + ' items synchronized)');
                console.log('Synchronization complete altre_sedi (' + l + ' items synchronized)');
			
			
			//// QUESTA è L?ULTIMA SINCRO ESCO 
			$.mobile.loading('hide');
				logmnt('database Syncro finished');
				console.log("FINITO" );
				
            },
            this.txErrorHandler,
            function(tx) {
				
                callback();
				
            }
        );
    },
	
	
    txErrorHandler: function(tx) {
        console.log(tx.message);
    }
	
};




/*dao.initialize(function() {
    console.log('database initialized');
	
});*/




$('#btn_del').click(function() {
	if (confirm('ATTENZIONE! questa operazione cancella tutti i dati dall\'app. Continuare?')){
	dao.dropTable(function() {
    console.log('database dropped');
	dao.initialize(function() {
    console.log('database initialized');

		//


	});
	
	});
	}
});

$('#btn_sync').click(function() {
	
	
	$.mobile.loading('show');
	
	dao.initialize(function(callback) {
		
    console.log('database initialized');
	logmnt('database initialized');
	

		//


	});
	
//$.mobile.showPageLoadingMsg("a", "Sincro inizializzata", false);
	
	dao.sync(function() {
    	console.log('database Syncro finished');
	
		//logmnt('database Syncro finished');
		//$.mobile.hidePageLoadingMsg();
		
		});
	
});


function logmnt(msg) {
   $('#log').val($('#log').val() + msg + '\n');
}
