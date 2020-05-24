testing
testSerializeBookPages
	|json|
	json := self helpPageSerializer bookPagesJsonFrom: self mockHelpBook.
	self assert: json =
	'{"pages":[{"pageName":"first","isGivenByClass":"true"},{"pageName":"second","isGivenByClass":"true"},{"pageName":"MockSubHelpBook","isGivenByClass":"false"}]}'.