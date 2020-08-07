testing GetCategoryClasses
testGetCategoryClassesValidCategory
	| category contents |
	category := self class category asString.
	contents := self checkOkJsonResponseAndGetContentsAt:  '/env/categories/', category.
	self assert: ((contents at: 'classes') includesAllOf: #('SmapratMockClass' 'SmapratMockClassNoComment' 'SmapratMockHelpBook')).
	self assert: (contents at: 'classes') size equals: (contents at: 'count').