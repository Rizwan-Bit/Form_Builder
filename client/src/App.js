import {BrowserRouter, Switch, Route} from 'react-router-dom';

import CreateForm from './components/CreateForm';
import ListForms from './components/ListForms';
import GenrateForm from './components/GenrateForm'
import Menu from './components/Menu'

function App() {
    return(
        <BrowserRouter>
                  <Menu />
          <Switch>
                  <Route path="/" exact component={CreateForm} />
                  <Route path="/forms" exact component={ListForms} />
                  <Route path="/forms/:formId" exact component={GenrateForm} />
          </Switch>
        </BrowserRouter>
    );
}

export default App;
