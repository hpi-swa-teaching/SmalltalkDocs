templating
sidebar
	| classes |
	classes := String new.
	classes := classes, '<ul>'.
	(Environment current allClasses collect: [:aClass | aClass className]) 
		sort;
		do: [:aClassName | classes := classes, '<li><a href="', (aClassName copyUpTo: Character space),'">', aClassName, '</a></li>'].
	^ '<div class="float-child sidebar">', classes,  '</ul></div>'.