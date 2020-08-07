as yet unclassified
packageNamed: aString ifAbsent: anErrorBlock
	^ self packages at: aString ifAbsent: anErrorBlock.