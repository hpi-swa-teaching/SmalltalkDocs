searching
searchGlobalyByRegex: aRegex

| allCategories result regex maximum count |
	allCategories := (Environment current packageOrganizer packageNames).
	maximum := 10.
	count := 0.
result := Dictionary new.
regex := '\w*w\w*' asRegex.
result at: 'categories' put: (allCategories collect: [:cat | Dictionary newFrom: {'name' -> cat. 'matched' -> (regex matches: (cat asString)). 'classes' ->
	((Environment current packageOrganizer 
		packageNamed: cat ifPresent: [:package |package classes collect: [:class | Dictionary newFrom: {'name' -> class className. 'matched' -> (regex matches: (class className)). 'instanceMethods' -> (class selectors collect: [:selector | Dictionary newFrom: {'name' -> (selector asString). 'matched' -> (regex matches: selector asString).}]). 'classMethods' -> (class class selectors collect: [:selector | Dictionary newFrom: {'name' -> (selector asString). 'matched' -> (regex matches: selector asString).}]).}]] ifAbsent: [#()])).}]).