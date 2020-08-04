testing GetCategories
testGetCategories
	| contents |
	contents := self checkOkJsonResponseAt: '/env/categories'.
	self assert: (Environment current packageOrganizer packageNames reject: [:category | (contents at: 'categories') includes: category]) isEmpty.
	self assert: ((contents at: 'categories') reject: [:category | Environment current packageOrganizer packageNames includes: category]) isEmpty.
	self assert: (contents at: 'count') = Environment current packageOrganizer packageNames size.