start
newStartedOn: aPort
	"Create instance and start SmapratApp on a given port"
	^ SmapratApp new name: 'Smaprat'; 
		portNumber: aPort; 
		start; 
		yourself.