accessing
testStopping
	self app startOn: 0.
	100 milliSecond asDelay wait.
	self app stop.
	self assert: self app isStopped.