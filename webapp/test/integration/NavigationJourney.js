//NavigationJourney.js
sap.ui.define(
	[
		"com/dprb/logali/ZSAPUI05/localService/mockserver",
		"sap/ui/test/opaQunit",
		"./pages/App"
	],
	function(mockserver){
	
	QUnit.module("Navigation");
	
	opaTest( "Should open the Hello Dialog", function(Given,When,Then){
		//initialize mockserver
		mockserver.init();
		
		//Arrengements
		Given.iStartMyUIComponent({
			componentConfig:{
				name:"com.dprb.logali.ZSAPUI05"
			}		
		});
		
		//Actions
		When.onTheAppPage.iSayHelloDialogButton();
		
		//Assertions
		Then.onTheAppPage.iSeeTheHelloDialog();
		
		//Cleanup
		Then.iTeardownMyApp();
		
	});
	
});