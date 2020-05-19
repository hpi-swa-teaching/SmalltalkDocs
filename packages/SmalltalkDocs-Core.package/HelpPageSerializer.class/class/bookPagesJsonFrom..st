serialization
bookPagesJsonFrom: aClass
	|json|
	json := Dictionary new.
	json at: 'pages' put: aClass pages.
	^ json asJsonString