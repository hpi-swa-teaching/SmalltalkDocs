handler
getClassMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)'>
	|class|
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (SmapratEnvironmentHelper classNamed: aClassName) class.
	(class includesSelector: aMethodName asSymbol) ifFalse: [self sendErrorNoSuchMethod. ^ nil].
	self sendJson: (SmapratEnvironmentHelper getMethodInfoJsonFrom: class named: aMethodName)