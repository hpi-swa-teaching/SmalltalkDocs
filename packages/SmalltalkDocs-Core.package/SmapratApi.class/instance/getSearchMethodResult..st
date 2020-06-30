handler
getSearchMethodResult: aSearchTerm
	<get: '/env/search/method/([\w:%]+)'>
	
	self sendJson: (EnvironmentHelper getMethodSearchResultsJsonFrom: aSearchTerm).
