import React from 'react';


const Menu = (props) => {

    const categories = props.categories.map((cat) => {
        return (
            <div
                key={cat.name}
                onClick={()=>props.switch(cat.name)}
                className={cat.name === props.active ?
                    'category active-cat' : 'category'}>
                <img src={cat.url} alt=""/>
                <h3>{cat.name}</h3>
            </div>
        )
    });

    let items; // ivedam kintamaji kuris neturi reiksmes
    if(props.menu){
        // jei props.menu egzistuoja, items priskiriam nauja reiksme
        items = props.menu.map((item,i)=>{
            return (
                <li key={i}>{item.name}<span>{item.price}€</span></li>
            )
        });
    }

    // jeigu duomenys butu tik masyvas [ {name:'water', price:2, category:'drinks'
    // const filtered = props.menu.filter((item)=>{
    //      return item.category===props.active
    // });
    // const items = filtered.map((item,i)=><li>{item.name}</li>)

    //arba sujungimas
    // const items = props.menu.filter((item)=>{
    //   return item.category===props.active
    // }).map((item,i)=><li>{item.name}</li>);


    return (
        <div className="menu">
            <div className="categories">
                {categories}
            </div>
            <ul className="menu-items">
                {items}
            </ul>
            {props.menu? null : <div className="loader"/>}
        </div>
    );
};
export default Menu