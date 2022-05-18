//App.js
sap.ui.define(
	[
		"sap/ui/test/Opa5",
		"sap/ui/test/actions/Press"              
	],
	function( Opa5, Press ){

	var sViewName = "com.dprb.logali.ZSAPUI05.view.HelloPanel";
	
	Opa5.createPageObjects({
		onTheAppPage:{
			actions:{
				iSayHelloDialogButton: function(){
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions:new Press(),
						errorMessage:"Did not fing the 'Say heelo dialog buttom' on the HelloPanel view"
					});
				}
			},
				
			assertions:{
					iSeeTheHelloDialog:function(){
						return this.waitFor({
							controlType: "sap.m.Dialog",
							success:function(){
								Opa5.assert.ok(true,"The dialog was opened");
							},
							errorMessage:"Did not find the dialog control"		
						});
				}
			}
		}
	});
});