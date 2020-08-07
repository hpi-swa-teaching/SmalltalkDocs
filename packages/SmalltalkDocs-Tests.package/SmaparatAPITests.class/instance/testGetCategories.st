testing GetCategories
testGetCategories
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/categories'.
	self assert: ((contents at: 'categories') sameElements: Environment current packageOrganizer packageNames).
	self assert: (contents at: 'count') = (contents at: 'categories') size.