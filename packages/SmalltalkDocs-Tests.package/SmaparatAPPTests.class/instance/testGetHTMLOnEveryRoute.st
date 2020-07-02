testing Routes
testGetHTMLOnEveryRoute
	| result |
	result := RPTestHelper get: '/' on: self app.
	self assert: result status = #ok.
	result := RPTestHelper get: '/adiugidzgas' on: self app.
	self assert: result status = #ok.
	result := RPTestHelper get: '/' on: self app.
	self assert: result status = #ok.
	result := RPTestHelper get: '/432/ashgdjkh' on: self app.
	self assert: result status = #ok.
	result := RPTestHelper get: '/asdawdasd/dahskhdkha/dahnskjhdaizsc6/adnhskjhdo7&Zwsdba/asdf' on: self app.
	self assert: result status = #ok.
	