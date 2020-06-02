handler
getHelpPagesFrom: aClassName
	<get: '/help/(\w+)/pages'>
	| class |
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil.].
	class := (Environment current classNamed: aClassName).
	(HelpPageSerializer isHelpBook: class) ifFalse: [self sendErrorNotAHelpBook. ^ nil.].
	self sendJson: (HelpPageSerializer bookPagesJsonFrom: class).