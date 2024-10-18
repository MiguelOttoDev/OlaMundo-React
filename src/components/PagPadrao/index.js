import { Outlet } from 'react-router-dom';
import Banner from '../Banner'


const PagPadrao = () => {
    return(

        <main>
        <Banner/>

        <Outlet/>
        </main>

    )
}


export default PagPadrao;