testing GetClassInfo
testGetClassInfoForHelpBook
	| result contents |
	result := RPTestHelper get: '/env/classes/MockHelpBook' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'isHelpBook') = true).
	self assert: ((contents at: 'hasClassComment') = false).
	self assert: ((contents at: 'classComment') = nil).
	self assert: ((contents at: 'category') = 'SmalltalkDocs-Tests').