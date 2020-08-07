testing GetMethodInfo
testGetMethodInfoClassMethodWithComment
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/class/classMethod4:'.
	self assert: (contents at: 'precodeComment') equals: 'I have an Argument and a classComment'.
	self assert: (contents at: 'hasPrecodeComment') equals: true.