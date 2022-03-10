sap.ui.define(
    [ "sap/m/Text" , 
      "sap/ui/core/mvc/XMLView",
      "sap/ui/core/ComponentContainer"
    ],
    function (Text, XMLView,ComponentContainer) {
        
        // new Text({text: "Hello Word de JAVA SCRIPT"}).placeAt("content");
        
        // XMLView.create({viewName:"com.dprb.logali.ZSAPUI5.view.App"}).then( 
        //     function(oView){ oView.placeAt("content"); }
        // );

        new ComponentContainer({
            name : "com.dprb.logali.ZSAPUI5",
            setting :{
                id: "com.dprb.logali"
            },
            async:true
        }).placeAt("content");

        
        // /*eslint-disable no-alert*/
        // alert("UI5 es lo mejor");
        // /*eslint-enable no-alert*/
    }

);
