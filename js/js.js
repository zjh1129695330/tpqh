var div1=document.getElementById('div1');
var div10=div1.getElementsByClassName('div10');
var div11=div1.getElementsByClassName('div11');
var p10=div1.getElementsByClassName('p10');
for (var i=0;i<div10.length;i++){
	div10[i].index=i;
	div10[i].onmouseover=function(){
		index=this.index;
		for(var i=0;i<div10.length;i++){
			div10[i].style.width=110+'px';
			div10[index].style.height=470+'px';
			div10[index].style.width=500+'px';
			div11[i].style.width=110+'px';
			div11[i].style.transition='0.5s linear';
			div11[index].style.width=500+'px';
			div11[index].style.height='0';
			p10[index].style.display='none';
		}
	}
	div10[i].onmouseout=function(){
		index=this.index;
		for(var i=0;i<div10.length;i++){
			div10[i].style.width=207.5+'px';
			div10[i].style.height=470+'px';
			div11[i].style.width=207.5+'px';
			div11[i].style.height=470+'px';
			p10[i].style.display='block';
			div11[i].style.display=470+'px';
		}
	}
}