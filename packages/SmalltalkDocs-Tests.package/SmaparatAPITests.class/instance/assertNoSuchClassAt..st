asserting
assertNoSuchClassAt: anURL
	self assertNotFoundIn: (self getFrom: anURL) withExpectedTitle: 'The requested class does not exist.'