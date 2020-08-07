handler
getInstanceMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)'>
		self sendErrorIfClassAbsent: aClassName 
			orDoesNotUnderstandInstanceSelector: aMethodName 
			ifSuccessfull: [:class | 
				self sendJson: (
					SmapratEnvironmentHelper getMethodInfoJsonFrom: class 
					named: aMethodName)].
