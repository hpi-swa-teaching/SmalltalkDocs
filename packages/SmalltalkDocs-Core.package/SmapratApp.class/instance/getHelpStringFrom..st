help-grabber
getHelpStringFrom: aClass
	"Returns the concatinated help pages of a class if present."
	| text |
	text := String new.
	(aClass class canUnderstand: #pages) ifTrue: [
		aClass pages do: [:page |(aClass class canUnderstand: page asSymbol) ifTrue: [
				text:= text,Character cr, ((aClass perform: page) contents )]]].
	^ text