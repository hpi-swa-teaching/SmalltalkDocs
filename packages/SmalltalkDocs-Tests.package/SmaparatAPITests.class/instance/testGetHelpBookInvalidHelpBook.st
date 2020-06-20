testing GetHelpBook
testGetHelpBookInvalidHelpBook
	| result contents className |
	className := 'NotExistingHelpBook'.
	result := RPTestHelper get: '/help/SmapratMockClass' on: api.
	self assert: result contentType = 'application/error+json'.
	self assert: result status = #badRequest.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'status') = 400).
	self assert: ((contents at: 'title') = 'The requested class is not a HelpBook.').
	
	