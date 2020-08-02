handler
sendNonHtmlNamed: aName withContent: aString
	(aName endsWith: '.js') ifTrue: [self sendJS: aString].
	(aName endsWith: '.css') ifTrue: [self sendCSS: aString].
	self notFound.