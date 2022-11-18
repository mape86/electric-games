import './Card.css'

const Card = ({children}:any) =>{

    return(
        <div className='card h-100' 
        >{children}</div>
    )

}

export default Card