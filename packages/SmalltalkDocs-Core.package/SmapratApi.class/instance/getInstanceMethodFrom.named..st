handler
getInstanceMethodFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)'>
		self sendErrorIfClassAbsent: aClassName 
			orDoesNotUnderstandInstanceSelector: aMethodName 
			ifSuccessfull: [:class | 
				self sendJson: (
					self environmentSerializer getMethodInfoJsonFrom: class 
					named: aMethodName)].
