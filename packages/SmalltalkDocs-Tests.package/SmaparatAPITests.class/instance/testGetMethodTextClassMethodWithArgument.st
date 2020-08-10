testing GetMethodText
testGetMethodTextClassMethodWithArgument
	| contents |
	contents := self checkOkTextResponseAndGetContentsAt: '/env/classes/SmapratMockClass/methods/class/classMethod4:/text'.
	self assert: contents equals: 'classMethod4: anArgument',String lf,'	"I have an Argument and a classComment"'.