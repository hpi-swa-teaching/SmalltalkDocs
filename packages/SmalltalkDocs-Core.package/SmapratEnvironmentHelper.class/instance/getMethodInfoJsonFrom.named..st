serialize
getMethodInfoJsonFrom: aClass named: aMethodName
	| comment |
	comment := aClass firstPrecodeCommentFor: aMethodName asSymbol.
	^ (Dictionary newFrom: {'precodeComment' -> comment. 'hasPrecodeComment'-> comment notNil}) asJsonString.