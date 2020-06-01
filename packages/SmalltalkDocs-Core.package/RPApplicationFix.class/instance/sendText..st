removing
sendText: aString 
	
	self
		status: 200;
		contentType: 'text/plain';
		body:  aString contents;
		headersAt: 'server' put: self name;
		headersAt: 'Access-Control-Allow-Origin' put: '*';
		headersAt: 'charset' put: 'utf-8'.