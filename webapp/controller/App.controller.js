// App.controller.js
sap.ui.define(
    ["sap/ui/core/mvc/Controller",
     "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel"

    ],
    
    function(Controller,MessageToast, JSONModel){
    	
        "use strict";

        return Controller.extend("com.dprb.logali.ZSAPUI05.controller.App" , {
        	
           	onInit: function () {
           		//adiciona los estilos 
        		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            },
            
            onOpenHeader: function (){
            		this.getOwnerComponent().openHelloDialog();
            }
            //,

            // onShowHello : function(){
  
            //     // read text from i18 / model
            //     var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
            //     var sName = this.getView().getModel().getProperty("/recipient/name");
            //     var sMsg = sHello.concat(" ").concat(sName);
            //     MessageToast.show(sMsg);
	             
            // }
            
        }); 
        
        
    }
); 
