testing GetMethodInfo
testGetMethodInfoInvalidClassClassMethod
	self assertNoSuchClassAt: '/env/classes/', self nonexistingClassName, '/methods/class/method2'