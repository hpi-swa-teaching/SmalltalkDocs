serializer
getUndocumentedMethodsJsonFrom: aClass
	|instanceMethods classMethods count |
	instanceMethods := (aClass selectors select: [:selector | (aClass firstPrecodeCommentFor: selector) isNil] thenCollect: [:method | method asString]) sort.
	classMethods := (aClass class selectors select: [:selector | (aClass class firstPrecodeCommentFor: selector) isNil] thenCollect: [:method | method asString]) sort.
	count := (Dictionary newFrom: 
	{'total' -> (instanceMethods size + classMethods size). 
		'instanceMethods' -> instanceMethods size.
		'classMethods' -> classMethods size}).
 	^ (Dictionary newFrom: { 
		'count' -> count. 
		'instanceMethods' -> instanceMethods. 
		'classMethods' -> classMethods}) asJsonString