(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.querySelector(".main"),n=document.createElement("div");n.className="home",n.textContent="Our restaurant is known for its delicious pizzas made with fresh ingredients. Come and taste the difference!",t.appendChild(n);const o=document.querySelector(".footer");e.insertBefore(t,o)}const t=document.querySelector("#content"),n=document.createElement("main");n.classList.add("main"),t.appendChild(n),function(){const e=document.querySelector("#content"),t=document.createElement("header");t.className="header",t.innerText="Headline";const n=document.createElement("nav");n.className="nav";const o=document.createElement("button");o.id="homeBtn",o.className="nav-button active",o.innerText="Home";const c=document.createElement("button");c.id="menuBtn",c.className="nav-button",c.innerText="Menu";const a=document.createElement("button");a.id="contactBtn",a.className="nav-button",a.innerText="Contact",n.appendChild(o),n.appendChild(c),n.appendChild(a),t.appendChild(n),document.body.appendChild(t),e.appendChild(t)}();const o=document.querySelectorAll(".nav-button"),c=document.querySelector("#homeBtn"),a=document.querySelector("#menuBtn"),s=document.querySelector("#contactBtn");e(),o.forEach((t=>{t.addEventListener("click",(()=>{o.forEach((e=>e.classList.remove("active"))),n.textContent="",t.classList.add("active"),c.classList.contains("active")?e():a.classList.contains("active")?function(){const e=document.querySelector("#content"),t=document.querySelector(".main"),n=document.createElement("div");n.className="menu",n.textContent="Check out our menu for a wide selection of pizzas.",t.appendChild(n);const o=document.querySelector(".footer");e.insertBefore(t,o)}():s.classList.contains("active")&&function(){const e=document.querySelector("#content"),t=document.querySelector(".main"),n=document.createElement("div");n.className="contact",n.textContent="Have any questions or want to make a reservation? Contact us using the information below.",t.appendChild(n);const o=document.querySelector(".footer");e.insertBefore(t,o)}()}))})),function(){const e=document.querySelector("#content"),t=document.createElement("footer");t.className="footer",t.textContent="Pizza Doesn't Ask Silly Questions Pizza Understands",e.appendChild(t)}()})();