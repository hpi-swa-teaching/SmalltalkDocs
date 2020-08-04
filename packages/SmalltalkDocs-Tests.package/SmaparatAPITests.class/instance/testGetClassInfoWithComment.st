testing GetClassInfo
testGetClassInfoWithComment
	| contents |
	contents := self checkOkJsonResponseAt: '/env/classes/SmapratMockClass'.
	self assert: ((contents at: 'isHelpBook') = false).
	self assert: ((contents at: 'hasClassComment') = true).
	self assert: ((contents at: 'classComment') = 'Hallo_21').
	self assert: ((contents at: 'category') = 'SmalltalkDocs-Tests').