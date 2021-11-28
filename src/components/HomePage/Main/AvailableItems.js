import { useEffect,useState } from "react";
import ShopItem from "./ShopItem";

const AvailableItems = (props) => {
    const [items,setItems]=useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const responseData = await response.json();

            const loadeItems = [];
            for (const key in responseData) {
                loadeItems.push({
                    id: key,
                    id:responseData[key].id,
                    title: responseData[key].title,
                    price: responseData[key].price,
                    category: responseData[key].category,
                    image:responseData[key].image,

                });
            }
            setItems(loadeItems);
        };
        fetchItems();

    }, []);
    const itemsList = items.filter((val)=>{
        if(props.onSearch==""){
            return val;
        }
        else if(val.title.toLowerCase().includes(props.onSearch.toLowerCase())){
            return val;
        }
    }).map((item)=>{
       return <ShopItem 
       key={item.id}
       id={item.id}
       title={item.title}
       price={item.price}
       category={item.category}
       image={item.image}
       />

      
    })
    return(
        <section>
            <ul className="items container-fluid d-flex flex-wrap">
                 
                {itemsList}
               
            </ul>
        </section>
    )
}
export default AvailableItems;