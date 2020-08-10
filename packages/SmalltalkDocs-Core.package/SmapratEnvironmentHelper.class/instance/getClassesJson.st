serialize
getClassesJson
	|classes|
	classes := self usedEnvironment allClasses collect: [:class | class name asString].
	^ (Dictionary newFrom: { 'classes' -> classes. 'count' -> classes size}) asJsonString