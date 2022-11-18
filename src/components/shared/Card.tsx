import './Card.css'

const Card = ({children}:any) =>{

    return(
        <div className='card h-100 w-100 d-flex flex-column' 
        >{children}</div>
    )

}

export default Card