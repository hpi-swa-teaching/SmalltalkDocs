testing GetUndocumentedMethods
testGetUndocumentedMethods
	| result contents |
	result := RPTestHelper get: '/statistics/undocumented/methods/SmapratMockClass' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'instanceMethods') includesAllOf: #('bestmethodever' 'method1' 'method3:')).
	self deny: ((contents at: 'instanceMethods') includesAllOf: #('method2' 'mockMainmethod' 'mockMethod')).
	self assert: ((contents at: 'classMethods') includesAllOf: #('classMethod1' 'classMethod2' 'classMethod3')).
	self deny: ((contents at: 'classMethods') includesAnyOf: #('classMethod4:')).
	self assert: 6 equals: ((contents at: 'count') at: 'total').
	self assert: 3 equals: ((contents at: 'count') at: 'instanceMethods').
	self assert: 3 equals: ((contents at: 'count') at: 'classMethods').
