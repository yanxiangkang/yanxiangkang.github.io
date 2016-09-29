var button = document.getElementById('button');
var text = document.getElementById('text');
var div1 = document.getElementById('div1');

var onOff = true;
db.onclick = function(){
	if(onOff){
		db.innerHTML = '<img src="img/cool_3.jpg" class="fr"/>';
		onOff = false;
	}else{
		db.innerHTML = '<img src="img/cool_2.jpg" class="fr"/>';
		onOff = true;
	}
};
button.onclick = function(){
	if(onOff){
		div1.innerHTML = '<p class="left"><img src="img/cool_2.jpg"><span>说:'+text.value+'<span/></p>'+div1.innerHTML;
		text.value = '';
	}else{
		div1.innerHTML = '<p class="right"><img src="img/cool_3.jpg"><span>说:'+text.value+'</span></p>'+div1.innerHTML;
		text.value = '';
	}
};
