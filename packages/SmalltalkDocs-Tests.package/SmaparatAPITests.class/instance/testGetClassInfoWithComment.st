testing GetClassInfo
testGetClassInfoWithComment
	| result contents |
	result := RPTestHelper get: '/env/classes/SmapratMockClass' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'isHelpBook') = false).
	self assert: ((contents at: 'hasClassComment') = true).
	self assert: ((contents at: 'classComment') = 'Hallo_21').
	self assert: ((contents at: 'category') = 'SmalltalkDocs-Tests').