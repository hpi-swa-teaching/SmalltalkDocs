handler
getHelpPagesFrom: aClassName
	<get: '/help/(\w+)/pages'>
	| class |
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (SmapratEnvironmentHelper classNamed: aClassName).
	(SmapratHelpPageSerializer isHelpBook: class) ifFalse: [self sendErrorNotAHelpBook. ^ nil].
	self sendJson: (SmapratHelpPageSerializer bookPagesJsonFrom: class).