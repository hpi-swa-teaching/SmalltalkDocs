handler
getMethods: aClassName
	<get: '/env/classes/(\w+)/methods'>
	|class|
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := SmapratEnvironmentHelper classNamed: aClassName.
	self sendJson: (SmapratEnvironmentHelper getMethodsJsonFrom: class).