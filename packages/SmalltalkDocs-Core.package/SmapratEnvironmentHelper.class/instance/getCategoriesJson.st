serialize
getCategoriesJson
	| categories |
	categories := self usedEnvironment packageOrganizer packageNames.
	^ (Dictionary newFrom: { 'categories' -> categories. 'count' -> categories size}) asJsonString