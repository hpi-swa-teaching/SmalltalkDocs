handler
getClassInfoFrom: aClassName
	<get: '/env/classes/(\w+)'>
	self sendErrorIfClassAbsent: aClassName ifPresent: [:class |self sendJson: (self environmentSerializer getClassInfoJsonFrom: class).].
	