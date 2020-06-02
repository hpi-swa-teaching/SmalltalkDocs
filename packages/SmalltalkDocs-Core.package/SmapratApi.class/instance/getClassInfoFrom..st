as yet unclassified
getClassInfoFrom: aClassName
	<get: '/env/classes/(\w+)'>
	|class|
	(Environment current hasClassNamed: aClassName) ifFalse: [self sendErrorNoSuchClass. ^ nil.].
	class := (Environment current classNamed: aClassName).
	self sendJson: (Dictionary newFrom: {'isHelpBook' -> (HelpPageSerializer isHelpBook: class).}) asJsonString.