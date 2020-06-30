handler
getUndocumentedClasses
	<get: '/statistics/undocumented/classes'>
	| allClasses classes |
	allClasses := Environment current allClasses.
	classes := (allClasses reject: [:class | class hasComment]).
	classes := classes collect: [:class | class name].
	self sendJson: {'classes' -> classes. 'count' -> (classes size)} asDictionary asJsonString.