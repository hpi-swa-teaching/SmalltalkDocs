handler
getUndocumentedMethods: aClassName
	<get: '/statistics/undocumented/methods/(\w+)'>
	self sendErrorIfClassAbsent: aClassName ifPresent: [:class |
		| methods |
		methods := SmapratEnvironmentHelper getUndocumentedMethodsJsonFrom: class.
		self sendJson: methods].