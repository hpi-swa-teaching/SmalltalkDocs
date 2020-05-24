running
tearDown

	CustomHelp removeSubclass: self mockHelpBook.
	self mockHelpBook superclass: Object.
	self mockHelpBook: nil.
	RPApplication removeService: self api stop; yourself.
	self api: nil.
	