matching
matches: aString
	"Decide which matching strategy to use"
	^ (self searchTerm includesSubstring: self wildcard) ifTrue: [
		self matchWithWildcard: aString] ifFalse: [self matchSimple: aString]