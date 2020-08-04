testing GetClassInfo
testGetClassInfoNoComment
	| contents |
	contents := self checkOkJsonResponseAt: '/env/classes/MockClassNoComment'.
	self assert: (contents at: 'isHelpBook') = false.
	self assert: (contents at: 'hasClassComment') = false.
	self assert: (contents at: 'classComment') = nil.
	self assert: (contents at: 'category') = 'SmalltalkDocs-Tests'.