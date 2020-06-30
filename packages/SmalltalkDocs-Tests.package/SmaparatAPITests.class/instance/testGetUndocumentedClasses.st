testing GetUndocumentedClasses
testGetUndocumentedClasses
	| result contents |
	result := RPTestHelper get: '/statistics/undocumented/classes' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	self assert: ((contents at: 'classes') noneSatisfy: [:class | (Environment current classNamed: class) hasComment]).
	self assert: (contents at: 'count') = (Environment current allClasses select: [:class | class hasComment not]) size.