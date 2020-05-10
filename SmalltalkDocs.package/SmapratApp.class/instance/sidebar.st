templating
sidebar
	| classes |
	classes := String new.
	Environment current allClasses do: [:aClass | classes := classes, aClass className, '<br>'].
	^ '<div class="float-child">', classes,  '</div>'.