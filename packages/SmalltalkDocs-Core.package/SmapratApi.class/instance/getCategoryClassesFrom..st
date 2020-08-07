handler
getCategoryClassesFrom: aCategoryName
	<get: '/env/categories/([\w\-]+)'>
	| category |
	category := (SmapratEnvironmentHelper packageExistsNamed: aCategoryName) ifFalse:  [self sendErrorNoSuchCategory. ^ nil].
	self sendJson: (SmapratEnvironmentHelper getCategoryInfoJsonFrom: category).