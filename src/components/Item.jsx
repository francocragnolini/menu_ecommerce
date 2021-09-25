const Item = ({title, desc,img,price}) => {
    return (
        <article className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>{price}</h4>
                </header>
                <div className="item-text">{desc}</div>
            </div>
            
        </article>
    )
}

export default Item
