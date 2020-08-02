accessing
getSmapratStore
	| workingCopies chosen |
	workingCopies := SquotWorkingCopy registered.
	chosen := (workingCopies collect: [:workingCopy |workingCopy name]) chooseOne: 'Choose the SquotWorkingCopy of Smaprat'.
	^ (workingCopies select: [:workingCopy | workingCopy name  = chosen]) first store

	