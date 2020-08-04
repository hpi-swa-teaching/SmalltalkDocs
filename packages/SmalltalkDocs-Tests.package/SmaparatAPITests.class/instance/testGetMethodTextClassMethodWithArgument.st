testing GetMethodText
testGetMethodTextClassMethodWithArgument
	| contents |
	contents := self checkOkTextResponseAt: '/env/classes/SmapratMockClass/methods/class/classMethod4:/text'.
	self assert: contents = (SmapratMockClass class methodDict at: #classMethod4:) getSource asString withUnixLineEndings.