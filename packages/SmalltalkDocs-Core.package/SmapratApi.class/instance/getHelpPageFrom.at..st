handler
getHelpPageFrom: aClassName at: aPageName
	<get: '/help/(\w+)/pages/(\w+)'>
	self sendErrorIfClassAbsentOrNotAHelpBook: aClassName ifSuccessfull: [:class | 
		(class class includesSelector: aPageName asSymbol) 
			ifFalse: [self sendErrorNoSuchHelpPage.] 
			ifTrue: [self sendJson: (
				SmapratHelpPageSerializer bookPageJsonFrom: class 
					readFrom: aPageName)]].