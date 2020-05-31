as yet unclassified
getClassMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)'>
	|class comment|
	class := (Environment current classNamed: aClassName) class.
	comment := class firstPrecodeCommentFor: aMethodName asSymbol.
	self sendJson: (Dictionary newFrom: {'precodeComment' -> comment. 'hasPrecodeComment'-> comment notNil}) asJsonString.