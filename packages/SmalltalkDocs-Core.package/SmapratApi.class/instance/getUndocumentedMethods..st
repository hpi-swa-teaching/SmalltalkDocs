handler
getUndocumentedMethods: aClassName
	<get: '/statistics/undocumented/methods/(\w+)'>
	| methods |
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	methods := SmapratEnvironmentHelper getUndocumentedMethodsJsonFrom: (SmapratEnvironmentHelper classNamed: aClassName).
	self sendJson: methods.