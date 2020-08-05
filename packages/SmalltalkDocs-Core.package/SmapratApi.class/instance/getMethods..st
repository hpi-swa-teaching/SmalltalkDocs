handler
getMethods: aClassName
	<get: '/env/classes/(\w+)/methods'>
	|class|
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (Environment current classNamed: aClassName).
	self sendJson: (SmapratEnvironmentHelper getMethodsJsonFrom: class).