removing
getRegexHandlerFromUrl

	| method methodRoutes regexHandlerAssociation |
	method := self request method asLowercase asSymbol asSimpleSetter.
	methodRoutes := self routesFor: method.

	^ regexHandlerAssociation := methodRoutes
				detect: [:route | (RxMatcher forString: route key) matches: self request url]
				ifNone: ['' -> #notFound]