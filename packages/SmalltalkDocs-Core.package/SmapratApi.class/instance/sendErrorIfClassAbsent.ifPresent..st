error response
sendErrorIfClassAbsent: aClassName ifPresent: aBlock
	(self environmentSerializer classExistsNamed: aClassName) 
		ifFalse: [self sendErrorNoSuchClass]
		ifTrue: [|class| 
			class := (self environmentSerializer classNamed: aClassName).
			aBlock value: class]