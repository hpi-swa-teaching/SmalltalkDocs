testing GetMethodText
testGetMethodTextInstanceMethodNoArgument
	| contents |
	contents := self checkOkTextResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/instance/method1/text'.
	self assert: contents equals: 'method1'.