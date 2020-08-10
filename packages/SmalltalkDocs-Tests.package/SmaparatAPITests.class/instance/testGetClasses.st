testing GetClasses
testGetClasses
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes'.
	self assertCollection: Environment current classNames hasSameElementsAs: #('SmapratMockClass'
		'SmapratMockClassNoComment' 'SmapratMockHelpBook' 'SmapratMockSubHelpBook').
	self assert: (contents at: 'count') equals: 4.