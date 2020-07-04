handler
getCategoryClassesFrom: aCategoryName
	<get: '/env/categories/([\w\-]+)'>
	| category |
	category := Environment current packageOrganizer 
		packageNamed: aCategoryName ifAbsent:  [self sendErrorNoSuchCategory. ^ nil].
	self sendJson: (EnvironmentHelper getCategoryInfoJsonFrom: category).