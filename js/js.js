var div1=document.getElementById('div1');
var div10=div1.getElementsByClassName('div10');
var div11=div1.getElementsByClassName('div11');
var p10=div1.getElementsByClassName('p10');
var img10=div1.getElementsByClassName('img10');
for (var i=0;i<div10.length;i++){
	img10[i].style.display='none';
}
 for (var i=0;i<div10.length;i++){
	p10[i].style.display='block';
}

for (var i=0;i<div10.length;i++){
	div10[i].index=i;
	div10[i].onmouseover=function(){
		index=this.index;
		for(var i=0;i<div10.length;i++){
			div10[i].style.width=150+'px';
			div10[index].style.width=0+'px';
			div11[i].style.width=150+'px';
			div11[index].style.width=0+'px';
			img10[index].style.display='block';
			p10[index].style.display='none';
		}
	}
	img10[i].onmouseout=function(){
		for(var i=0;i<div10.length;i++){
			div10[i].style.width=250+'px';
			div11[i].style.width=250+'px';
			img10[i].style.display='none';
			p10[i].style.display='block';
		}
	}
}