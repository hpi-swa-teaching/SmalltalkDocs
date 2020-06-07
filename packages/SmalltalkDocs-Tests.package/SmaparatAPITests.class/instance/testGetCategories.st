testing
testGetCategories

	| result contents |
	result := RPTestHelper get: '/env/categories' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: (Environment current packageOrganizer packageNames reject: [:category | (contents at: 'categories') includes: category]) isEmpty.
	self assert: ((contents at: 'categories') reject: [:category | Environment current packageOrganizer packageNames includes: category]) isEmpty.
	self assert: (contents at: 'count') = Environment current packageOrganizer packageNames size.