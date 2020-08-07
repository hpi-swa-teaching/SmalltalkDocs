handler
getInstanceMethodTextFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)/text'>
	|class|
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := SmapratEnvironmentHelper classNamed: aClassName.
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ nil].
	self sendText: (SmapratEnvironmentHelper getMethodTextFrom: class named: aMethodName asSymbol) withUnixLineEndings.