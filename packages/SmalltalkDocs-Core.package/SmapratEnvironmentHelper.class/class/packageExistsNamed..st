checking
packageExistsNamed: aString
	Environment current packageOrganizer packageNamed: aString ifPresent: [^ true] ifAbsent: [^ false]