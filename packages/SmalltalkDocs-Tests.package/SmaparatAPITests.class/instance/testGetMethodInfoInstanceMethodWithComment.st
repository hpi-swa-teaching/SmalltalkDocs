testing GetMethodInfo
testGetMethodInfoInstanceMethodWithComment
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/instance/method2'.
	self assert: (contents at: 'precodeComment') equals: 'I have a Comment'.
	self assert: (contents at: 'hasPrecodeComment') equals: true.