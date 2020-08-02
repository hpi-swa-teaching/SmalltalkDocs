stopping
stop
	self settings serverStop.
	stopSignal := OrderedCollection new.
	process ifNotNil: [process terminate].
	process ifNil: [stopSignal := nil].