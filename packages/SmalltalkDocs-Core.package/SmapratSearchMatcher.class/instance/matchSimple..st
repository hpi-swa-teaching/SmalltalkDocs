matching
matchSimple: aString
	"Match String as %aString%"
	^ aString includesSubstring: self searchTerm.