handler
getHelpPageFrom: aClassName at: aPageName
	<get: '/help/(\w+)/pages/(\w+)'>
	| class |
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil.].
	class := (Environment current classNamed: aClassName).
	(HelpPageSerializer isHelpBook: class) ifFalse: [self sendErrorNotAHelpBook. ^ nil.].
	(class class includesSelector: aPageName asSymbol) ifFalse: [self sendErrorNoSuchHelpPage. ^ nil.].
	self sendJson: (HelpPageSerializer bookPageJsonFrom: class readFrom: aPageName).