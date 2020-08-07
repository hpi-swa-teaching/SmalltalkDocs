accessing
environmentSerializer
	environmentSerializer ifNil: [self environmentSerializer: SmapratEnvironmentHelper new].
	^ environmentSerializer