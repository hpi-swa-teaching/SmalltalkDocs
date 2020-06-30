handler
getClassMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)'>
	|class comment|
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ self].
	class := (Environment current classNamed: aClassName) class.
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ self].
	comment := class firstPrecodeCommentFor: aMethodName asSymbol.
	self sendJson: (Dictionary newFrom: {'precodeComment' -> comment. 'hasPrecodeComment'-> comment notNil}) asJsonString.