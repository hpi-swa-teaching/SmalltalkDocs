serializer
getClassInfoJsonFrom: aClass

	| hasClassComment classComment isHelpBook |
	hasClassComment := aClass hasComment.
	hasClassComment ifTrue: [classComment := aClass comment] 
		ifFalse: [classComment := nil].
	isHelpBook := HelpPageSerializer isHelpBook: aClass.
	^ (Dictionary newFrom: {
		'isHelpBook' -> isHelpBook. 
		'hasClassComment' -> hasClassComment. 
		'classComment' -> classComment}) asJsonString