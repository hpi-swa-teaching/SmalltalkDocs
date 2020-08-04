testing GetHelpPages
testGetHelpPagesJson
	| contents |
	self flag: 'Refactor Json Object.'.
	contents := self checkOkJsonResponseAt: '/help/MockHelpBook/pages'.
	self assert: contents = (Json readFrom: '{"pages":[{"pageName":"first","isGivenByClass":true},{"pageName":"second","isGivenByClass":true},{"pageName":"MockSubHelpBook","isGivenByClass":false}]}' readStream).
	
	