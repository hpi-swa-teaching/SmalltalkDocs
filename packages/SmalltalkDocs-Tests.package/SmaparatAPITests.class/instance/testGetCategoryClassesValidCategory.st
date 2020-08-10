testing GetCategoryClasses
testGetCategoryClassesValidCategory
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt:  '/env/categories/SmapratMockCategoryOne'.
	self assertCollection: (contents at: 'classes') hasSameElementsAs: #('SmapratMockClass' 'SmapratMockClassNoComment').
	self assert: (contents at: 'classes') size equals: 2.