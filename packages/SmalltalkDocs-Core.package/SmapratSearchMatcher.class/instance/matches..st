accessing
matches: aString
	^ (self searchTerm includesSubstring: self wildcard) ifTrue: [
		self matchWithWildcard: aString] ifFalse: [self matchSimple: aString]