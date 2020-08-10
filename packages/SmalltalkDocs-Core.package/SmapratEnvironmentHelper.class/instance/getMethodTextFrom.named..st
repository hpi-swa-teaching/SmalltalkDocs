serialize
getMethodTextFrom: aClass named: aSymbol
	^ (aClass sourceCodeAt: aSymbol) asString