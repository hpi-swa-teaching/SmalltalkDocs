handler
getHelpBookFrom: aClassName
	
	<get: '/help/(\w+)'>
	| class |
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := SmapratEnvironmentHelper classNamed: aClassName.
	(SmapratHelpPageSerializer isHelpBook: class) ifFalse: [self sendErrorNotAHelpBook. ^ nil].
	self sendJson: (SmapratHelpPageSerializer bookJsonFrom: class).