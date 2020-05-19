as yet unclassified
baseline: spec
	<baseline>
	spec for: #common do: [
		spec baseline: 'RatPack' with: [
				spec
					repository: 'github://hpi-swa-teaching/RatPack2.0:develop/packages'].
		spec 
			package: 'SmalltalkDocs-Core' with: [ spec requires: #('RatPack-Core' 'RatPack-Example' 'RatPack-Help' 'RatPack-Templating' 'RatPack-Testing' 'RatPack-UI')];
			package: 'SmalltalkDocs-Tests' with: [ spec requires: #('SmalltalkDocs-Core') ]
		].
