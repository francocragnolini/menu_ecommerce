import Item from "./Item";

const Menu = ({items}) => {
    return (
        <div className='section-center'>
            {items.map((menuItem)=> {
                const {id,title,desc,img, price} = menuItem;
                return (
                    
                    <Item key={id} title={title} desc={desc} img={img} price={price} />
                )

            })}
        </div>
    )
}

export default Menu
