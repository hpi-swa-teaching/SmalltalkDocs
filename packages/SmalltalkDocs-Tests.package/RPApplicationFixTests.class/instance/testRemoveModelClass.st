testing
testRemoveModelClass
	"Copied from RatPack-Testing"
	self app registerModel: RPTestModel.
	self assert: (self app getRegisteredModel: 'RPTestModel') equals: RPTestModel.
	self app removeModel: RPTestModel.
	self assert: ([self app getRegisteredModel: 'RPTestModel'. false] on: Error do:[true])