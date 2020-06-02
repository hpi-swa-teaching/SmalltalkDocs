as yet unclassified
getClassMethodTextFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)/text'>
	|class|
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil.].
	class := (Environment current classNamed: aClassName) class.
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ nil.].
	self sendText: (EnvironmentHelper getMethodTextFrom: class named: aMethodName asSymbol) withUnixLineEndings.