var viewport = document.getElementById('viewport');
var img = viewport.getElementsByClassName('img')[0];
//把图片存为数组。
var arr = ['0.jpg','1.jpg','2.jpg']
img.src = 'img/'+arr[0];
//mTween(p,'bottom',0,500,'linear');
setInterval(fn,2000);
var num = 0;
function fn(){
	num++;
	if(num>=arr.length){
		num = 0;
	}
	//先改变看不到的那张图片。
	img.src = 'img/'+arr[num];
	//向左拉动，并改变前边的图片。
}

var picture = document.getElementsByClassName('picture')[0];
var li = picture.getElementsByTagName('li');
var wedding = picture.getElementsByClassName('wedding');
var height = picture.getElementsByClassName('height');
//for(var i=0;i<li.length;i++){
//	li[i].onmouseover = function(){
//		mTween(height[i],'height',40,100,'linear');
//		mTween(wedding[i],'margin-top',60,300,'linear');
//	};
//	li[i].onmouseout = function(){
//		mTween(height[i],'height',0,100,'linear');
//		mTween(wedding[i],'margin-top',30,300,'linear');
//	};
//}
var picture = document.getElementsByClassName('picture')[0];
var ul_list = document.getElementById('ul_list');
var sright = ul_list.getElementsByClassName('right')[0];
var sleft = ul_list.getElementsByClassName('left')[0];
//console.log(sleft)
sright.onclick = function(){
	mTween(picture,'left',-1244,500,'linear',function(){
		picture.style.left = 0;
		//回调函数是运动完执行的
	});
};
sleft.onclick = function(){
	picture.style.left = '-1244px';
	//因为左面没有图片先瞬间给予左面图片,在让它运动
	mTween(picture,'left',0,500,'linear');
}
