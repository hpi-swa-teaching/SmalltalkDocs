testing GetUndocumentedClasses
testGetUndocumentedClasses
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/statistics/undocumented/classes'.
	self assert: (self collection: (contents at: 'classes') hasSameElementsAs: (((Environment current allClasses) select: [:class | class hasComment not]) collect: [:class | class name]) ).
	self assert: (contents at: 'count') = (contents at: 'classes')  size.