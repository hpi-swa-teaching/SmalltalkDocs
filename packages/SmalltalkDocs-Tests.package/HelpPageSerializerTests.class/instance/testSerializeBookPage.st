testing
testSerializeBookPage
	|json|
	json := self helpPageSerializer bookPageJsonFrom: self mockHelpBook readFrom: 'first'.
	self assert: (json = '{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus nunc mi, at vehicula neque lacinia sed. Sed elementum nisl.","pageName":"first","title":"first"}').
	json := self helpPageSerializer bookPageJsonFrom: self mockHelpBook readFrom: 'second'.
	self assert: (json = '{"content":"wer wie was wieso weshalb warum wer nicht fragt bleibt dumm","pageName":"second","title":"zweitesBuch"}').