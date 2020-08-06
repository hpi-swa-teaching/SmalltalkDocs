testing GetUndocumentedClasses
testGetUndocumentedClasses
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/statistics/undocumented/classes'.
	self assert: ((contents at: 'classes') noneSatisfy: [:class | (Environment current classNamed: class) hasComment]).
	self assert: (contents at: 'count') = (Environment current allClasses select: [:class | class hasComment not]) size.