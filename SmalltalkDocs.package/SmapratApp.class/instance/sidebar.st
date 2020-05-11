templating
sidebar
	| classes |
	classes := String new.
	classes := classes, '<ul>'.
	(Environment current allClasses collect: [:aClass | aClass className]) 
		sort;
		do: [:aClassName | classes := classes, '<li>', aClassName, '</li>'].
	^ '</ul><div class="float-child">', classes,  '</div>'.