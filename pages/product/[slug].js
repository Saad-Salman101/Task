import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext,useState,useEffect } from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

export default function ProductScreen(props) {

  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  // console.log(query)
  const { slug } = query;
  // console.log(props.myproducts)
  // const product = data.products.find((x) => x.slug === slug);

  // console.log(product)
  // if (!product) {
  //   return <div>Produt Not Found</div>;
  // }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === props.myproducts.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    console.log(props.myproducts)
    if (props.myproducts.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...props.myproducts, quantity } });
    router.push('/cart');
  };

  return (
    <Layout title={props.myproducts.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={props.myproducts.images[1]}
            alt={props.myproducts.name}
            width={640}
            height={640}
            priority={true}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{props.myproducts.name}</h1>
            </li>
            <li>Category: {props.myproducts.category}</li>
            <li>Brand: {props.myproducts.brand}</li>
            <li>
              {props.myproducts.rating} of {props.myproducts.numReviews} reviews
            </li>
            <li>Description: {props.myproducts.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${props.myproducts.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{props.myproducts.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/products');
  const myproducts = await res.json();
  const paths = myproducts.products.map((product) => ({
    params: { slug: product.id.toString() },
  }));

  return { paths, fallback: false };
}


// This function gets called at build time
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`https://dummyjson.com/products/${slug}`);
  const myproducts = await res.json();
  const newprod=Array.from(myproducts)
  // console.log(newprod)
  console.log(myproducts)

  return {
    props: {
      myproducts,
    },
  };
}

