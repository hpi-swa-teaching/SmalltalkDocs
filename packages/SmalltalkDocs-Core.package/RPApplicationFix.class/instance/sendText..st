actions
sendText: aString 
	
	self
		status: 200;
		contentType: 'text/plain';
		body:  aString contents;
		headersPut: self settings globalHeaders.