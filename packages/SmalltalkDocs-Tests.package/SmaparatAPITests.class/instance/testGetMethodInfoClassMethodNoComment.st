testing GetMethodInfo
testGetMethodInfoClassMethodNoComment
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/class/classMethod1'.
	self assert: (contents at: 'precodeComment') = nil.
	self assert: (contents at: 'hasPrecodeComment') = false.