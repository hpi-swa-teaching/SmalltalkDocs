testing GetCategoryClasses
testGetCategoryClassesValidCategory
	| category result contents classes |
	category := self class category asString.
	result := RPTestHelper get: '/env/categories/', category on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	contents := Json readFrom: result contents contents readStream.
	classes := (Environment current packageOrganizer 
		packageNamed: category ifAbsent: [] ) classes collect: [
			:class | class name asString].
	self assert: classes = (contents at: 'classes').
	self assert: classes size = (contents at: 'count').