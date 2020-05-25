handler
getClasses
	<get: '/env/classes'>
	self sendJson: EnvironmentHelper getClassesJson.