testing GetMethodText
testGetMethodTextInstanceMethodNoArgument
	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/method1/text' on: api.
	self assert: result contentType = 'text/plain'.
	self assert: result status = #ok.
	contents := result contents contents.
	self assert: contents = (MockClass methodDict at: #method1) getSource asString withUnixLineEndings.