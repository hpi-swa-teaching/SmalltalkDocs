handler
getHelpFor: aClassName

	<get: '/help/(\w+)'>
	(Environment current hasClassNamed: aClassName) 
		ifFalse: [self sendHtml: self htmlStart, '<div>No such class</div>', self htmlEnd.] 
		ifTrue: [
			self sendHtml: (self htmlStart, self sidebar,
				'<div class="float-child">
					<h1>',aClassName,'</h1>
					<p>', 
						(self getHelpStringFrom: (Environment current classNamed: aClassName)),
					'</p>
				</div>', self htmlEnd)].