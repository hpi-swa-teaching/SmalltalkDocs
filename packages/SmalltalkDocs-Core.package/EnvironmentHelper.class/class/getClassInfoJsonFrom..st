serializer
getClassInfoJsonFrom: aClass
	| hasClassComment classComment isHelpBook category |
	hasClassComment := aClass hasComment.
	hasClassComment ifTrue: [classComment := aClass comment] 
		ifFalse: [classComment := nil].
	isHelpBook := HelpPageSerializer isHelpBook: aClass.
	category := aClass category.
	^ (Dictionary newFrom: {
		'isHelpBook' -> isHelpBook. 
		'hasClassComment' -> hasClassComment. 
		'classComment' -> classComment.
		'category' -> category}) asJsonString