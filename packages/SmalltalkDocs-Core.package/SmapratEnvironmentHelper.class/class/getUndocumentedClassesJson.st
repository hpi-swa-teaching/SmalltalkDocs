serializer
getUndocumentedClassesJson
	| allClasses classes |
	allClasses := Environment current allClasses.
	classes := (allClasses reject: [:class | class hasComment]).
	classes := classes collect: [:class | class name].
	^ {'classes' -> classes. 'count' -> (classes size)} asDictionary asJsonString