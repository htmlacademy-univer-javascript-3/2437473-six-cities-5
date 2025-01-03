import MainScreen from '../pages/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';
import Login from '../pages/login.tsx';
import Favourites from '../pages/favourites.tsx';
import Offer from '../pages/offer.tsx';
import NotFound from '../pages/not_found.tsx';
import PrivateRoute from './private-route.tsx';
import {OfferCardType} from '../types/offer_card_type.ts';

type AppProps = {
  offerCards: OfferCardType[];
}

function App({offerCards}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen offerCards={offerCards}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favourites favourites={offerCards}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
