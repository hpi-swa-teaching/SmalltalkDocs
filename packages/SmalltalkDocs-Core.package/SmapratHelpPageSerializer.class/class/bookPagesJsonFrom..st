serialization
bookPagesJsonFrom: aClass
	|json pages|
	json := Dictionary new.
	pages :=  aClass pages.
	json at: 'pages' put: 
	(pages collect: [:page | (Dictionary newFrom: {
		'pageName' -> page.
		'isGivenByClass' -> (aClass class canUnderstand: page asSymbol)})]).
	^ json asJsonString