handler
getClassMethodTextFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/class/([\w:]+)/text'>
	self sendErrorIfClassAbsent: aClassName 
		orDoesNotUnderstandClassSelector: aMethodName 
		ifSuccessfull: [:class | 
			self sendText: (SmapratEnvironmentHelper getMethodTextFrom: class named: aMethodName asSymbol) withUnixLineEndings.]