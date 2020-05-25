as yet unclassified
getClassMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)/text'>
	|class|
	class := (Environment current classNamed: aClassName) class.
	self sendText: (EnvironmentHelper getMethodTextFrom: class named: aMethodName asSymbol).