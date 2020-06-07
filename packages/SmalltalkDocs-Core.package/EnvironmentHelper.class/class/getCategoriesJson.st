serializer
getCategoriesJson
	| categories |
	categories := Environment current packageOrganizer packageNames.
	^ (Dictionary newFrom: { 'categories' -> categories. 'count' -> categories size}) asJsonString