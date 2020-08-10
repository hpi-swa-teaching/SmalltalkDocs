handler
getInstanceMethodTextFrom: aClassName named: aMethodName
	<get: '/env/classes/(\w+)/methods/instance/([\w:]+)/text'>
	self sendErrorIfClassAbsent: aClassName 
		orDoesNotUnderstandInstanceSelector: aMethodName 
		ifSuccessfull: [:class | 
			self sendText: (
				self environmentSerializer getMethodTextFrom: class 
				named: aMethodName asSymbol) withUnixLineEndings.]