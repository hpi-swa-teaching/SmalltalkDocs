testing GetCategoryClasses
testGetCategoryClassesValidCategory
	| category contents classes |
	self flag: 'Refactor implementation in test'.
	category := self class category asString.
	contents := self checkOkJsonResponseAndGetContentsAt:  '/env/categories/', category.
	classes := (Environment current packageOrganizer 
		packageNamed: category ifAbsent: [] ) classes collect: [
			:class | class name asString].
	self assert: classes = (contents at: 'classes').
	self assert: classes size = (contents at: 'count').