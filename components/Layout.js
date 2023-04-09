import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  let val=[];

  function Movecart(){
    const cartSidebar = document.getElementById("cart-sidebar");
    cartSidebar.classList.toggle("translate-x-full");
  };


  function Fillcart(){
    let cartData = localStorage.getItem("cart");
    if (cartData !== null) {
      let parsedCartData = JSON.parse(cartData);
      val.push(...parsedCartData);
    }
    console.log(val);
    
};
  
  return (
    <>
      <Head>
        <title>{title ? title + ' - Task' : 'Task'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <h1>NC</h1>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <button>Cart</button>
              <Link href="/login">
                <a className="p-2">Cart</a>
              </Link>
              <button onClick={Movecart} class="p-2 rounded-full bg-gray-800 text-white fixed bottom-4 left-4" id="cart-button">
  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
    <path
      d="M8 18a2 2 0 002 2h4a2 2 0 002-2M7 3h10l-1.75 7H8.75L7 3zm9 14a3 3 0 11-6 0 3 3 0 016 0zM5 3h1"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</button>

<div  id="cart-sidebar" class="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-10 transform transition-transform ease-in-out duration-300 -translate-x-half">
  <div class="p-4">
    <h2 class="text-lg font-bold mb-4">Cart</h2>
    <ul>
    </ul>
  </div>
</div>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>

      </div>
    </>
  );
}
