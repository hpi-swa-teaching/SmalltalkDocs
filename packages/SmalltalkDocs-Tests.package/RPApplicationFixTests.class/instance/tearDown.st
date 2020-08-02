accessing
tearDown
	"RPApplication removeService: (RPApplication serviceNamed: (self app class defaultName))"
	RPApplication removeService: self app stop; yourself.