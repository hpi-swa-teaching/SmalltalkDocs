testing GetMethods
testGetAllMethodsValid
	| result contents |
	result := RPTestHelper get: '/env/classes/MockClass/methods' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'instanceMethods') includesAllOf: (MockClass selectors collect: [:selector | selector asString])).
	self assert: (contents at: 'instanceMethods') isSorted.
	self assert: ((contents at: 'classMethods') includesAllOf: (MockClass class selectors collect: [:selector | selector asString])).
	self assert: (contents at: 'classMethods') isSorted.
	self assert: ((contents at: 'count') at: 'total') = (MockClass selectors size + MockClass class selectors size ).
	self assert: ((contents at: 'count') at: 'instanceMethods') = MockClass selectors size.
	self assert: ((contents at: 'count') at: 'classMethods') = MockClass class selectors size.