import { useState, useEffect } from "react"
import Layout from "../../Layout/Layout"
import Card from "../../Components/Card/Card"

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() =>{
    const API = 'https://fakestoreapi.com/products';
    const fetchData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <Layout>
        Home
        <div className="grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
          { items?.map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))
          }
        </div>
      </Layout>
      
    </>
  )
}

export default Home
