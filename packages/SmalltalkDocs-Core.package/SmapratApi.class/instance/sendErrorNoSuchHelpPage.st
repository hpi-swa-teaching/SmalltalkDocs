handler
sendErrorNoSuchHelpPage
	| bodyJson |
	bodyJson := Dictionary newFrom: {
		'status' -> 404. 
		'title' ->'The requested help page does not exist.'. 
		'type' -> 'about:blank'}.
	bodyJson := bodyJson asJsonString.
	self
		status: 404;
		contentType: 'application/error+json';
		body:  bodyJson contents;
		headersAt: 'server' put: self name;
		headersAt: 'Access-Control-Allow-Origin' put: '*'.