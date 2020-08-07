error response
sendErrorIfClass: aClass doesNotUnderstand: aSelector ifSuccessfull: aBlock
	(aClass includesSelector: aSelector)
		ifFalse: [self sendErrorNoSuchMethod.]
		ifTrue: [aBlock value: aClass].
	