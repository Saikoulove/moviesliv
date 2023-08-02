import "./card.css";
function Card({children, padding, width, height, margin}) {
    return (  
        <div className="card" style={{padding: padding, width: width, height: height, margin: margin}}>
            {children}
        </div>
    );
}

export default Card;