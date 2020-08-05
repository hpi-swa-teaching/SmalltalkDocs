serializer
getMethodsJsonFrom: aClass
	|instanceMethods classMethods count|
	instanceMethods := (aClass selectors collect: [:method | method asString]) sort.
	classMethods := (aClass class selectors collect: [:method | method asString]) sort.
	count := (Dictionary newFrom: 
	{'total' -> (instanceMethods size + classMethods size). 
		'instanceMethods' -> instanceMethods size.
		'classMethods' -> classMethods size}).
 	^ (Dictionary newFrom: { 
		'count' -> count. 
		'instanceMethods' -> instanceMethods. 
		'classMethods' -> classMethods}) asJsonString