import "./Card.css"



const Card = (props) => {

    const classFormat = "card " + props.className;

    // return <div className={styles.classFormat}>
    //     {props.children}
    // </div>


    return <div className={classFormat}>
        {props.children}
    </div>
}

export default Card;