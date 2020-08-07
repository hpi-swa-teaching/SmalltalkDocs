testing GetMethodText
testGetMethodTextClassMethodNoArgument
	| contents |
	contents := self checkOkTextResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/class/classMethod1/text'.
	self assert: contents equals: 'classMethod1'.