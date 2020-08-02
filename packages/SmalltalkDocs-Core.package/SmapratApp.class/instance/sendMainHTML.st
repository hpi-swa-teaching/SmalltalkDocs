handler
sendMainHTML
	(self store includesObjectAt: 'frontend/index.html') 
		ifTrue: [self sendHtml: (self store objectAt: 'frontend/index.html')]
		ifFalse: [^ self internalError]
	
	