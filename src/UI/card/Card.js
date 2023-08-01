import "./card.css";
function Card({children, padding, width,  margin}) {
    return (  
        <div className="card" style={{padding: padding, width: width, margin: margin}}>
            {children}
        </div>
    );
}

export default Card;