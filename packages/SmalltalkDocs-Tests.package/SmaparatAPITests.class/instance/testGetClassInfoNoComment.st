testing GetClassInfo
testGetClassInfoNoComment
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClassNoComment'.
	self assert: (contents at: 'isHelpBook') equals: false.
	self assert: (contents at: 'hasClassComment') equals: false.
	self assert: (contents at: 'classComment') equals: nil.
	self assert: (contents at: 'category') equals: 'SmalltalkDocs-Tests'.