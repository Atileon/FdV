class Rect{
	constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
	console.log(x);
	console.log(y);
    }
    draw(nRects){
     	let svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let svgNS = svg.namespaceURI;
     
   		let container= document.getElementById('svgStripCont');
           for(let i=0; i < nRects; i++){
		   	
			   /* let x = i * 10;
			   let y = 10;
			   let w = 10;
			   let h = 10; */
			  
				let x = i * (this.x + this.w);
			   let y = this.y;
			   let w = this.w;
			   let h = this.h;
							console.log(x);
							console.log(y);
							console.log(i);

              let r= Math.floor(Math.random() * 255);
              let g= Math.floor(Math.random() * 255);
              let b= Math.floor(Math.random() * 255);
             /*  console.log(r); */
              // let a= Math.rand()*1;
              let rect = document.createElementNS(svgNS,'rect');

              svg.setAttribute('viewBox','0 0 1000 1000');

            rect.setAttribute('class','strip-'+i+'');
              rect.setAttribute('x',x);
              rect.setAttribute('y',y);
              rect.setAttribute('width',w);
              rect.setAttribute('height',h);
              rect.setAttribute('fill','rgb('+r+','+g+','+b+')');

              svg.appendChild(rect);
            container.appendChild(svg);
           }
    }
}

let quadratino = new Rect(0,0,10,40);

quadratino.draw(100);