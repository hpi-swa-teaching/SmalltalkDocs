as yet unclassified
baseline: spec
	<baseline>
	spec for: #common do: [
		spec baseline: 'RatPack' with: [
				spec
					repository: 'github://hpi-swa-teaching/RatPack2.0:master/packages'].
		spec 
			package: 'SmalltalkDocs-Core';
			package: 'SmalltalkDocs-Tests' with: [ spec requires: #('SmalltalkDocs-Core') ]
		].