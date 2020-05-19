handler
getHelpBookFrom: aClassName
	
	<get: '/help/(\w+)'>
	self sendJson: (HelpPageSerializer bookJsonFrom: (Environment current classNamed: aClassName)).