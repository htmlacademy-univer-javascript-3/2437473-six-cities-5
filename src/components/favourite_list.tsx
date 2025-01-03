import {OfferCardType} from '../types/offer_card_type.ts';
import Favourite from './favourite.tsx';

type FavouriteListProps = {
  favourites: OfferCardType[];
}

function FavouriteList({favourites}: FavouriteListProps): JSX.Element {
  return (
    <>
      {
        favourites.map((favourite) => <Favourite key={favourite.id} favourite={favourite}/>)
      }
    </>
  );
}

export default FavouriteList;
