testing GetMethodText
testGetMethodTextInstanceMethodWithArgument
	| contents |
	contents := self checkOkTextResponseAt: '/env/classes/SmapratMockClass/methods/instance/method3:/text'.
	self assert: contents = (SmapratMockClass methodDict at: #method3:) getSource asString withUnixLineEndings.