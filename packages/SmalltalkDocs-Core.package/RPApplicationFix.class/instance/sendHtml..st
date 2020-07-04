removing
sendHtml: aHtmlString 
	
	self
		status: 200;
		contentType: 'text/html';
		body:  aHtmlString contents;
		headersPut: self settings globalHeaders.