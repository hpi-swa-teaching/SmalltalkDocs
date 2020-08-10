testing GetMethodText
testGetMethodTextInvalidClassClassMethod
	self assertNoSuchClassAt: '/env/classes/', self nonexistingClassName, '/methods/class/method2/text'