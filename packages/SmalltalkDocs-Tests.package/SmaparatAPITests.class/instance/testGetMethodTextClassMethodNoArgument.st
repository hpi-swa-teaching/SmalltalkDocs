testing GetMethodText
testGetMethodTextClassMethodNoArgument
	| result contents |
	result := RPTestHelper get: '/env/classes/SmapratMockClass/methods/class/classMethod1/text' on: api.
	self assert: result contentType = 'text/plain'.
	self assert: result status = #ok.
	contents := result contents contents.
	self assert: contents = (SmapratMockClass class methodDict at: #classMethod1) getSource asString withUnixLineEndings.