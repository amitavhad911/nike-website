const wrapper = document.querySelector(".sliderwrapper");
const menuitems = document.querySelectorAll(".menuitem");
const producttitle = document.querySelector(".producttitle");
const productprice = document.querySelector(".productprice");
const productdesc = document.querySelector(".productdesc");
const productimage = document.querySelector(".productimage");
const color=document.querySelectorAll(".color");


menuitems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index == 0) {
      wrapper.style.transform = "translateX(0vw)";
      producttitle.textContent = "Nike Air";
      productprice.textContent = "Rs 4299";
      color[0].textContent="1";
      color[1].textContent="2";
      productdesc.textContent = "Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight";
      productimage.src ="./Images/nike Air.png";
    }
    if (index == 1) {
      wrapper.style.transform = "translateX(-100vw)";
      producttitle.textContent = "Nike FlyEase";
      productprice.textContent = "Rs 8499";
      color[0].textContent="3";
      color[1].textContent="4";
      color[1].style.backgroundColor="gray";
      productdesc.textContent ="Ditch the laces and get outside. These kicks feature Nike's revolutionary FlyEase technology, making on-and-off a breeze. With a heel that pivots open for a totally hands-free entry, they're great for people with limited mobility—or anyone who wants a quicker way to get going.";
      productimage.src ="./Images/nike Flyease.png";
    }
    if (index == 2) {
      wrapper.style.transform = "translateX(-200vw)";
      producttitle.textContent = "Nike Free";
      productprice.textContent = "Rs 3599";
      color[0].textContent="5";
      color[1].textContent="6";
      color[1].style.backgroundColor="gray";
      productimage.src ="./Images/nike Free.png";
      productdesc.textContent ="It's not just the minimal design and breathable upper materials—Nike Free is shaped to the anatomy of the foot so it fits like a second skin and feels like a natural extension of your body.";
    }
    if (index == 3) {
      wrapper.style.transform = "translateX(-300vw)";
      producttitle.textContent = "Nike React";
      productprice.textContent = "Rs 9699";
      color[0].textContent="7";
      color[1].textContent="8";
      color[0].style.backgroundColor="green";
      color[1].style.backgroundColor="black";
      productimage.src ="./Images/nike React.png";
      productdesc.textContent ="Nike React is an unprecedented foam cushioning innovation and our most responsive foam yet. In fact, Nike React is 11% softer and offers 13% more energy return than our previous softest and bounciest cushioning. It's also more durable and more lightweight.";
    }
    if (index == 4) {
      wrapper.style.transform = "translateX(-400vw)";
      producttitle.textContent = "Nike ZoomX";
      productprice.textContent = "Rs 10299";
      color[0].textContent="9";
      color[1].textContent="10";
      color[0].style.backgroundColor="black";
      color[1].style.backgroundColor="blue";
      productimage.src ="./Images/nike Zoomx.png";
      productdesc.textContent ="Nike ZoomX is lighter, softer and more responsive than any Nike foam, designed to maximize speed by delivering greater energy return. ZoomX was derived from a foam traditionally used in aerospace innovation, applied for the first time in performance footwear in the Nike Zoom Vaporfly Elite and 4%.";
    }
  });
});
const paybutton = document.querySelector(".paybutton");
const productbutton = document.querySelector(".productbutton");
const closebutton = document.querySelector(".close");
const payment = document.querySelector(".payment");

productbutton.addEventListener("click", () => {
  payment.style.display = "flex";
});
closebutton.addEventListener("click", () => {
  payment.style.display = "none";
});
paybutton.addEventListener("click", () => {
  payment.style.display = "none";
});

const Placed=document.querySelector(".placed");
paybutton.addEventListener("click",()=>{
    Placed.style.display="flex";
});
Placed.addEventListener("click",()=>{
  Placed.style.display="none";
});
const x=document.getElementById('nameInput');
const y=document.getElementById('contactInput');
const z=document.getElementById('addressInput');
const w=document.getElementById('btn');

const detailname=document.getElementById("detailsname");
const detailcont=document.getElementById("detailscont");
const detailaddr=document.getElementById("detailsaddr");

const images=['./Images/nike Air.png','./Images/nike Air colour.png',
              './Images/nike flyease.png','./Images/nike Flyease colour.png',
              './Images/nike Free.png','./Images/nike Free colour.png',
              './Images/nike React.png','./Images/nike React colour.png',
              './Images/nike Zoomx.png','./Images/nike Zoomx colour.png'];
color.forEach(function(box) {
  box.addEventListener("click", function() {
    var boxText = this.textContent;
    productimage.src=images[boxText-1];
  });
});
