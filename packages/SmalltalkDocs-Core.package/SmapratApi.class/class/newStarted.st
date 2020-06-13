start
newStarted
	"Create instance and start SmapratApp on default Port 8888"
	^ self runIn: self defaultMode on: self defaultPort named: 'SmapratAPI'