handler
sendMainHTML: aRouteString
	<get: '/(.*)'>
	|response matcher|
	matcher := '(.*)\.(jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|css|js)' asRegex.
	
	(matcher matches: aRouteString) ifTrue: [
		(self mainHTML includesKey: aRouteString) ifTrue:
		[response := (self mainHTML at: aRouteString)] ifFalse:
		[self notFound. ^self].
	(aRouteString endsWith: '.css') ifTrue: [self sendCSS: response. ^ self].
	(aRouteString endsWith: '.js') ifTrue: [self sendJS: response. ^ self].
	self notFound. ^ self].

	self sendHtml: (self mainHTML at: 'index.html').
	
	