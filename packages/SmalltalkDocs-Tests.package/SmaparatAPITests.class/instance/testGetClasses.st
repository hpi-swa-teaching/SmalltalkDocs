testing GetClasses
testGetClasses
	| contents |
	contents := self checkOkJsonResponseAt: '/env/classes'.
	self assert: (Environment current allClasses reject: [:class | (contents at: 'classes') includes: class name asString]) isEmpty.
	self assert: (contents at: 'count') = Environment current allClasses size.