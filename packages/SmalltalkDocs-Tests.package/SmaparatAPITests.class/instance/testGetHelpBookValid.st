testing GetHelpBook
testGetHelpBookValid
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/help/SmapratMockHelpBook'.
	self assert: (contents at: 'bookName') = 'first Book'.
	self assert: (contents at: 'priority') = 1.
	
	contents := self checkOkJsonResponseAndGetContentsAt: '/help/SmapratMockSubHelpBook'.
	self assert: (contents at: 'bookName') = 'second book'.
	self assert: (contents at: 'priority') = 2.
	