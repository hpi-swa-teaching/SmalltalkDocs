testing GetMethods
testGetAllMethodsInvalidClass
	self assertNoSuchClassAt: '/env/classes/', self nonexistingClassName, '/methods'
