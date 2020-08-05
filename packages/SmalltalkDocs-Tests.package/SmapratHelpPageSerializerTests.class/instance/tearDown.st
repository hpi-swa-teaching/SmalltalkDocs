accessing
tearDown
	CustomHelp removeSubclass: self mockHelpBook.
	self mockHelpBook superclass: Object.
	self mockHelpBook: nil.