serializer
getClassesJson
	|classes|
	classes := Environment current allClasses collect: [:class | class name asString].
	^ (Dictionary newFrom: { 'classes' -> classes. 'count' -> classes size}) asJsonString