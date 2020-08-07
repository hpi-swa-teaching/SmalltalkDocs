testing GetClasses
testGetClasses
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes'.
	self assert: (Environment current classNames sameElements: (contents at: 'classes')).
	self assert: (contents at: 'count') = (contents at: 'classes') size.