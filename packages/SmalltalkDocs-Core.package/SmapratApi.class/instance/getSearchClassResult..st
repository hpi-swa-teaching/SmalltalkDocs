handler
getSearchClassResult: aSearchTerm
	<get: '/env/search/classes/([\w:%]+)'>
	self sendJson: (self environmentSerializer getClassSearchResultsJsonFrom: aSearchTerm).