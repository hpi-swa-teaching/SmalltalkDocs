error response
sendErrorIfClassAbsent: aClassName orDoesNotUnderstandInstanceSelector: aMethodName ifSuccessfull: aBlock
	self sendErrorIfClassAbsent: aClassName ifPresent: [:class | 
		self sendErrorIfClass: class 
			doesNotUnderstand: aMethodName asSymbol 
			ifSuccessfull: aBlock].
	