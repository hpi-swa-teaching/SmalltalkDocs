initialization
initializeSettings
	self settings globalHeaders: (
		{'access-control-allow-origin' -> self allowedDomains.
		'server' -> self name.
		'charset'-> self charset} asDictionary).