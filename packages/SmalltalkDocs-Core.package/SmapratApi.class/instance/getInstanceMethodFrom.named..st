as yet unclassified
getInstanceMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)/text'>
	|class|
	class := Environment current classNamed: aClassName.
	self sendText: (EnvironmentHelper getMethodTextFrom: class named: aMethodName asSymbol).