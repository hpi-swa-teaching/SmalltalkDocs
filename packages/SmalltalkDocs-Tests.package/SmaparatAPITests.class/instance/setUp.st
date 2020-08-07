running
setUp
	self generateNonexisitingClassName.
	self api: SmapratApi new.
	self api environmentSerializer usedEnvironment: SmapratMockEnvironment new.
	"Make MockHelpBook an actual HelpBook"
	SmapratMockHelpBook superclass: CustomHelp.
	CustomHelp addSubclass: SmapratMockHelpBook.
	self helpPageSerializer: SmapratHelpPageSerializer.