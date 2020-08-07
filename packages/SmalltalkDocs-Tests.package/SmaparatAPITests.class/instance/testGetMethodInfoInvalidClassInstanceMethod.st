testing GetMethodInfo
testGetMethodInfoInvalidClassInstanceMethod
	self assertNoSuchClassAt: '/env/classes/', self nonexistingClassName, '/methods/instance/method2'