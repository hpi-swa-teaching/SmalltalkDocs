as yet unclassified
getInstanceMethodTextFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)/text'>
	|class|
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil.].
	class := Environment current classNamed: aClassName.
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ nil.].
	self sendText: (EnvironmentHelper getMethodTextFrom: class named: aMethodName asSymbol) withUnixLineEndings.