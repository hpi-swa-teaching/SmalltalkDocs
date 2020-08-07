handler
getCategories
	<get: '/env/categories'>
	self sendJson: SmapratEnvironmentHelper getCategoriesJson.