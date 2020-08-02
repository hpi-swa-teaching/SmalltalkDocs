actions
sendJS: aJsString
	
	self
		status: 200;
		contentType: 'text/javascript';
		body:  aJsString contents;
		headersPut: self settings globalHeaders.