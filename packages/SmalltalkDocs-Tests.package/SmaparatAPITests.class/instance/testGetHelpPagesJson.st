testing GetHelpPages
testGetHelpPagesJson
	| contents |
	self flag: 'Refactor Json Object.'.
	contents := self checkOkJsonResponseAndGetContentsAt: '/help/SmapratMockHelpBook/pages'.
	self assert: contents equals: (Json readFrom: '{"pages":[{"pageName":"first","isGivenByClass":true},{"pageName":"second","isGivenByClass":true},{"pageName":"SmapratMockSubHelpBook","isGivenByClass":false}]}' readStream).
	
	