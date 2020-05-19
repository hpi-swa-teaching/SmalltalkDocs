testing
testGetHelpPageJson

	| result |
	result := RPTestHelper get: '/help/MockHelpBook/pages/first' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self assert: result contents contents =  '{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nunc mi, at vehicula neque lacinia sed. Sed elementum nisl.","pageName":"first","title":"first"}'.
	
	result := RPTestHelper get: '/help/MockHelpBook/pages/second' on: api.
	self assert: result contentType = 'application/json'.
	self assert: result status = #ok.
	self assert: result contents contents =  '{"content":"wer wie was wieso weshalb warum wer nicht fragt bleibt dumm","pageName":"second","title":"zweitesBuch"}'.
	
	