handler
getHelpPagesFrom: aClassName
	<get: '/help/(\w+)/pages'>
	self sendErrorIfClassAbsentOrNotAHelpBook: aClassName 
		ifSuccessfull: [:class | self sendJson: (SmapratHelpPageSerializer bookPagesJsonFrom: class)].