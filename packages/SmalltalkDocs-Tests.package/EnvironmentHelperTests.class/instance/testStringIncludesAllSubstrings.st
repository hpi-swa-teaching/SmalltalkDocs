as yet unclassified
testStringIncludesAllSubstrings
	| searchParts |
	searchParts := #('a' 'b' 'c').
	self assert: (self environmentHelper string: 'Hallo Torben du Schnitzel' includesAllSubstrings: searchParts).
	self deny: (self environmentHelper string: 'xyz' includesAllSubstrings: searchParts).
	self deny: (self environmentHelper string: 'Cristian das Brot' includesAllSubstrings: searchParts).