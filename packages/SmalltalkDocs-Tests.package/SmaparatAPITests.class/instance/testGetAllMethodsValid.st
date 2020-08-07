testing GetMethods
testGetAllMethodsValid
	| contents |
	contents := self checkOkJsonResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods'.
	self assertCollection: (contents at: 'instanceMethods') hasSameElementsAs: 
		#('mockMainmethod' 'mockMethod' 'method3:' 'method2' 'bestmethodever' 'method1').
	self assert: (contents at: 'instanceMethods') isSorted.
	self assertCollection: (contents at: 'classMethods') hasSameElementsAs: 
		#('classMethod1' 'classMethod2' 'classMethod3' 'classMethod4:').
	self assert: (contents at: 'classMethods') isSorted.
	self assert: ((contents at: 'count') at: 'total') = ((contents at: 'instanceMethods') size + (contents at: 'classMethods') size).
	self assert: ((contents at: 'count') at: 'instanceMethods') =(contents at: 'instanceMethods') size.
	self assert: ((contents at: 'count') at: 'classMethods') = (contents at: 'classMethods') size.