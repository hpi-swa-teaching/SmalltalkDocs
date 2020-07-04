removing
sendCSS: aCssString
	
	self
		status: 200;
		contentType: 'text/css';
		body:  aCssString contents;
		headersPut: self settings globalHeaders.