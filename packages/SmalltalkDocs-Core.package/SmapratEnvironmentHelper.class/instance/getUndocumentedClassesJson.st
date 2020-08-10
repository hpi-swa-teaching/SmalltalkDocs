serialize
getUndocumentedClassesJson
	| allClasses classes |
	allClasses := self usedEnvironment allClasses.
	classes := (allClasses reject: [:class | class hasComment]).
	classes := classes collect: [:class | class name].
	^ {'classes' -> classes. 'count' -> (classes size)} asDictionary asJsonString