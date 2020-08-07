testing GetMethodInfo
testGetMethodInfoInstanceMethodNoComment
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/instance/method1'.
	self assert: (contents at: 'precodeComment') equals: nil.
	self assert: (contents at: 'hasPrecodeComment') equals: false.