import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Layout>
  );
}

export default App;
