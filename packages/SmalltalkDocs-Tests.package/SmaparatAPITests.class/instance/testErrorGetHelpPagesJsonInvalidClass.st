testing GetHelpPages
testErrorGetHelpPagesJsonInvalidClass
	self assertNoSuchClassAt: '/help/' , self nonexistingClassName , '/pages' 
	
	