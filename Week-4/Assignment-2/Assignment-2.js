function ajax(src, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return callback(data);
    }
  };
  xhr.send();
}

function render(data) {
  const body = document.querySelector("body");
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    h2.innerText = data[i].name;
    p1.innerText = `price: ${data[i].price}`;
    p2.innerText = `簡介: ${data[i].description}`;
    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    body.appendChild(div);
  }
  // document.createElement() and appendChild() methods are preferred.
}

ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
