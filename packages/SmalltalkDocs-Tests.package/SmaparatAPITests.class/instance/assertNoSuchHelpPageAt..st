asserting
assertNoSuchHelpPageAt: anURL
	self assertNotFoundIn: (self getFrom: anURL) withExpectedTitle: 'The requested help page does not exist.'