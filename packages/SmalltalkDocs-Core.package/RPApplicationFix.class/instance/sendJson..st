removing
sendJson: aString 
	
	self
		status: 200;
		contentType: 'application/json';
		body:  aString contents;
		headersPut: self settings globalHeaders.