serialization
bookJsonFrom: aClass
	|json|
	json := Dictionary new.
	json at: 'bookName' put: aClass bookName.
	json at: 'priority' put: aClass priority.
	^ json asJsonString