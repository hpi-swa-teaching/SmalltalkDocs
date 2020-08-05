accessing
setUp
	self mockHelpBook: SmapratMockHelpBook.
	self mockHelpBook superclass: CustomHelp.
	CustomHelp addSubclass: self mockHelpBook.
	self helpPageSerializer: SmapratHelpPageSerializer.