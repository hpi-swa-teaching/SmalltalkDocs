testing GetUndocumentedMethods
testGetUndocumentedMethods
	| contents |
	contents := self checkOkJsonResponseAt: '/statistics/undocumented/methods/SmapratMockClass'.
	self assert: ((contents at: 'instanceMethods') includesAllOf: #('bestmethodever' 'method1' 'method3:')).
	self deny: ((contents at: 'instanceMethods') includesAllOf: #('method2' 'mockMainmethod' 'mockMethod')).
	self assert: ((contents at: 'classMethods') includesAllOf: #('classMethod1' 'classMethod2' 'classMethod3')).
	self deny: ((contents at: 'classMethods') includes: 'classMethod4:').
	self assert: 6 equals: ((contents at: 'count') at: 'total').
	self assert: 3 equals: ((contents at: 'count') at: 'instanceMethods').
	self assert: 3 equals: ((contents at: 'count') at: 'classMethods').
