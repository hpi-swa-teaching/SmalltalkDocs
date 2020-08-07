error response
sendErrorIfClassAbsentOrNotAHelpBook: aClassName ifSuccessfull: aBlock
	self sendErrorIfClassAbsent: aClassName ifPresent: [:class | 
		self sendErrorIfClassNotAHelpBook: class ifSuccessfull: aBlock].
	