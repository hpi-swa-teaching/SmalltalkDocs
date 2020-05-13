initialize-release
styleSection
	^ '
	<style type="text/css">
		*{
			box-sizing: content-box;
			margin: 0;
			padding: 0;
		}
		h1 { 
    			margin-top: 0; /* remove space on top of page*/
		}
		.float-container
		{
    			margin-top: 0;
		}
		.float-child
		{
		
		}
		.sidebar
		{
			width: 30%;
			height: 100vh;;
			overflow: scroll;
			float: left;
			margin: 0 20px 0 0;
			position: -webkit-sticky; /* Safari */
  			position: sticky;
			
		}
		
	</style>
	'.