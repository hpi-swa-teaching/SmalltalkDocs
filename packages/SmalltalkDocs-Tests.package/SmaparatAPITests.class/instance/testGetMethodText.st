testing
testGetMethodText
	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/method1/text' on: api.
	self assert: result contentType = 'text/plain'.
	self assert: result status = #ok.
	contents := result contents contents.
	self assert: contents = (MockClass methodDict at: #method1) getSource asString withInternetLineEndings.
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/instance/method3:/text' on: api.
	self assert: result contentType = 'text/plain'.
	self assert: result status = #ok.
	contents := result contents contents.
	self assert: contents = (MockClass methodDict at: #method3:) getSource asString withInternetLineEndings.
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/class/classMethod1/text' on: api.
	self assert: result contentType = 'text/plain'.
	self assert: result status = #ok.
	contents := result contents contents.
	self assert: contents = (MockClass class methodDict at: #classMethod1) getSource asString withInternetLineEndings.
	
	result := RPTestHelper get: '/env/classes/MockClass/methods/class/classMethod4:/text' on: 	api.
	self assert: result contentType = 'text/plain'.
	self assert: result status = #ok.
	contents := result contents contents.
	self assert: contents = (MockClass class methodDict at: #classMethod4:) getSource asString withInternetLineEndings.