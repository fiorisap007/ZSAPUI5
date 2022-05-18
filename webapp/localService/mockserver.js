// mockserver.js
sap.ui.define(
	[
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
    ],
	function (MockServer,UriParameters) {
		"use strict";
		
		return {
			
			init: function(){
				
				//create
				var oMockServer = new MockServer({
					/* eslint-disable sap-no-hardcoded-url */
					rootUri:"https://services.odata.org/V2/Northwind/Northwind.svc/"
				});
			    
			    //Delay   
			    var oUriParametes = UriParameters.fromQuery(window.location.search);
			    
			    MockServer.config(
			    	{
			    	     autoRespond:true,
			    	     autoRespondAfter: oUriParametes.get("serverDelay")||500
			    	     
			        }
			    );
			    
			    //simulate
			    var sPath="../localService/";
			    oMockServer.simulate(sPath+"/test_metadata.xml",sPath+"/mockdata");
			    
			    // start
			    oMockServer.start();
			        
			}	
			
			
		};
	
	});
