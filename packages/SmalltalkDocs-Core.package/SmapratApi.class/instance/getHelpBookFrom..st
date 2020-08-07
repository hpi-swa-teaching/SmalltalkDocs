handler
getHelpBookFrom: aClassName
	<get: '/help/(\w+)'>
	self sendErrorIfClassAbsentOrNotAHelpBook: aClassName 
		ifSuccessfull: [:class | 
			self sendJson: (SmapratHelpPageSerializer bookJsonFrom: class)].