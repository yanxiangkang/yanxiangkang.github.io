var viewport = document.getElementById('viewport');
var img = viewport.getElementsByClassName('img')[0];
var ul_list = document.getElementById('ul_list');
var ul_list_div = ul_list.getElementsByClassName('ul_list_div')[0]
var picture = ul_list_div.getElementsByClassName('picture')[0];
var pictures = ul_list_div.getElementsByClassName('pictures')[0];
var picturess = ul_list_div.getElementsByClassName('picturess')[0];
var wedding = picture.getElementsByClassName('wedding');
var height = picture.getElementsByClassName('height');
var li = picture.getElementsByTagName('li');
var lis = pictures.getElementsByTagName('li');
var sright = ul_list.getElementsByClassName('right')[0];
var sleft = ul_list.getElementsByClassName('left')[0];
var imga = picture.getElementsByTagName('img');
var imgs = pictures.getElementsByTagName('img');
var imgss =  picturess.getElementsByTagName('img');
var p = picture.getElementsByTagName('p');
var ps = pictures.getElementsByTagName('p');
var pss = picturess.getElementsByTagName('p');
var span = picture.getElementsByTagName('span');
var spans = pictures.getElementsByTagName('span');
var spanss = picturess.getElementsByTagName('span');
console.log(imgs)
var arrs = [
	[
		["img/1462776835466.jpg",['【载·归】宁得一人心，白首莫相离'],['撒贝宁&李白']],
		["img/1435568958628.jpg",['照亮心里的璐'],['贾乃亮&李小璐']],
		["img/1435568966550.jpg",['云动心璇'],['高云翔&董璇']],
		["img/1435568976555.jpg",['一建倾昕'],['何建泽&陶昕然']]
	],
	[
		["img/1435569414196.jpg",['暖色教堂'],['北京华彬庄园']],
		["img/1435569454938.jpg",['停驻脚步于此，邂逅你'],['北京励骏酒店']],
		["img/1435569606327.jpg",['暮光森林'],['北京四季酒店']],
		["img/1435569624583.jpg",['经典白绿色系，永不过时的时光典范'],['三亚莱佛士酒店']]
	]
]
//第一部分:图片跳转
var arr = ['0.jpg','1.jpg','2.jpg']
img.src = 'img/'+arr[0];
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
//第二部分:无缝轮播复杂版
var onOff = true; 
var onOff1 = true; 
var onOff2 = true; 
sleft.onclick = function(){
	if(!onOff)return;
	onOff = false;
	mTween(ul_list_div,'left',-2488,1000,'linear',function(){
		if(onOff1){
			for(var i=0;i<imga.length;i++){
				imga[i].src = arrs[1][i][0];
				p[i].innerHTML = arrs[1][i][1];
				span[i].innerHTML = arrs[1][i][2];
				imgs[i].src = arrs[0][i][0];
				ps[i].innerHTML = arrs[0][i][1];
				spans[i].innerHTML = arrs[0][i][2];
			}
		}else{
			for(var i=0;i<imga.length;i++){
				imga[i].src = arrs[0][i][0];
				p[i].innerHTML = arrs[0][i][1];
				span[i].innerHTML = arrs[0][i][2];
				imgs[i].src = arrs[1][i][0];
				ps[i].innerHTML = arrs[1][i][1];
				spans[i].innerHTML = arrs[1][i][2];	
			}
		}
		onOff=true;
		onOff1 = !onOff1;
		ul_list_div.style.left='-1244px';
	});
}
sright.onclick = function(){
	if(!onOff)return;
	onOff = false;
	mTween(ul_list_div,'left',0,1000,'linear',function(){
		if(onOff1){
			for(var i=0;i<imga.length;i++){
				imga[i].src = arrs[1][i][0];
				p[i].innerHTML = arrs[1][i][1];
				span[i].innerHTML = arrs[1][i][2];
				imgss[i].src = arrs[0][i][0];
				pss[i].innerHTML = arrs[0][i][1];
				spanss[i].innerHTML = arrs[0][i][2];
			}
		}else{
			for(var i=0;i<imga.length;i++){
				imga[i].src = arrs[0][i][0];
				p[i].innerHTML = arrs[0][i][1];
				span[i].innerHTML = arrs[0][i][2];
				imgss[i].src = arrs[1][i][0];
				pss[i].innerHTML = arrs[1][i][1];
				spanss[i].innerHTML = arrs[1][i][2];	
			}
		}
		onOff=true;
		onOff1 = !onOff1;
		ul_list_div.style.left='-1244px';
	});
}
//点击head部分,跳转到对应模块
var screen = document.getElementsByClassName('screen');
var arr1 = [];
for (var i=0;i<screen.length;i++) {
	//获取到每个div到父级的top值，减去header的高
	arr1.push(screen[i].getBoundingClientRect().top-52);
}
click();
function click(){
	console.log(arr1)
	//点击li，滚轮到指定的位置
	$('#header_ul li').click(function(){
		console.log($(this).index())
		$(document.body).animate({
			scrollTop:arr1[$(this).index()]
		},1000)
	});
}
//滚轮滑动
		var Bbox = document.getElementById('Bbox');
		var Sbox = document.getElementById('Sbox');
		// var contents = document.getElementById('contents');
		var container = $('#container');
		var box = document.getElementById('box');
//		var bigBox = document.getElementById('Box');
		//var num = 0;
		var kyx = 0;
		var n =0;
		var zhi = 660;
		var Smbox = Bbox.clientHeight - Sbox.offsetHeight; 
		var Rmbox = box.clientHeight - content.offsetHeight;
		var onOffkyx = true;
		Sbox.onmousedown = function(ev){
			var disy = ev.clientY - getPos(this).top;
			document.onmousemove = function(ev){
				var y = ev.clientY - disy -50;
				num = y;
				if(y<0){
					y = 0;
				}
				if(y>Smbox){
					y = Smbox;
				}
				var scale = y/Smbox;    //计算出每次要出现的比例
				Sbox.style.top = y + 'px';
				contents.style.top = scale*Rmbox + 'px';
			}
			document.onmouseup = function(){
				document.onmousemove = null;
			}
			return false;
		}
		// 调用函数  穿进去父级的对象   和两个函数值
//		console.log(bigBox)
		mScroll(document,fn1,fn2);
		function fn1(){
			if(!onOffkyx)return;
			onOffkyx = false;
			// if(n<0){
			// 	n = 0;
			// }
			// n--;
//			container.css({
//				top:zhi*num + 'px'
//			})
//			 num+= 502;
//			if(num<0){
//				num = 0;
//			}
//			
//			if(num>Smbox){
//				num = Smbox;
//			}
//			 var y1 = num/Smbox;
//			Sbox.style.top = num + 'px';
//			contents.style.top =  y1*Rmbox + 'px';
			kyx--;
			if( kyx<0 ){
				kyx = 0;
			}
			$(document.body).animate({
				scrollTop:arr1[kyx]
			},1000)
			setTimeout(function(){
				onOffkyx = true;
			},1500)
		}
		function fn2(){
			// console.log('下')
			// if(n<4){
			// 	n =4;
			// }
			// n++;
			// console.log(n);
//			container.css({
//				top:-zhi*num + 'px'
//			})
//			num -=502;
//			if(num<0){
//				num = 0;
//			}
//			
//			if(num>Smbox){
//				num = Smbox;
//			}
//			 var y2 = num/Smbox;
//			Sbox.style.top = num + 'px';
//			contents.style.top =  y2*Rmbox + 'px';
			if(!onOffkyx)return;
			onOffkyx = false;
			kyx++;
			kyx%=5;
			$(document.body).animate({
				scrollTop:arr1[kyx]
			},1000)
			setTimeout(function(){
				onOffkyx = true;
			},1500)
		}
function mScroll(obj,upper,down){
		obj.addEventListener('DOMMouseScroll', fn, false);
		obj.onmousewheel  = fn;

		function fn(ev){
			var n;
			/*
				负数代表向下
				正数是向上
				n就是这个数字
			*/
			if(ev.detail){
				//firefox
				n = -ev.detail;
			}else{
				//ie和chrome
				n = ev.wheelDelta;
			}
//			(或者:
//			if(ev.wheelDelta){
//				//firefox
//				n = ev.wheelDelta;
//			}else{
//				//ie和chrome
//				n = -ev.detail;
//			})

			//n小于0向下滚动，否则向上。
			if(n<0){
				down();
			}else{
				upper();
			}
		}
	}
		function getPos(obj){
			return obj.getBoundingClientRect();
		}
//第三部分:鼠标移入出现类似遮罩层的样式
			var over = true;
			var out  = true;
			$(".block_bigg").hover(function(){
				if(over){
					over = false;
					console.log(1);
					$(this).find(".block").css({
						transform:'translateY(0px)'
					})
					$(this).addClass("section");
					$(this).find("img").animate({
						opacity: 1,
					},100);
						
					$("p").animate({
						top: 250,
					},100,function(){
						over = true;
					});
				}
			},function(){
				if(out){
					out = false;
					$(".block_bigg .block").css({
						transform:'translateY(-100px)'
					})
					$(".block_bigg").removeClass("section");
					$(".block_bigg img").animate({
						opacity: 0,
					},100);
					$("p").animate({
						top: 200,
					},100,function(){
						out = true;
					});
				}	
			});
			 $(".right_wrap").hover(function(){
				$(".right_wrap>span").css({
						opacity:1
					})
			},function(){
				$(".right_wrap>span").css({
						opacity:0
					})
			})
