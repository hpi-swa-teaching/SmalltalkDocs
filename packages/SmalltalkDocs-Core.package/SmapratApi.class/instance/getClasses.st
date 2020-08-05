handler
getClasses
	<get: '/env/classes'>
	self sendJson: SmapratEnvironmentHelper getClassesJson.