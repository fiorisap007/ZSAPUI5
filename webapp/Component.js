//component.js
sap.ui.define(
    ["sap/ui/core/UIComponent",
      "sap/ui/model/json/JSONModel",
      "com/dprb/logali/ZSAPUI05/model/models",
      "sap/ui/model/resource/ResourceModel",
      "./controller/HelloDialog",
      "sap/ui/Device"
    ],
    function (UIComponent, JSONModel, models,  ResourceModel,HelloDialog, Device) {

        return UIComponent.extend("com.dprb.logali.ZSAPUI05.Component", {
            
            metadata: {
               manifest: "json"
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //Set model on view 
                this.setModel(models.createRecipientModel());

                //Set i18n model on view
                var i18nModel = new ResourceModel({
                    bundleName: "com.dprb.logali.ZSAPUI05.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");
                
                
                //set device model
                var oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.setModel(oDeviceModel,"device");
                
                
                //compoennte HelloDialog
                this._helloDialog = new HelloDialog(this.getRootControl());
                
                //Create the views based on the url/hash
                this.getRouter().initialize();

            },
            
            exit: function(){
            	this._helloDialog.destroy();
            	delete this._helloDialog;
            },
            
            openHelloDialog: function(){
            	this._helloDialog.open();
            },

			getContentDensityClass: function () {
				if (!Device.support.touch) {
					//Tipo escritorio
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					//Tipo tactil
					this._sContentDensityClass = "sapUiSizeCozy";
				}
				return this._sContentDensityClass;
			}


        });
    }
);
