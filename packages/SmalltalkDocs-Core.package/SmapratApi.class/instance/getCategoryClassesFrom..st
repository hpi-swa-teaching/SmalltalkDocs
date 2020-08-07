handler
getCategoryClassesFrom: aCategoryName
	<get: '/env/categories/([\w\-]+)'>
	| category |
	category := self environmentSerializer packageExistsNamed: aCategoryName ifAbsent: [self sendErrorNoSuchCategory. ^ nil].
	self sendJson: (self environmentSerializer getCategoryInfoJsonFrom: category).