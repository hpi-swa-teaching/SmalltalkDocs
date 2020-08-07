handler
getSearchMethodResult: aSearchTerm
	<get: '/env/search/methods/([\w:%]+)'>
	self sendJson: (self environmentSerializer getMethodSearchResultsJsonFrom: aSearchTerm).
