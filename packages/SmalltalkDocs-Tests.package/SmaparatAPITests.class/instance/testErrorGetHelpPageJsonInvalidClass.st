testing GetHelpPages
testErrorGetHelpPageJsonInvalidClass
	self assertNoSuchClassAt: '/help/' , self nonexistingClassName , '/pages/first' 
	
	