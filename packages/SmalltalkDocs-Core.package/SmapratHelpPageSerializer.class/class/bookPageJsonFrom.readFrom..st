serialization
bookPageJsonFrom: aClass readFrom: aMethod
	| topic |
	topic := (aClass perform: aMethod asSymbol).
	^ (Dictionary newFrom: {'pageName' -> aMethod.
		'title' -> topic title.
		'content'-> topic contents}) asJsonString