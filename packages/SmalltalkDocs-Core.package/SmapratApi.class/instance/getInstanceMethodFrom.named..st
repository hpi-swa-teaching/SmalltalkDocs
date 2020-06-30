handler
getInstanceMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)'>
	|class comment|
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ self].
	class := (Environment current classNamed: aClassName).
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ self].
	comment := class firstPrecodeCommentFor: aMethodName asSymbol.	
	self sendJson: (Dictionary newFrom: {'precodeComment' -> comment. 'hasPrecodeComment'-> comment notNil}) asJsonString.