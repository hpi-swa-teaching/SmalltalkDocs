handler
getSearchClassResult: aSearchTerm
	<get: '/env/search/class/([\w:%]+)'>
	
	self sendJson: (EnvironmentHelper getClassSearchResultsJsonFrom: aSearchTerm).