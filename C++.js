/*var a;
function poiu(){
	a=document.getElementById("num").value;
	document.getElementById("num").value="";
	c=a+1;
}
//a=parseInt(a);
var b=9;
var c;
if(a>0){
	a=-1;
}*/
/*function showAlert( lockTime )
{
    alert( 5 );
    if( confirm( '你確定要傳送此數值嗎？' ) )
    {
        document.getElementById( 'dataID' ).value = 'Yes';
    }
}*/
	var a=[1,2,3,5,8,13];
	var b=[];				//C6取1+C6取2+C6取3C+6取4C6取5+C6取6 = 6+15+20+15+6+1 = 63 
	var c=[];
	var g=0;for(i=0;i<6;i++){
		b[g]=a[i];
		c[g]=[i+1];
		//cout<<"b["<<g<<"] = "<<b[g]<<"\t";
		//cout<<"i = "<<i<<endl;
		//cout<<g<<"\t"<<c[0][0]<<"\t"<<i+1<<endl;
		g=g+1;	
		
	for(j=i+1;j<6;j++){
		b[g]=a[i]+a[j];
		c[g]=[i+1];
		c[g][1]=j+1;
		//cout<<"b["<<g<<"] = "<<b[g]<<"\t";
		//cout<<"i = "<<i<<"\tj = "<<j<<endl;
		//cout<<g<<endl;
		g=g+1;
		
	for(k=j+1;k<6;k++){
		b[g]=a[i]+a[j]+a[k];
		c[g]=[i+1];
		c[g][1]=j+1;
		c[g][2]=k+1;
		//cout<<"b["<<g<<"] = "<<b[g]<<"\t";
		//cout<<"i = "<<i<<"\tj = "<<j<<"\tk = "<<k<<endl;
		//cout<<g<<endl;
		g=g+1;
		
	for(l=k+1;l<6;l++){
		b[g]=a[i]+a[j]+a[k]+a[l];
		c[g]=[i+1];
		c[g][1]=j+1;
		c[g][2]=k+1;
		c[g][3]=l+1;
		//cout<<"b["<<g<<"] = "<<b[g]<<"\t";
		//cout<<"i = "<<i<<"\tj = "<<j<<"\tk = "<<k<<"\tl = "<<l<<endl;
		//cout<<g<<endl;
		g=g+1;
		
	for(m=l+1;m<6;m++){
		b[g]=a[i]+a[j]+a[k]+a[l]+a[m];
		c[g]=[i+1];
		c[g][1]=j+1;
		c[g][2]=k+1;
		c[g][3]=l+1;
		c[g][4]=m+1;
		//cout<<"b["<<g<<"] = "<<b[g]<<"\t";
		//cout<<"i = "<<i<<"\tj = "<<j<<"\tk = "<<k<<"\tl = "<<l<<"\tm = "<<m<<endl;
		//cout<<g<<endl;
		g=g+1;
	for(n=m+1;n<6;n++){
		b[g]=a[i]+a[j]+a[k]+a[l]+a[m]+a[n];
		c[g]=[i+1];
		c[g][1]=j+1;
		c[g][2]=k+1;
		c[g][3]=l+1;
		c[g][4]=m+1;
		c[g][5]=n+1;
		//cout<<"b["<<g<<"] = "<<b[g]<<"\t";
		//cout<<"i = "<<i<<"\tj = "<<j<<"\tk = "<<k<<"\tl = "<<l<<"\tm = "<<m<<"\tn = "<<n<<endl;
		//cout<<g<<endl;
		g=g+1;
	for(o=n+1;o<6;o++){
		b[g]=a[i]+a[j]+a[k]+a[l]+a[m]+a[n]+a[o];
		c[g]=[i+1];
		c[g][1]=j+1;
		c[g][2]=k+1;
		c[g][3]=l+1;
		c[g][4]=m+1;
		c[g][5]=n+1;
		c[g][6]=o+1;
		//cout<<"b["<<g<<"] = "<<b[g]<<"\t";
		//cout<<"i = "<<i<<"\tj = "<<j<<"\tk = "<<k<<"\tl = "<<l<<"\tm = "<<m<<"\tn = "<<n<<"\to = "<<o<<endl;
		//cout<<g<<endl;
		g=g+1;
	}
	}
	}
	}
	}
	}
	}
	var n;
	var x=[];
	var y;
function encrypt(){
	var text="";
	x=document.getElementById("num").value.split('');
	for(j=0;j<x.length;j++){
		if(x[j].charCodeAt()==32){
			text=text+"0";
			continue;
		}
		text=text+"1";
		var d=[];					// 對 應 數 字 
		var e=[];				//
		var f=[];				// 亂 數 組 
		var u=0;					// 對 應 數 字 總 組 數 
		var p;						// 0 ~ u 取 1 
		n=x[j].charCodeAt()-97;	
		if(n<0){
			if(n==44-97)
			n=26;
			if(n==46-97)
			n=27;
			if(n==33-97)
			n=28;
			if(n==63-97)
			n=29;
			if(n==34-97)
			n=30;
			if(n==58-97)
			n=31;
			if(n==45-97)
			n=32;
			if(n>=65-97 && n<=90-97){
				n=n+97-65;
				text=text+8;
			}
		}
		for(i=0;i<64;i++){
		if(b[i]==n){
			d[u]=i;
			u=u+1;
		}
		}
		if(n==0)
		continue;
		p=(Math.random()*u|0);
		for(i=0;i<c[d[p]].length;i++){
			e[i]=c[d[p]][i];
			}
			
		for(i=0;i<e.length;i++){
			n=(Math.random()*e.length|0)+1;
			while(n==f[0] || n==f[1] || n==f[2] || n==f[3] || n==f[4] || n==f[5] || n==f[6])
			n=(Math.random()*e.length|0)+1;
			f[i]=n;
		}
		for(i=0;i<f.length;i++){
			if(e[f[i]-1]+1!=0){
				text=text+(e[f[i]-1]+1);
			}
		}
	}
  
	document.getElementById("num").value=text;
	document.getElementById("num").style="cursor: default; outline:#a6ede4; border:#a6ede4 solid; pointer-events: none;"
	document.getElementById("num").onfocus="this.blur()";
	document.getElementById("bt").onclick="p()";
	document.getElementById("bt").style="cursor: default; outline:#a6ede4; border:#a6ede4; " 
	document.getElementById("bt").value="↑↑↑你的密碼↑↑↑\n解密趕工中，敬請期待~"
}






