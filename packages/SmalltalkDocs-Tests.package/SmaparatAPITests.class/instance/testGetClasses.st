testing GetClasses
testGetClasses
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes'.
	self assert: (self collection: Environment current classNames hasSameElementsAs: (contents at: 'classes')).
	self assert: (contents at: 'count') = (contents at: 'classes') size.