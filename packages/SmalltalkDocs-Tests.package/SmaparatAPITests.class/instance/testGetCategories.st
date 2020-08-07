testing GetCategories
testGetCategories
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/categories'.
	self assert: (self collection: (contents at: 'categories') hasSameElementsAs: Environment current packageOrganizer packageNames).
	self assert: (contents at: 'count') = (contents at: 'categories') size.