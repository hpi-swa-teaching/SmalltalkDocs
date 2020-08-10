handler
sendErrorIfClassAbsent: aClassName orDoesNotUnderstandClassSelector: aMethodName ifSuccessfull: aBlock
	self sendErrorIfClassAbsent: aClassName ifPresent: [:class | 
		self sendErrorIfClass: class class 
			doesNotUnderstand: aMethodName asSymbol 
			ifSuccessfull: aBlock].
	