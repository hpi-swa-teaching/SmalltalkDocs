asserting
assertNoSuchMethodAt: anURL
	self assertNotFoundIn: (self getFrom: anURL) withExpectedTitle: 'The requested method does not exist.'