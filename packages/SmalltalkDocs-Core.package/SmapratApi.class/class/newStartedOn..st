start
newStartedOn: aPort
	"Create instance and start SmapratApp on a given port"
	^ SmapratApp runIn: self defaultMode on: aPort named: 'SmapratAPI'