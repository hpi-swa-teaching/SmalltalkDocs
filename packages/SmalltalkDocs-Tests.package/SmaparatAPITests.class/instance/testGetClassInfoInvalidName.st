testing GetClassInfo
testGetClassInfoInvalidName
	self assertNoSuchClassAt: '/env/classes/MockClassNotExistingClass' , self nonexistingClassName