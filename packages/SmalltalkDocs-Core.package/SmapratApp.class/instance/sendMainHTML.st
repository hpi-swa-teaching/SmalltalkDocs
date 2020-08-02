handler
sendMainHTML
	(SquotWorkingCopy registered last includesObjectAt: 'frontend/index.html') 
		ifTrue: [self sendHtml: (SquotWorkingCopy registered last objectAt: 'frontend/index.html')]
		ifFalse: [^ self internalError]
	
	