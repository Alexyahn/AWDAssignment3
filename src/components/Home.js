import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Home() {
    useEffect(()=> {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-27&sortBy=publishedAt&apiKey=977595a45d5a41c8bc36bb1f6b6efdaf');

        const items = await data.json();
        console.log(items.articles);
        setItems(items.articles);
    };

    return <div className="homeContent">
                <p>The home page of this website is returning a basic API from the news site News API.
                    You can see the information about each article further when you inspect the page as I have also loaded the data to the console.
                </p>
                    {items.map(item => (
                        <h1 key={item.itemid}>{item.name}</h1>
                    ))}
            </div>
}

export default Home;