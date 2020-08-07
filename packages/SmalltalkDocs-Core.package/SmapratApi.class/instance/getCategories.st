handler
getCategories
	<get: '/env/categories'>
	self sendJson: self environmentSerializer getCategoriesJson.