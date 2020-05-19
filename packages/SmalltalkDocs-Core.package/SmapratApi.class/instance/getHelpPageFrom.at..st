handler
getHelpPageFrom: aClassName at: aPageName
	<get: '/help/(\w+)/pages/(\w+)'>
	self sendJson: (HelpPageSerializer bookPageJsonFrom: (Environment current classNamed: aClassName) readFrom: aPageName).