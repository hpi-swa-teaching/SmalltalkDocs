testing GetClassInfo
testGetClassInfoWithComment
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass'.
	self assert: (contents at: 'isHelpBook') equals: false.
	self assert: (contents at: 'hasClassComment') equals: true.
	self assert: (contents at: 'classComment') equals: 'Hallo_21'.
	self assert: (contents at: 'category') equals: 'SmalltalkDocs-Tests'.