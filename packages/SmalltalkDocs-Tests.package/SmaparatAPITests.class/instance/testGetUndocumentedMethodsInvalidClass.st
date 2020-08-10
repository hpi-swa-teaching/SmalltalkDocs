testing GetUndocumentedMethods
testGetUndocumentedMethodsInvalidClass
	self assertNoSuchClassAt: '/statistics/undocumented/methods/' , self nonexistingClassName
