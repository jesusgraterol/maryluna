(()=>{var d=class{#i;#e;#t;#d;#o;#s=!1;constructor(i,e,t){this.#i=i,this.#e=e,this.#t=document.getElementById(t),this.#t.addEventListener("click",o=>this.#a(o)),this.#d=document.getElementById(`${t}Open`),this.#o=document.getElementById(`${t}Close`),this.#d.addEventListener("click",()=>this.open()),this.#o.addEventListener("click",()=>this.close()),this.#i.addEventListener("keyup",o=>this.#r(o))}get isOpened(){return this.#s}#a(i){(i.target.id===this.#t.id||i.target instanceof HTMLAnchorElement||i.target.parentNode instanceof HTMLAnchorElement)&&this.close()}#r(i){i.key==="Escape"&&this.close()}open(){this.#s||(this.#e.style["overflow-y"]="hidden",this.#t.style.display="flex",this.#s=!0)}close(){this.#s&&(this.#e.style["overflow-y"]="scroll",this.#t.style.display="none",this.#s=!1)}},u=d;var m=u;var a=class{#i;#e;#t;#d;#o;constructor(i,e){this.#i=i,this.#e=document.getElementById(e),this.#t=document.getElementById(`${e}Title`),this.#d=document.getElementById(`${e}Close`),this.#o=document.getElementById(`${e}Content`),this.#d.addEventListener("click",()=>this.close()),this.#e.addEventListener("close",()=>this.#s())}show(i,e){this.#i.style["overflow-y"]="hidden",this.#t.innerText=i,this.#o.innerHTML=e,this.#e.showModal()}close(){this.#e.close(),this.#t.innerText="",this.#o.innerHTML=""}#s(){this.#i.style["overflow-y"]="scroll"}},p=a;var c=p;var r=class{#i;#e;constructor(i,e){this.#i=i,this.#e=document.getElementById(e),this.#e.addEventListener("click",()=>this.scrollToTop()),document.addEventListener("scroll",()=>this.#t())}#t(){this.#e.style.display=this.#i.scrollTop>400?"flex":"none"}scrollToTop(){this.#i.scrollTop=0}},h=r;var b=h;var n=class{#i;#e;#t;constructor(i,e,t){this.#i=i,this.#e=document.getElementById(e),this.#e.addEventListener("click",o=>this.#d(o)),this.#t=t}#d(i){let e=i.target.getAttribute(this.#t);e==="lessons"?this.#o():e==="rent"?this.#s():e==="accomodation"&&this.#a()}#o(){this.#i.show("Clases de Kiteboarding",`
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
    `)}#s(){this.#i.show("Alquiler de Equipos",`
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
    `)}#a(){this.#i.show("Estad\xEDa",`
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus amet quidem debitis ad dolorum? Ipsum non pariatur maiores. Quod nobis aliquid aspernatur odit repudiandae omnis ab eius ut vel impedit?
      </p>
    `)}},g=n;var E=g;var l=class{#i;#e;#t;#d;#o;#s;#a;constructor(){this.#i=document.documentElement,this.#e=document.body,this.#t=document.getElementById("appContainer"),this.#d=new m(this.#i,this.#e,"mobileSidenav"),this.#o=new c(this.#e,"dialog"),this.#s=new b(this.#i,"scrollToTopButton"),this.#a=new E(this.#o,"services","data-dialog-id"),document.getElementById("currentYear").innerText=new Date().getFullYear()}},$=new l;})();
