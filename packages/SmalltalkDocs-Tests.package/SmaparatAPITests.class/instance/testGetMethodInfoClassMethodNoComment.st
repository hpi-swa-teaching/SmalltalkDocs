testing GetMethodInfo
testGetMethodInfoClassMethodNoComment
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/class/classMethod1'.
	self assert: (contents at: 'precodeComment') equals: nil.
	self assert: (contents at: 'hasPrecodeComment') equals: false.