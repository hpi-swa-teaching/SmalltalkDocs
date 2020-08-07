handler
getSearchMethodResult: aSearchTerm
	<get: '/env/search/methods/([\w:%]+)'>
	
	self sendJson: (SmapratEnvironmentHelper getMethodSearchResultsJsonFrom: aSearchTerm).
