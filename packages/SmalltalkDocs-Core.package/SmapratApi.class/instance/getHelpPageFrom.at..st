handler
getHelpPageFrom: aClassName at: aPageName
	<get: '/help/(\w+)/pages/(\w+)'>
	| class |
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (SmapratEnvironmentHelper classNamed: aClassName).
	(SmapratHelpPageSerializer isHelpBook: class) ifFalse: [self sendErrorNotAHelpBook. ^ nil.].
	(class class includesSelector: aPageName asSymbol) ifFalse: [self sendErrorNoSuchHelpPage. ^ nil].
	self sendJson: (SmapratHelpPageSerializer bookPageJsonFrom: class readFrom: aPageName).