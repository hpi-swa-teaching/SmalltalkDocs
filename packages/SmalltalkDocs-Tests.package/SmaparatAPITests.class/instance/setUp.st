running
setUp

	self api: SmapratApi new.
	self mockHelpBook: MockHelpBook.
	self mockHelpBook superclass: CustomHelp.
	CustomHelp addSubclass: self mockHelpBook.
	self helpPageSerializer: HelpPageSerializer.