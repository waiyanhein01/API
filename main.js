import "./style.css";

const apiBtn = document.querySelector("#apiBtn");
const productName = document.querySelector("#productName")
const productCategory = document.querySelector("#productCategory")
const productPrice = document.querySelector("#productPrice")
const productGroup = document.querySelector("#productGroup")

 
// async await
const handleApiBtn = async () => {

  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json();
  for(const el of data){
    console.log(el)
    const name = el.title;
    const price = el.price;
    const category = el.category;
    productName.innerText = name;
    productPrice.innerText = price;
    productCategory.innerText = category;
  }

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.text())
  //   .then((data) => {
  //     // json string => json object
  //     console.log(JSON.parse(data));
  //   });

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     for(const el of data){
  //       const name = el.title;
  //       const price = el.price;
  //       const category = el.category;
  //       productName.innerText = name;
  //       productPrice.innerText = price;
  //       productCategory.innerText = category;
  //     }
  //   });
};
apiBtn.addEventListener("click", handleApiBtn);
