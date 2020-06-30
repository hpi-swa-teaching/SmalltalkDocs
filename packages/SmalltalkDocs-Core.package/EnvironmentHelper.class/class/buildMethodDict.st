serializer
buildMethodDict
	| allClasses allMethods buffer |
	allClasses := Environment current allClasses.
	buffer := OrderedCollection new.
	allMethods := allClasses collect: [:class | class selectors collect: 
		[:selector | Dictionary newFrom: {
			'methodName' -> selector asString. 
			'side' -> 'instance'. 
			'className' -> class name}]].
	allMethods := allMethods union: (allClasses collect: [:class | 
		class class selectors collect: [:selector | 
			Dictionary newFrom: {
				'methodName' -> selector asString. 
				'side' -> 'class'. 
				'className' -> class name}]]).
	allMethods do: [:methodCollection | buffer addAll: methodCollection].
	^ buffer