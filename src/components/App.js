import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Exercise from '../pages/Exercise'

function App(){
return(
<div>
<BrowserRouter>
    <Switch>

    <Route exact path="/exercise" component={Exercise} />
    
    </Switch>
           
    </BrowserRouter>
</div>

)


}



export default App;