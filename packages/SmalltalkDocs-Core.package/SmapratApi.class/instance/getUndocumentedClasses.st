handler
getUndocumentedClasses
	<get: '/statistics/undocumented/classes'>
	self sendJson: self environmentSerializer getUndocumentedClassesJson.