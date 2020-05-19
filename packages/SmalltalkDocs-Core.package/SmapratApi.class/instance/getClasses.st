handler
getClasses
	<get: '/env/classes'>
	|classes|
	classes := Environment current allClasses collect: [:class | class name asString].
	self sendJson: (Dictionary newFrom: { 'classes' -> classes. 'count' -> classes size}) asJsonString.