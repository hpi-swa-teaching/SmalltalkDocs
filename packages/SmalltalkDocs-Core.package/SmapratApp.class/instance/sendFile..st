handler
sendFile: aString
	(SquotWorkingCopy registered last includesObjectAt: 'frontend/',aString)
		ifTrue: [self sendNonHtmlNamed: aString withContent: SquotWorkingCopy registered last objectAt: aString]
		ifFalse: [self notFound].