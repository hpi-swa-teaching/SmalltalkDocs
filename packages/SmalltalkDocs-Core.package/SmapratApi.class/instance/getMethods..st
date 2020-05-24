as yet unclassified
getMethods: aClassName
	<get: '/env/classes/(\w+)/methods'>
	|instanceMethods classMethods class|
	class := Environment current classNamed: aClassName.
	instanceMethods := class methodDict keys collect: [:method | method asString].
	classMethods := class class methodDict keys collect: [:method | method asString].
	self sendJson: (Dictionary newFrom: { 'count' -> (Dictionary newFrom: {'total' -> (instanceMethods size + classMethods size). 'instanceMethods' -> instanceMethods size. 'classMethods' -> classMethods size}). 'instanceMethods' -> instanceMethods. 'classMethods' -> classMethods}) asJsonString.