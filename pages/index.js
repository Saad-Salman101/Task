import Head from "next/head";
import Image from "next/image";
 import Layout from '../components/Layout';
 import ProductItem from '../components/ProductItem';
// import SidebarProvider from '../components/SidebarContext'



export default function Listpage({ myproducts }) {
  return (
    <>
    {console.log(myproducts.products)}
      
      {/* <ul>
        { myproducts.products.map(product => (
           <>
           <img src={product.images[0]} alt={product.name} className="rounded shadow" />
           <li key={product.title}>{product.title} - ${product.price}</li>
           <p className="mb-2">{product.brand}</p>
           <button className="primary-button" type="button">
          Add to cart
        </button>
           </>
        ))}
      </ul> */}
          {/* <SidebarProvider> */}
          <Layout title="Home Page">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
         {myproducts.products.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
      </Layout>
      {/* </SidebarProvider> */}
  
  
  </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://dummyjson.com/products');
  const myproducts = await res.json()
  
  
  return {
    props: {
      myproducts,
    },
  }
}



// import Layout from '../components/Layout';
// import ProductItem from '../components/ProductItem';
// import data from '../utils/data';
// const getStaticProps = async () => {
//   const response = await fetch('https://dummyjson.com/products');
//   const data = await response.json();
//   return{
//     props:{ myproducts:data}
//   }
// }
//  const Home = (myproducts)=> {
//   {console.log(myproducts.products)}
//   return (
//     <Layout title="Home Page">
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
//         {myproducts.products.map((product) => (
//           <ProductItem product={product} key={product.slug}></ProductItem>
//         ))}
//       </div>
//     </Layout>
//   );
// }
// export default Home;