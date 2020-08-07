handler
getClassInfoFrom: aClassName
	<get: '/env/classes/(\w+)'>
	| class |
	(SmapratEnvironmentHelper classExistsNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (SmapratEnvironmentHelper classNamed: aClassName).
	self sendJson: (SmapratEnvironmentHelper getClassInfoJsonFrom: class).