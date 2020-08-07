handler
sendErrorIfClassNotAHelpBook: aClass ifSuccessfull: aBlock
	(SmapratHelpPageSerializer isHelpBook: aClass) 
		ifFalse: [self sendErrorNotAHelpBook]
		ifTrue: [aBlock value: aClass].