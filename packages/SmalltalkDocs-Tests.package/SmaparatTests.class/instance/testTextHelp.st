test - html
testTextHelp
	| result |
	result := RPTestHelper get: '/help/MockHelpBook' on: app.
	Transcript show: result contents contents.
	self assert: (result contents contents includesSubstring: 
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nunc mi, at vehicula neque lacinia sed. Sed elementum nisl.').
	self assert: (result contents contents includesSubstring: 
		'MockHelpBook').
	self assert: result contentType = 'text/html'.