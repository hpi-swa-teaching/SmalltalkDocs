asserting
assertNotAHelpBookAt: anURL
	self assertBadRequestIn: (self getFrom: anURL) withTitle: 'The requested class is not a HelpBook.'