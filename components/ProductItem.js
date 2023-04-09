/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {

  
  function Addtocart(id,title,price,brand,images){
    const data = {
      id: id,
      title: title,
      price: price,
      brand: brand,
      images: images
    };
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
    
  };

  return (

    <div className="card">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product.images[0]}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <button  onClick={() => Addtocart(product.id,product.title,product.price,product.brand,product.images[0])}
         className="ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
      </div>
    </div>
  );
}
