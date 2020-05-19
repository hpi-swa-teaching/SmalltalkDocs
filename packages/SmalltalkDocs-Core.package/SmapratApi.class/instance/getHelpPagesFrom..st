handler
getHelpPagesFrom: aClassName
	<get: '/help/(\w)/pages'>
	self sendJson: (HelpPageSerializer bookPagesJsonFrom: (Environment current classNamed: aClassName)).