testing
testGetCategoryClasses
	"TODO: refactor test to static mock category" 
	| result contents classes |
	result := RPTestHelper get: '/env/categories/SmalltalkDocs-Tests' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	classes := (Environment current packageOrganizer 
		packageNamed: 'SmalltalkDocs-Tests' ifAbsent: [] ) classes collect: [
			:class | class name asString].
	self assert: classes = (contents at: 'classes').
	self assert: classes size = (contents at: 'count').