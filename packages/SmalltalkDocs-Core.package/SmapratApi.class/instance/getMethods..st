handler
getMethods: aClassName
	<get: '/env/classes/(\w+)/methods'>
	self sendErrorIfClassAbsent: aClassName ifPresent: [:class | self sendJson: (self environmentSerializer getMethodsJsonFrom: class)].