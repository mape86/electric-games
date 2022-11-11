
interface IGame 
{
    id?: number,
    title: string,
    platform: string,
    releaseYear: number,
    price: number,
    image?: File
}

export default IGame;