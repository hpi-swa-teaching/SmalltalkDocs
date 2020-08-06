helper-functions
checkOkJsonResponseAndGetContentsAt: anURL
	| response |
	response := self getFrom: anURL.
	self assertOkJsonResponse: response.
	^ Json readFrom: response contents contents readStream