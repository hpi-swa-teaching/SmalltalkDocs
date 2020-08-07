running
setUp
	self generateNonexisitingClassName.
	self api: SmapratApi new.
	"Make MockHelpBook an actual HelpBook"
	SmapratMockHelpBook superclass: CustomHelp.
	CustomHelp addSubclass: SmapratMockHelpBook.
	self helpPageSerializer: SmapratHelpPageSerializer.