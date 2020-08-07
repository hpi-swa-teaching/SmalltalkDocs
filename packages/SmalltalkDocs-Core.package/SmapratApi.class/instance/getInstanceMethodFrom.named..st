handler
getInstanceMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)'>
	|class|
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := SmapratEnvironmentHelper classNamed: aClassName.
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ self].
	self sendJson: (SmapratEnvironmentHelper getMethodInfoJsonFrom: class named: aMethodName).