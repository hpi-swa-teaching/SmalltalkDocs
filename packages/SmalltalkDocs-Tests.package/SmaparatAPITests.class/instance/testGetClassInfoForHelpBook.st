testing GetClassInfo
testGetClassInfoForHelpBook
	| contents |
	contents := self checkOkJsonResponseAt: '/env/classes/MockHelpBook'.
	self assert: ((contents at: 'isHelpBook') = true).
	self assert: ((contents at: 'hasClassComment') = false).
	self assert: ((contents at: 'classComment') = nil).
	self assert: ((contents at: 'category') = 'SmalltalkDocs-Tests').