as yet unclassified
baseline: spec
	<baseline>
	spec for: #common do: [
		spec baseline: 'RatPack' with: [
				spec
					loads: #('RatPack-Core' 'RatPack-Examples' 'RatPack-Testing');
					repository: 'github://hpi-swa-teaching/RatPack2.0:develop/packages'].
		spec 
			package: 'SmalltalkDocs-Core';
			package: 'SmalltalkDocs-Tests' with: [ spec requires: #('SmalltalkDocs-Core') ]
		].
