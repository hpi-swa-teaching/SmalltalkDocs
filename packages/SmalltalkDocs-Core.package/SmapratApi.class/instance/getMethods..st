as yet unclassified
getMethods: aClassName
	<get: '/env/classes/(\w+)/methods'>
	|class|
	class := Environment current classNamed: aClassName.
	self sendJson: (EnvironmentHelper getMethodsJsonFrom: class).