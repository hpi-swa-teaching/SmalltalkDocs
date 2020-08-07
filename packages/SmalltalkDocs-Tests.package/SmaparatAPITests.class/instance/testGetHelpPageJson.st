testing GetHelpPages
testGetHelpPageJson
	| contents |
	self flag: 'Refactor Json Object.'.
	contents := self checkOkJsonResponseAndGetContentsAt: '/help/SmapratMockHelpBook/pages/first'.
	self assert: contents = (Json readFrom: '{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nunc mi, at vehicula neque lacinia sed. Sed elementum nisl.","pageName":"first","title":"first"}' readStream).
	
	contents := self checkOkJsonResponseAndGetContentsAt: '/help/SmapratMockHelpBook/pages/second'.
	self assert: contents =  (Json readFrom: '{"content":"wer wie was wieso weshalb warum wer nicht fragt bleibt dumm","pageName":"second","title":"zweitesBuch"}' readStream).
	
	