serialize
getCategoryInfoJsonFrom: aCategory
	| classes |
	classes := aCategory classes collect: [
			:class | class name asString].
	^ (Dictionary newFrom: {
		'classes' -> classes.
		'count' -> classes size.}) asJsonString