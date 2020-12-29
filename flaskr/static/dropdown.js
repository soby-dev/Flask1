
// var addContent = document.querySelector('#add-content')
// var addImage = document.querySelector('#add-image')
// var addVideo = document.querySelector('#add-video')


var button = document.querySelectorAll('.add-element');

var element;

function addItem(element){

	var element = document.getElementById(element);

	var newDiv = document.createElement("div");

	newDiv.innerHTML = element.innerHTML;
	newDiv.setAttribute('class', 'mb-3');

  	var buttonPosition = document.getElementById("content-add");
 	buttonPosition.insertAdjacentHTML("beforebegin", newDiv.outerHTML);

}

function onClick(button){

	for (i=0; i<button.length; i++){
		button[i].addEventListener('click', function(){
			id = this.getAttribute('id')
			if (id == 'add-content'){
				element = 'content';
				addItem(element);
			}
			else if (id == 'add-image'){
				element = 'image';
				addItem(element);
			}
			else{
				element = 'video';
				addItem(element);
			}
		})
	}
}

onClick(button);

