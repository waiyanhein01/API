import "./style.css";

const apiBtn = document.querySelector("#apiBtn");
const productName = document.querySelector("#productName")
const productCategory = document.querySelector("#productCategory")
const productPrice = document.querySelector("#productPrice")
const productGroup = document.querySelector("#productGroup")

 

const handleApiBtn = () => {
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.text())
  //   .then((data) => {
  //     // json string => json object
  //     console.log(JSON.parse(data));
  //   });

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      for(const el of data){
        const name = el.title;
        const price = el.price;
        const category = el.category;
        productName.innerText = name;
        productPrice.innerText = price;
        productCategory.innerText = category;
      }
    });
};
apiBtn.addEventListener("click", handleApiBtn);
