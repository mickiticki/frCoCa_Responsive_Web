


var productObj = {
    0:{
    precio: "23.2€",
    nombre: "Product1",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, natus aliquam fugiat ad possimus repellat eius ea illum maiores dicta.",
    background: "#eee",
    link: "https://cdn.pixabay.com/photo/2016/06/27/07/30/elvis-presley-1482026_960_720.jpg"
},
    1:{
    precio: "43.2€",
    nombre: "Product2",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, natus aliquam fugiat ad possimus repellat eius ea illum maiores dicta.",
    background: "#fff",
    link: "https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447_960_720.jpg"
},
    2:{
    precio: "200.2€",
    nombre: "Product3",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, natus aliquam fugiat ad possimus repellat eius ea illum maiores dicta.",
    background: "#fff",
    link:"https://cdn.pixabay.com/photo/2016/06/27/07/30/elvis-presley-1482026_960_720.jpg"
}
}



function getProductT(id) {
    var selection = document.getElementById("product-info");
    selection.innerHTML = `
    <div id="product-img">
    <img class="img-1" src="${productObj[id].link}"
    </div>
    <div id="product-card">
    <h5 id="product-title">${productObj[id].nombre}</h5><br>
    <div id="precio"><span id="pro-item">PRECIO => ${productObj[id].precio}</span></div>
    <h6 id="product-description">${productObj[id].descripcion}</h6>
    </div>
    
    `
    console.log(productObj[id].precio);

}

getProductT(1);

