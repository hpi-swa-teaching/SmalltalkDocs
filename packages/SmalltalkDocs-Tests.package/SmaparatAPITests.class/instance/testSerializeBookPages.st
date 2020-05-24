testing
testSerializeBookPages
	|json|
	json := self helpPageSerializer bookPagesJsonFrom: self mockHelpBook.
	self assert: (json = '{"pages":{"second":{"isGivenByClass":"true"},"first":{"isGivenByClass":"true"},"MockSubHelpBook":{"isGivenByClass":"false"}}}')