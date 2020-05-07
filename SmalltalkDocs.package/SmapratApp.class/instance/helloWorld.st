handler
helloWorld

	<get: '/hello-world'>
	self sendHtml: '<html> <body> Hello World </body> </html>'.