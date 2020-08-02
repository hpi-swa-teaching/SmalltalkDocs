handler
sendFile: aString
	(self store includesObjectAt: 'frontend/',aString)
		ifTrue: [self sendNonHtmlNamed: aString withContent: self store objectAt: aString]
		ifFalse: [self notFound].