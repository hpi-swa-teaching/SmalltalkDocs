testing
testSerializeBook
	|json|
	json := self helpPageSerializer bookJsonFrom: self mockHelpBook.
	self assert: (json = '{"bookName":"first Book","priority":1}')