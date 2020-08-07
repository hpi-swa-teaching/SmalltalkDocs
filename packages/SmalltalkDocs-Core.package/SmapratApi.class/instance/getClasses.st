handler
getClasses
	<get: '/env/classes'>
	self sendJson: self environmentSerializer getClassesJson.