running
generateNonexisitingClassName
	| className |
	className := 'invalidClassName12567'.
	[Environment current hasClassNamed: className] whileTrue: [className := ('invalidClassName12567','2')].
	self nonexistingClassName: className.