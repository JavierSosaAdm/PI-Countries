import { ModifyActivity } from '../../Vistas/modifyActivity';
import Form, { From } from '../../Vistas/FORM/form';
import { Detail } from '../../Vistas/DETAIL/detail';
import { Home } from '../../Vistas/HOME/home';
import { Landing } from '../../Vistas/LANDING/landing';
import { Routes, Route, useLocation } from 'react-router-dom';

const RoutesPag = () => {
    const location = useLocation();

    return(
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Landing/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/form' element={<Form/>}/>
            <Route exact path='detail/:id' element={<Detail/>}/>
            <Route exact path='/activities' element={<Activities/>}/>
            <Route exact path='/modifyActivities' element={<ModifyActivity/>}/>
        </Routes>
    )
};    

export default RoutesPag; 
