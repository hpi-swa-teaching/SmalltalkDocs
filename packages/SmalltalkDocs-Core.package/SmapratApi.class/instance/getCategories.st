handler
getCategories
	<get: '/env/categories'>
	self sendJson: EnvironmentHelper getCategoriesJson.