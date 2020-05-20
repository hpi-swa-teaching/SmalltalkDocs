removing
sendJson: aJsonString 
	
	self
		status: 200;
		contentType: 'application/json';
		body:  aJsonString contents;
		headersAt: 'server' put: self name;
		headersAt: 'Access-Control-Allow-Origin' put: '*'.