testing GetClasses
testGetClasses
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes'.
	self assertCollection: Environment current classNames hasSameElementsAs: (contents at: 'classes').
	self assert: (contents at: 'count') equals: (contents at: 'classes') size.