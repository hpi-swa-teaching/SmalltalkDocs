testing GetMethodText
testGetMethodTextInstanceMethodWithArgument
	| result contents |
	result := RPTestHelper get: '/env/classes/SmapratMockClass/methods/instance/method3:/text' on: api.
	self assertOkTextResponse: result.
	contents := result contents contents.
	self assert: contents = (SmapratMockClass methodDict at: #method3:) getSource asString withUnixLineEndings.