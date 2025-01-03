import {OfferCardType} from '../types/offer_card_type.ts';
import OfferCard from './offer_card.tsx';
import {MouseEventHandler, useState} from 'react';

type OfferCardListProps = {
  offerCards: OfferCardType[];
}

function OfferCardList({offerCards}: OfferCardListProps): JSX.Element {
  const [, setOfferCardActive] = useState(0);

  return (
    <>
      {
        offerCards.map((offer) => {
          const mouseHandler: MouseEventHandler = () => {
            setOfferCardActive(offer.id);
          };

          return (
            <OfferCard key={offer.id} offerCard={offer} mouseHandler={mouseHandler}/>);
        })
      }
    </>
  );
}

export default OfferCardList;
