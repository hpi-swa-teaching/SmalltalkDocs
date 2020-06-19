accessing
setUp
	self mockHelpBook: MockHelpBook.
	self mockHelpBook superclass: CustomHelp.
	CustomHelp addSubclass: self mockHelpBook.
	self helpPageSerializer: HelpPageSerializer.