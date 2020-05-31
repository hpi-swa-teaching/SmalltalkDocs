as yet unclassified
getClassMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)'>
	|class comment hasComment|
	class := (Environment current classNamed: aClassName) class.
	comment := class firstPrecodeCommentFor: aMethodName asSymbol.
	hasComment := comment isNil not.
	comment ifNil: [comment := String empty].
	self sendJson: (Dictionary newFrom: {'precodeComment' -> comment. 'hasPrecodeComment'-> hasComment}) asJsonString.