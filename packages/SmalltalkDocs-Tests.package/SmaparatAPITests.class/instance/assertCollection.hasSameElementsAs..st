asserting
assertCollection: aCollactionOne hasSameElementsAs: aCollactionTwo
	"Copy of implementation of collection>>sameElements: to ensure compability between all Squeak versions"
	self assert: ((aCollactionOne allSatisfy: [:each | aCollactionOne includes: each])
		and: [aCollactionOne allSatisfy: [:each | aCollactionOne includes: each]])