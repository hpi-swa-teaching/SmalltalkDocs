handler
getClassMethodTextFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)/text'>
	|class|
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (SmapratEnvironmentHelper classNamed: aClassName) class.
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ nil].
	self sendText: (SmapratEnvironmentHelper getMethodTextFrom: class named: aMethodName asSymbol) withUnixLineEndings.