serialization
bookJsonFrom: aClass
	^ (Dictionary newFrom: {'bookName' -> aClass bookName.
		'priority' -> aClass priority}) asJsonString