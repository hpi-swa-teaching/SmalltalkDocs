checking
packageExistsNamed: aString ifAbsent: anErrorBlock
	^ self usedEnvironment packageOrganizer packageNamed: aString ifAbsent: anErrorBlock