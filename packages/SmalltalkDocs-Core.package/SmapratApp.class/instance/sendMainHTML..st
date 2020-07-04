handler
sendMainHTML: aRouteString
	<get: '/(.*)'>
	|response|
	(self mainHTML includes: aRouteString) ifTrue:
		[response := (self mainHTML at: aRouteString)] ifFalse:
		[response := (self mainHTML at: 'index.html')].
	self sendHtml: response.