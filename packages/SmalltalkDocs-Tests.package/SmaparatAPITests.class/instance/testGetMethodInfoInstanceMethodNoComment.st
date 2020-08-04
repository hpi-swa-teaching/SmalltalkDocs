testing GetMethodInfo
testGetMethodInfoInstanceMethodNoComment
	| contents |
	contents := self checkOkJsonResponseAt: '/env/classes/SmapratMockClass/methods/instance/method1'.
	self assert: (contents at: 'precodeComment') = nil.
	self assert: (contents at: 'hasPrecodeComment') = false.