import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';
// import fetch from 'node-fetch';

export default function Home(myproducts) {
  console.log(myproducts.myproducts.products)
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {myproducts.myproducts.products.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
    </Layout>
  );
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