accessing
store
	store ifNil: [self store: self getSmapratStore].
	^ store