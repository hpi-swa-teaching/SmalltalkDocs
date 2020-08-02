html
internalError	
	self contentType: 'text/html';
		status: 503;
		body: (self est: self settings errorPage).