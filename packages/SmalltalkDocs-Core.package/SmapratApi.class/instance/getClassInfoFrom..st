handler
getClassInfoFrom: aClassName
	<get: '/env/classes/(\w+)'>
	| class |
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil].
	class := (Environment current classNamed: aClassName).
	self sendJson: (SmapratEnvironmentHelper getClassInfoJsonFrom: class).