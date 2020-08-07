handler
getSearchClassResult: aSearchTerm
	<get: '/env/search/classes/([\w:%]+)'>
	self sendJson: (SmapratEnvironmentHelper getClassSearchResultsJsonFrom: aSearchTerm).