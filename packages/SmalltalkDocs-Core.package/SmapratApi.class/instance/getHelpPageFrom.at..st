handler
getHelpPageFrom: aClassName at: aPageName
	<get: '/help/(\w+)/pages/(\w+)'>
	| class |
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (Environment current classNamed: aClassName).
	(SmapratHelpPageSerializer isHelpBook: class) ifFalse: [self sendErrorNotAHelpBook. ^ nil.].
	(class class includesSelector: aPageName asSymbol) ifFalse: [self sendErrorNoSuchHelpPage. ^ nil].
	self sendJson: (SmapratHelpPageSerializer bookPageJsonFrom: class readFrom: aPageName).