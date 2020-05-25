serializer
getMethodTextFrom: aClass named: aSymbol
	^ (aClass methodDict at: aSymbol) getSource asString.