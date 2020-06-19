testing GetHelpBook
testGetHelpBookInvalidClass
	| result contents className |
	className := 'NotExistingHelpBook'.
	[Environment current hasClassNamed: className] whileTrue: [className := (className,'1')].
	result := RPTestHelper get: '/help/',className on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested class does not exist.').
	
	