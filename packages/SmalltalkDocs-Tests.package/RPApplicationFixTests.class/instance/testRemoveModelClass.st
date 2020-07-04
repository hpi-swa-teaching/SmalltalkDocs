accessing
testRemoveModelClass

	self app registerModel: RPTestModel.
	self assert: (self app getRegisteredModel: 'RPTestModel') equals: RPTestModel.
	app removeModel: RPTestModel.
	self assert: ([self app getRegisteredModel: 'RPTestModel'. false]on: Error do:[true])