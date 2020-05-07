start
newStarted
	"Create instance and start SmapratApp on default Port 8888"
	^ SmapratApp new name: 'Smaprat'; 
		portNumber: 8888; 
		start; 
		yourself.