searching
string: aString includesAllSubstrings: aStringCollection
	aStringCollection do: [:matchString | (aString includesSubstring: matchString) ifFalse: [^ false]].
	^ true