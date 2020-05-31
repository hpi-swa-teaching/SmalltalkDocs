as yet unclassified
getInstanceMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)'>
	|class comment|
	class := (Environment current classNamed: aClassName).
	comment := class firstPrecodeCommentFor: aMethodName asSymbol.	
	self sendJson: (Dictionary newFrom: {'precodeComment' -> comment. 'hasPrecodeComment'-> comment notNil}) asJsonString.