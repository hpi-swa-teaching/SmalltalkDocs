html
internalError	
	self contentType: 'text/html';
		status: 500;
		body: '</body> </html>Oh no, something went wrong!</body> </html>';
		headersPut: self settings globalHeaders.