
			//when the window would "load" the function (e)
window.addEventListener('load', function(e) {
			//varaiable named appleGrid has varaiable value of #applegrid
	var appleGrid = document.getElementById('apple-grid');
  		//varaiable named appleList has varaiable value of #applelist
	var appleList = document.getElementById('apple-list');
  		//varaiable named appleThumbs has varaiable value of #apple-thumbs
	var appleThumbs = document.getElementById('apple-thumbs');
  		//varaiable named gridApples has varaiable value of .apple
	var gridApples = document.querySelectorAll('.apple');

		//executes a provided function once for each element of gridApple and i element.
	gridApples.forEach((gridApple, i) => {
		//function pickApple will be executed when the gridApple is 'clicked.'
	gridApple.addEventListener('click', pickApple);
	});

  	//Following sentences defines the pickApple function
	function pickApple(e) {

  	//The target property of the Event interface is a reference to the object that dispatched the event. It is different from Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.
  	//varaiable named apple has varaiable value of the object that has been targeted
  	//what does . mean?
	var apple = e.target;
  	//The dataset property on the HTMLElement interface provides read/write access to all the custom data attributes (data-*) set on the element.
  	//set the data attribute
  	//The toString() method converts a number to a string.
  	//> varaiable named appleName has value of apple with setted attricute of toString()??
	var appleName = apple.dataset.apple.toString();

  	//varaiable named appleListItem has value of creating 'li' elements
	var appleListItem = document.createElement('li');
		//varaiable named appleListItem has value of selecting 'ol', which is located inside of appleList
	var ol = appleList.querySelector('ol');
		//https://www.w3schools.com/jsref/met_node_appendchild.asp
		//append appleListItem to ol
	ol.appendChild(appleListItem);
		//write "appleName" inside of appleListItem
	appleListItem.innerText = appleName;


		//The Node.cloneNode() method returns a duplicate of the node on which this method was called.
		//varaiable named appleThumb has value of duplicated apple value
	var appleThumb = apple.cloneNode(true);
		//paste apple Thumb (the cloned apple) to the appleThumbs
	appleThumbs.appendChild(appleThumb);}

});
