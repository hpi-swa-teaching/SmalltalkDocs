testing GetMethods
testGetAllMethodsValid
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods'.
	self assertCollection: (contents at: 'instanceMethods') hasSameElementsAs: (SmapratMockClass selectors collect: [:selector | selector asString]).
	self assert: (contents at: 'instanceMethods') isSorted.
	self assertCollection: (contents at: 'classMethods') hasSameElementsAs: (SmapratMockClass class selectors collect: [:selector | selector asString]).
	self assert: (contents at: 'classMethods') isSorted.
	self assert: ((contents at: 'count') at: 'total') = ((contents at: 'instanceMethods') size + (contents at: 'classMethods') size).
	self assert: ((contents at: 'count') at: 'instanceMethods') =(contents at: 'instanceMethods') size.
	self assert: ((contents at: 'count') at: 'classMethods') = (contents at: 'classMethods') size.