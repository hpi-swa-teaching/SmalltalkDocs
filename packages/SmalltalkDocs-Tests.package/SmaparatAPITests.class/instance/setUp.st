running
setUp
	self generateNonexisitingClassName.
	self api: SmapratApi new.
	self mockHelpBook: SmapratMockHelpBook.
	self mockHelpBook superclass: CustomHelp.
	CustomHelp addSubclass: self mockHelpBook.
	self helpPageSerializer: HelpPageSerializer.