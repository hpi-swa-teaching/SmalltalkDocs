start
newStarted
	"Create instance and start SmapratApp on default Port 8888"
	^ SmapratApp new name: 'Smaprat'; 
		portNumber: SmapratApp defaultPort; 
		start; 
		yourself.