import './Card.css'

const Card = ({children}:any) =>{

    return(
        <article className='card col-lg-4 col-md-6 col-sm-12' 
        >{children}</article>
    )

}

export default Card