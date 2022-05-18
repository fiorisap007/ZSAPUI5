// initMockServer.js
sap.ui.define(
	[
    "../localService/mockserver"
    ],
	function (mockserver) {
		"use strict";
		
		//initializee the mock server
		mockserver.init();
		
		//initialize the embedded component on the HTML page 
        sap.ui.require(["sap/ui/core/ComponentSupport"]);		
		
	});
