checking
packageExistsNamed: aString ifAbsent: anErrorBlock
	^ Environment current packageOrganizer packageNamed: aString ifAbsent: anErrorBlock