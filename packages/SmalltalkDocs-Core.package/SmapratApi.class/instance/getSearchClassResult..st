handler
getSearchClassResult: aSearchTerm
	<get: '/env/search/classes/([\w:%]+)'>
	
	self sendJson: (EnvironmentHelper getClassSearchResultsJsonFrom: aSearchTerm).