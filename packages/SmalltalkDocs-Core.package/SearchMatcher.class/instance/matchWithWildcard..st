accessing
matchWithWildcard: aString
	| searchParts searchPosition |
	searchParts := self searchTerm findTokens: self wildcard.
	searchPosition := 1.
	(self searchTerm beginsWith: self wildcard) ifFalse: [
		(aString beginsWith: searchParts first) ifFalse: [^false]. 
		searchPosition := searchPosition + searchParts first size.
		searchParts := searchParts allButFirst].
	searchParts do: [:matchString | 
		searchPosition := (aString findString: matchString startingAt: searchPosition) + matchString size. 
		(searchPosition > matchString size) ifFalse: [^ false]].
	^ (aString size == (searchPosition - 1)) or: [self searchTerm last asString = self wildcard]