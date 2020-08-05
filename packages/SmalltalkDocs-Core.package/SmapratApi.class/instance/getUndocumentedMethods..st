handler
getUndocumentedMethods: aClassName
	<get: '/statistics/undocumented/methods/(\w+)'>
	| methods |
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	methods := SmapratEnvironmentHelper getUndocumentedMethodsJsonFrom: (Environment current classNamed: aClassName).
	self sendJson: methods.