testing GetMethodText
testGetMethodTextInvalidClassInstanceMethod
	self assertNoSuchClassAt: '/env/classes/', self nonexistingClassName, '/methods/instance/method2/text'