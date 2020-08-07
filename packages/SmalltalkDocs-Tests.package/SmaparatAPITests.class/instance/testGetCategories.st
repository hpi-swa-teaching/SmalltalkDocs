testing GetCategories
testGetCategories
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/categories'.
	self assertCollection: (contents at: 'categories') hasSameElementsAs: 
		#('SmapratMockCategoryOne' 'SmapratMockCategoryTwo').
	self assert: (contents at: 'count') equals: (contents at: 'categories') size.