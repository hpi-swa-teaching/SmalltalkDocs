testing
testSerializeBookPages
	|json|
	json := self helpPageSerializer bookPagesJsonFrom: self mockHelpBook.
	self assert: (json = '{"pages":["first","second"]}')