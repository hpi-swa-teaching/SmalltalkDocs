testing GetHelpBook
testGetHelpBookInvalidClass
	self assertNoSuchClassAt: '/help/' , self nonexistingClassName
	
	