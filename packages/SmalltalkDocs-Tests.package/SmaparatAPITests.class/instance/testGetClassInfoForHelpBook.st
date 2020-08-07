testing GetClassInfo
testGetClassInfoForHelpBook
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockHelpBook'.
	self assert: (contents at: 'isHelpBook') equals: true.
	self assert: (contents at: 'hasClassComment') equals: false.
	self assert: (contents at: 'classComment') equals: nil.
	self assert: (contents at: 'category') equals: 'SmalltalkDocs-Tests'.