running
tearDown
	"Unassign HelpBook"
	CustomHelp removeSubclass: SmapratMockHelpBook.
	SmapratMockHelpBook superclass: Object.
	RPApplication removeService: self api stop; yourself.
	self api: nil.
	