serialization
bookPagesJsonFrom: aClass
	|json pages|
	json := Dictionary new.
	pages :=  aClass pages.
	json at: 'pages' put: Dictionary new.
	pages do: [:page | (json at: 'pages') at: page put: 
		(Dictionary newFrom: 
			{'isGivenByClass' -> (aClass class canUnderstand: page asSymbol) asString})].
	^ json asJsonString