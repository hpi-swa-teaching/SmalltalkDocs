testing GetHelpBook
testGetHelpBookValid
	| contents |
	contents := self checkOkJsonResponseAt: '/help/MockHelpBook'.
	self assert: (contents at: 'bookName') = 'first Book'.
	self assert: (contents at: 'priority') = 1.
	
	