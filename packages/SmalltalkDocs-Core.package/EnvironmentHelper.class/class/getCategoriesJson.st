serializer
getCategoriesJson
	| categories |
	categories := Environment current packageOrganizer packageNames sort.
	^ (Dictionary newFrom: { 'categories' -> categories. 'count' -> categories size}) asJsonString