serializer
getMethodsJsonFrom: aClass
	|instanceMethods classMethods count|
	instanceMethods := aClass methodDict keys collect: [:method | method asString].
	classMethods := aClass class methodDict keys collect: [:method | method asString].
	count := (Dictionary newFrom: 
	{'total' -> (instanceMethods size + classMethods size). 
		'instanceMethods' -> instanceMethods size.
		'classMethods' -> classMethods size}).
 	^ (Dictionary newFrom: { 
		'count' -> count. 
		'instanceMethods' -> instanceMethods. 
		'classMethods' -> classMethods}) asJsonString.