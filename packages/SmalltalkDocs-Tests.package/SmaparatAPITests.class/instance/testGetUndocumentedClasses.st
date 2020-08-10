testing GetUndocumentedClasses
testGetUndocumentedClasses
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/statistics/undocumented/classes'.
	self assertCollection: (contents at: 'classes') hasSameElementsAs: 
		#('SmapratMockClassNoComment' 'SmapratMockHelpBook' 'SmapratMockSubHelpBook').
	self assert: (contents at: 'count') equals: (contents at: 'classes') size.