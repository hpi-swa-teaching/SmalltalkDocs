testing GetMethods
testGetAllMethodsValid
	| contents |
	self flag: 'Refactor implementationsdetails'.
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods'.
	self assert: ((contents at: 'instanceMethods') includesAllOf: (SmapratMockClass selectors collect: [:selector | selector asString])).
	self assert: (contents at: 'instanceMethods') isSorted.
	self assert: ((contents at: 'classMethods') includesAllOf: (SmapratMockClass class selectors collect: [:selector | selector asString])).
	self assert: (contents at: 'classMethods') isSorted.
	self assert: ((contents at: 'count') at: 'total') = (SmapratMockClass selectors size + SmapratMockClass class selectors size ).
	self assert: ((contents at: 'count') at: 'instanceMethods') = SmapratMockClass selectors size.
	self assert: ((contents at: 'count') at: 'classMethods') = SmapratMockClass class selectors size.