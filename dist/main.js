(()=>{"use strict";const e=document.querySelector("#content"),t=document.createElement("main");t.classList.add("main"),e.appendChild(t),function(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("h1"),a=document.createElement("nav"),c=document.createElement("button"),o=document.createElement("button"),i=document.createElement("button"),m=document.createElement("span");t.className="header",m.className="accent",m.innerText="BATMAN",n.appendChild(m),n.innerHTML+=" Pizza",a.className="nav",c.id="homeBtn",c.className="nav-button active",c.innerText="HOME",o.id="menuBtn",o.className="nav-button",o.innerText="MENU",i.id="contactBtn",i.className="nav-button",i.innerText="CONTACT",t.appendChild(n),a.appendChild(c),a.appendChild(o),a.appendChild(i),t.appendChild(a),document.body.appendChild(t),e.appendChild(t)}();const n=document.querySelectorAll(".nav-button"),a=document.querySelector("#homeBtn"),c=document.querySelector("#menuBtn"),o=document.querySelector("#contactBtn");function i(){a.classList.contains("active")?function(){const e=document.querySelector("#content"),t=document.querySelector(".main"),n=document.createElement("div"),a=document.createElement("p"),c=document.createElement("img"),o=document.querySelector(".footer");n.className="home",a.textContent="Welcome to Batman Pizza! Our restaurant is known for it's delicious pizzas made with fresh ingredients. Come and taste the difference! Unleash your inner Batman!",c.src="img/home.jpg",t.appendChild(n),n.appendChild(a),n.appendChild(c),e.insertBefore(t,o)}():c.classList.contains("active")?function(){const e=document.querySelector("#content"),t=document.querySelector(".main"),n=document.createElement("div"),a=document.querySelector(".footer");n.className="menu",t.appendChild(n);const c=document.createElement("div");c.className="pizza-list",n.appendChild(c);const o=[{name:"Pizza Margherita",ingredients:"sos pomidorowy, ser mozzarella",prices:["32cm - 28zł","40cm - 36zł","50cm - 42zł"],imgSrc:"img/MARGARITA.png",imgAlt:"Pizza Margherita"},{name:"Pizza Capriciosa",ingredients:"sos pomidorowy, ser mozzarella, szynka, pieczarki",prices:["32cm - 33zł","40cm - 45zł","50cm - 50zł"],imgSrc:"img/CAPRICIOSA.png",imgAlt:"Pizza Capriciosa"},{name:"Pizza Hawajska",ingredients:"sos pomidorowy, ser mozzarella, szynka, ananas",prices:["32cm - 33zł","40cm - 44zł","50cm - 49zł"],imgSrc:"img/HAWAJSKA.png",imgAlt:"Pizza Hawajska"},{name:"Pizza Salami",ingredients:"sos pomidorowy, ser mozzarella, salami",prices:["32cm - 33zł","40cm - 44zł","50cm - 49zł"],imgSrc:"img/SALAMI.png",imgAlt:"Pizza Salami"},{name:"Pizza Diabolo",ingredients:"sos pomidorowy, ser mozzarella, salami pepperoni, jalapeño",prices:["32cm - 35zł","40cm - 46zł","50cm - 53zł"],imgSrc:"img/DIABOLO.png",imgAlt:"Pizza Diabolo"},{name:"Pizza Formaggi",ingredients:"sos pomidorowy, ser mozzarella, parmezan, ser pleśniowy",prices:["32cm - 39zł","40cm - 48zł","50cm - 57zł"],imgSrc:"img/FROMAGIO.png",imgAlt:"Pizza Formaggi"},{name:"Pizza Carbonara",ingredients:"sos śmietanowy, ser mozzarella, boczek, cebula",prices:["32cm - 38zł","40cm - 49zł","50cm - 58zł"],imgSrc:"img/CARBONARA.png",imgAlt:"Pizza Carbonara"},{name:"Pizza Góralska",ingredients:"sos pomidorowy, ser mozzarella, oscypek, boczek, żurawina",prices:["32cm - 39zł","40cm - 49zł","50cm - 58zł"],imgSrc:"img/GORALSKA.png",imgAlt:"Pizza Góralska"}];for(let e=0;e<o.length;e+=1){const t=document.createElement("div");t.className="pizza-item",c.appendChild(t);const n=document.createElement("div");n.className="pizza-description",t.appendChild(n);const a=document.createElement("div");a.className="pizza-name",a.textContent=o[e].name,n.appendChild(a);const i=document.createElement("hr");i.style.margin="24px 0",n.appendChild(i);const m=document.createElement("div");m.className="pizza-ingredients",m.textContent=o[e].ingredients,n.appendChild(m);const r=document.createElement("br");n.appendChild(r);for(let t=0;t<o[e].prices.length;t+=1){const a=document.createElement("div");a.className="pizza-price",a.textContent=o[e].prices[t],n.appendChild(a)}const s=document.createElement("img");s.src=o[e].imgSrc,s.alt=o[e].imgAlt,s.style.objectFit="cover",t.appendChild(s)}e.appendChild(t),e.insertBefore(t,a)}():o.classList.contains("active")&&function(){const e=document.querySelector("#content"),t=document.querySelector(".main"),n=document.querySelector(".footer"),a=document.createElement("div");a.className="contact";const c=document.createElement("div");c.className="contact-section",a.appendChild(c);const o=document.createElement("div");o.className="contact-us",c.appendChild(o);const i=document.createElement("p");i.className="bold",i.textContent="Contact us:",o.appendChild(i);const m=document.createElement("div");m.className="tel",m.textContent="tel. 111 222 333",o.appendChild(m);const r=document.createElement("div");r.className="email",r.textContent="batman@batmanpizza.eat",o.appendChild(r);const s=document.createElement("button");s.className="button",s.textContent="CONTACT FORM",o.appendChild(s);const d=document.createElement("div");d.className="address",c.appendChild(d);const l=document.createElement("p");l.className="bold",l.textContent="Address:",d.appendChild(l);const p=document.createElement("div");p.className="street",p.innerHTML="This is Example Street 123, <br> Cracow 31-123",d.appendChild(p);const u=document.createElement("button");u.className="button",u.textContent="BOOK A TABLE",d.appendChild(u);const z=document.createElement("iframe");z.className="map",z.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5122.60490993847!2d19.931358369257417!3d50.06189710000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120455da67%3A0xc3c7f5071b750d33!2zUnluZWsgR8WCw7N3bnk!5e0!3m2!1spl!2spl!4v1684245375628!5m2!1spl!2spl",z.style.border=0,z.allowFullscreen=!0,z.loading="lazy",z.referrerPolicy="no-referrer-when-downgrade",z.style.filter="grayscale(100%) invert(100%)",a.appendChild(z),t.appendChild(a),e.insertBefore(t,n)}()}i(),n.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("active")||(n.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),t.textContent="",i())}))})),function(){const e=document.querySelector("#content"),t=document.createElement("footer"),n=document.createElement("span"),a=document.createElement("span"),c=document.createElement("a"),o=document.createElement("i");t.className="footer",c.href="https://github.com/mariuszciaston/",c.target="_blank",c.rel="noopener",o.className="fab fa-github fa-2x",o.setAttribute("aria-hidden","true"),c.appendChild(o),a.appendChild(document.createTextNode(" ")),a.appendChild(document.createTextNode("Mariusz Ciastoń 2023 ")),a.appendChild(document.createTextNode(" ")),a.appendChild(c),t.appendChild(n),t.appendChild(a),e.appendChild(t)}()})();