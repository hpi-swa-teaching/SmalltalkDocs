as yet unclassified
getClassInfoFrom: aClassName
	<get: '/env/classes/(\w+)'>
	|class|
	class := (Environment current classNamed: aClassName).
	self sendJson: (Dictionary newFrom: {'isHelpBook' -> (HelpPageSerializer isHelpBook: class).}) asJsonString.