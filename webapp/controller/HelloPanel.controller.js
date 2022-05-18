// HelloPanel.controller.js
sap.ui.define(
    ["sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel",
     "sap/ui/core/Fragment"
     
    ],
    
    function(Controller,MessageToast, JSONModel,Fragment){
    	
        "use strict";

        return Controller.extend("com.dprb.logali.ZSAPUI05.controller.HelloPanel" , {
        	
           	onInit: function () {
          
            },

            onShowHello : function(){
  
                // read text from i18 / model
                var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
                var sName = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = sHello.concat(" ").concat(sName);
                MessageToast.show(sMsg);
	             
            } ,
            
             onOpenDialog: function(){
            	
            	this.getOwnerComponent().openHelloDialog();
            	
	            // 	var oView = this.getView();
	            	
	            // 	if(!this.byId("helloDialog")){
		           //     Fragment.load({
		           // 		id: oView.getId(),
		           // 		name:"com.dprb.logali.ZSAPUI05.view.HelloDialog",
		           // 		controller: this
		           // 	}).then(function(oDialog){
		           // 		oView.addDependent(oDialog);
		           // 		oDialog.open();
		           // 	});     		
	            // 	}else{
	            // 	  this.byId("helloDialog").open();	
	            // 	}
            	
             }
             //,
            
            // onCloseDialog: function(){
            // 	this.byId("helloDialog").close();	
            // }
            
        }); 
        
        
    }
); 
