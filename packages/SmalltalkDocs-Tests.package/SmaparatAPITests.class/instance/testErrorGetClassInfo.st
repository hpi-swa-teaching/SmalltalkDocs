testing
testErrorGetClassInfo
	| result contents className |
	className := 'invalidClassName12567'.
	[Environment current hasClassNamed: className] whileTrue: [className := ('invalidClassName12567','2')].
	result := RPTestHelper get: '/env/classes/MockClassNotExistingClass',className on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #notFound.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 404).
	self assert: ((contents at: 'title') = 'The requested class does not exist.').
	self assert: ((contents at: 'type') = 'about:blank').