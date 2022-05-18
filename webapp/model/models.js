sap.ui.define(
	["sap/ui/model/json/JSONModel"],
	function (JSONModel) {
		"use strict";
		return {
			createRecipientModel: function () {
				var oData = {
					recipient: {
						name: "Angel"
					}
				};

				return new JSONModel(oData);
				
			}
		};
	});
