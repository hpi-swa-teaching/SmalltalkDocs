helper-functions
checkOkTextResponseAndGetContentsAt: anURL
	| response |
	response := self getFrom: anURL.
	self assertOkTextResponse: response.
	^ response contents contents