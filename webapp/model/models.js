sap.ui.define(
	["sap/ui/model/json/JSONModel"],
	function (JSONModel) {
		"use strict";
		return {
			createRecipientModel: function () {
				var oData = {
					recipientModel: {
						name: "Angel"
					}
				};
				
				// var oModel = new JSONModel(oData);
				// return oModel;
				return new JSONModel(oData);
				
			}
		};
	});
