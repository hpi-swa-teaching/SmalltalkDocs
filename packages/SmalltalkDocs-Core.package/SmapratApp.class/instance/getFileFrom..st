handler
getFileFrom: aRouteString
	<get: '/(.*)'>
	| matcher |
	matcher := '(.*)\.(jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|css|js)' asRegex.
	
	(matcher matches: aRouteString) ifTrue: [
		(self sendFile: aRouteString)].

	self sendMainHTML.