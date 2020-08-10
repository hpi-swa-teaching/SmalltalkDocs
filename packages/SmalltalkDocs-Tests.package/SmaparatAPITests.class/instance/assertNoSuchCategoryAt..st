asserting
assertNoSuchCategoryAt: anURL
	self assertNotFoundIn: (self getFrom: anURL) withExpectedTitle: 'The requested category does not exist.'