handler
getSearchMethodResult: aSearchTerm
	<get: '/env/search/methods/([\w:%]+)'>
	
	self sendJson: (EnvironmentHelper getMethodSearchResultsJsonFrom: aSearchTerm).
