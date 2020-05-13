start
newStartedOn: aPort
	"Create instance and start SmapratApp on default Port 8888"
	^ SmapratApp new name: 'Smaprat'; 
		portNumber: aPort; 
		start; 
		yourself.