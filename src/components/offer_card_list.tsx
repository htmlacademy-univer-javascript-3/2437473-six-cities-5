import {OfferCardType} from '../types/offer_card_type.ts';
import OfferCard from './offer_card.tsx';
import {MouseEvent} from 'react';

type OfferCardListProps = {
  offerCards: OfferCardType[];
  onListItemHover: (lastId: string) => void;
}

function OfferCardList({offerCards, onListItemHover}: OfferCardListProps): JSX.Element {
  const handleListItemHover = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    onListItemHover(target.id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards.map((offerCard) => (
        <div
          key={offerCard.id}
          onMouseOver={handleListItemHover}
        >
          <OfferCard key={offerCard.id} offerCard={offerCard}/>
        </div>
      ))}
    </div>);
}

export default OfferCardList;
