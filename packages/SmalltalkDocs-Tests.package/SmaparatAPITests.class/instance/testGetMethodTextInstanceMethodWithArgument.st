testing GetMethodText
testGetMethodTextInstanceMethodWithArgument
	| contents |
	contents := self checkOkTextResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/instance/method3:/text'.
	self assert: contents equals: 'method3: anArgument'.