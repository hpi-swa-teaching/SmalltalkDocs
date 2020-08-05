handler
getHelpBookFrom: aClassName
	
	<get: '/help/(\w+)'>
	| class |
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (Environment current classNamed: aClassName).
	(SmapratHelpPageSerializer isHelpBook: class) ifFalse: [self sendErrorNotAHelpBook. ^ nil].
	self sendJson: (SmapratHelpPageSerializer bookJsonFrom: class).