error response
sendErrorIfClassAbsent: aClassName ifPresent: aBlock
	(SmapratEnvironmentHelper classExistsNamed: aClassName) 
		ifFalse: [self sendErrorNoSuchClass]
		ifTrue: [|class| 
			class := (SmapratEnvironmentHelper classNamed: aClassName).
			aBlock value: class]