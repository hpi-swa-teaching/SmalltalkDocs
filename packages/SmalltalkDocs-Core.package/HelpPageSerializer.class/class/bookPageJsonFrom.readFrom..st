serialization
bookPageJsonFrom: aClass readFrom: aMethod
	|json topic|
	json := Dictionary new.
	topic := (aClass perform: aMethod asSymbol).
	json at: 'pageName' put: aMethod.
	json at: 'title' put: topic title.
	json at: 'content' put: topic contents.
	^ json asJsonString