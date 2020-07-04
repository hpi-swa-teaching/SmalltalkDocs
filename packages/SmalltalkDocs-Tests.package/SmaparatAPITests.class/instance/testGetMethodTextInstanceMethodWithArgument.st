testing GetMethodText
testGetMethodTextInstanceMethodWithArgument
	| result contents |
	result := RPTestHelper get: '/env/classes/SmapratMockClass/methods/instance/method3:/text' on: api.
	self assert: result contentType = 'text/plain'.
	self assert: result status = #ok.
	contents := result contents contents.
	self assert: contents = (SmapratMockClass methodDict at: #method3:) getSource asString withUnixLineEndings.