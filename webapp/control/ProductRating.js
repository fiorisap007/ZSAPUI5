// ProductRating.js
sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
], function (Control, RatingIndicator, Label, Button) {

	return Control.extend("com.dprb.logali.SAPUI05.control.ProductRating", {

		metadata : {
			properties : {
				value: 	{type : "float", defaultValue : 0}
			},
			aggregations : {
				_rating: {type : "sap.m.RatingIndicator", multiple: false, visibility : "hidden"},
				_label: {type : "sap.m.Label", multiple: false, visibility : "hidden"},
				_button: {type : "sap.m.Button", multiple: false, visibility : "hidden"}
			},
			events : {
				change : {
					parameters : {
						value : {type : "int"}
					}
				}
			}
		},

		init: function () {
	

            this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.bind(this)
			}));
			
			//valoracion del usuario
			this.setAggregation("_label", new Label({
				text: "{i18n>productRatingLabelInitial}"
			}).addStyleClass("sapUiSmallMargin"));

			//Usuario apreta el boton
			this.setAggregation("_button", new Button({
				text: "{i18n>productRatingButton}",
				press: this._onSubmit.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));

		},

		reset: function() {
			var oRessourceBundle = this.getModel("i18n").getResourceBundle();
			
			this.setValue(0);
			this.getAggregation("_rating").setEnabled(true);
			this.getAggregation("_button").setEnabled(true);
			this.getAggregation("_label").setText(oRessourceBundle.getText("productRatingLabelInitial"));
			this.getAggregation("_label").setDesign("Standard");
		},
		
		setValue: function(fvalue) {
			this.setProperty("value", fvalue, true);
			this.getAggregation("_rating").setValue(fvalue);
		}, 
		
		_onRate: function(oEvent) {
			var oRessourceBundle = this.getModel("i18n").getResourceBundle();
			var fValue = oEvent.getParameter("value");

			this.setProperty("value", fValue, true);

			//valoracion del usuario	
			this.getAggregation("_label").setText(oRessourceBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation("_label").setDesign("Bold");
		},

		_onSubmit: function(oEvent)  {
			
		   	var oResourceBundle = this.getModel("i18n").getResourceBundle();//call change
			//obtener las valoraciones de las 3 instancias
			this.getAggregation("_rating").setEnabled(false);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
			this.getAggregation("_button").setEnabled(false);
			//lanzar ele evento
			this.fireEvent("change", {
				value: this.getValue()
			});
		},



		renderer: function (oRm, oControl) {
			oRm.openStart("div", oControl);
			//Aplicando clase de estilo
			oRm.class("productRating");
			oRm.openEnd();
			//Renderizando las instancias
			oRm.renderControl(oControl.getAggregation("_rating"));
			oRm.renderControl(oControl.getAggregation("_label"));
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.close("div");
		}

	});
});
