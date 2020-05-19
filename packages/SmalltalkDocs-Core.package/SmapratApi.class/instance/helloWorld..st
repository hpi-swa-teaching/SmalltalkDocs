handler
helloWorld: aString

	<get: '/test/(\w+)/help'>
	self sendHtml: '<html> <body> <div>',aString,'</div> </body> </html>'.