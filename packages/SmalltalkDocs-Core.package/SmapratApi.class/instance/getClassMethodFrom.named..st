handler
getClassMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)'>
	self sendErrorIfClassAbsent: aClassName 
		orDoesNotUnderstandClassSelector: aMethodName 
		ifSuccessfull: [:class | 
			self sendJson: (self environmentSerializer getMethodInfoJsonFrom: class named: aMethodName)].
