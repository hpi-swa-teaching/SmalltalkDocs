test - html
testHelloWorld
	| result |
	result := RPTestHelper get: '/hello-world' on: app.
	Transcript show: result contents contents.
	self assert: (result contents contents includesSubString: 'Hello World').
	self assert: result contentType = 'text/html'.