accessing
usedEnvironment
	usedEnvironment ifNil: [self usedEnvironment: Environment current].
	^ usedEnvironment