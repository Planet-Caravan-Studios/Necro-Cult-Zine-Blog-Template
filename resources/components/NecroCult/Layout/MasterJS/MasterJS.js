/************************************

MasterJS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/

export default function MasterJS({ 
  //page vars
}) {
  return (
  	<>
  		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossOrigin="anonymous"></script>

  		<script src="https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/headroom.min.js" integrity="sha512-9UsrKTYzS9smDm2E58MLs0ACtOki+UC4bBq4iK5wi7lJycwqcaiHxr1bdEsIVoK0l5STEzLUdYyDdFQ5OEjczw==" crossOrigin="anonymous"></script>
  		<script src="https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/jQuery.headroom.min.js" integrity="sha512-3zxNImEhQ2pnOSHdyGCCJhpMrU35j7UgnlycU/sLnbsdmcH+pXm9bR9htu6p6ggqx6b5VEKeinajKDpUW7LuTQ==" crossOrigin="anonymous"></script>

  		<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.js" integrity="sha512-AsoAG+OFcSvtqlspW166UTUYg7F4GEu0yNhzTIRfOGysIQA8Dqk1WZwyoN4eX6mX4DaSk703Q1iM0M47rw25Kw=="></script>

  		<script src="/scripts/main.js"></script>
  	</>
  )
}
