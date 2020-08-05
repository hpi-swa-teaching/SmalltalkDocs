testing
testSerializeBookPages
	|json|
	json := self helpPageSerializer bookPagesJsonFrom: self mockHelpBook.
	self assert: (Json readFrom: json readStream) =
	(Json readFrom: '{"pages":[{"pageName":"first","isGivenByClass":true},{"pageName":"second","isGivenByClass":true},{"pageName":"SmapratMockSubHelpBook","isGivenByClass":false}]}' readStream).