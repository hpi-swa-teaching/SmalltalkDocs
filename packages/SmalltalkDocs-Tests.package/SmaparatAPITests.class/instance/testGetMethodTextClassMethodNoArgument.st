testing GetMethodText
testGetMethodTextClassMethodNoArgument
	| contents |
	self flag: 'Refactor methoden mit ähnlichen asserts'.
	contents := self checkOkTextResponseAt: '/env/classes/SmapratMockClass/methods/class/classMethod1/text'.
	self assert: contents = (SmapratMockClass class methodDict at: #classMethod1) getSource asString withUnixLineEndings.