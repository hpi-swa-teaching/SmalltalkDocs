start
newStartedOn: aPort
	"Create instance and start SmapratApp on a given port"
	^ self runIn: self defaultMode on: aPort named: 'SmapratAPI'