// opaTests.qunit.js

/* Global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit( function() {
	
	sap.ui.require(
			[
				"com/dprb/logali/ZSAPUI05/test/integration/NavigationJourney"
		    ], 
			function(){
	
				
			    QUnit.start(); 
			}
		
		);
	
});
