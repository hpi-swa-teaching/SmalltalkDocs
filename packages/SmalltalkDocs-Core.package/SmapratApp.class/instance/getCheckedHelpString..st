help-grabber
getCheckedHelpString: aClass
	"Returns the concatinated help pages of a class if present."
	| text |
	text := self getHelpStringFrom: aClass.
	(text isEmpty) 
		ifTrue: [^'There are no helf pages for this class.']
		ifFalse: [^text].