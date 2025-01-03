import {OfferCardType, PlaceType} from '../types/offer_card_type';

export const OfferCards: OfferCardType[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    price: 210,
    isPremium: true,
    image: 'img/apartment-01.jpg',
    rating: 1,
    placeType: PlaceType.Apartment,
    point: {
      id: 1,
      lat: 52.3909553943508,
      lng: 4.85309666406198
    },
  },
  {
    id: 2,
    title: 'Wood and stone place',
    price: 80,
    isPremium: false,
    image: 'img/room.jpg',
    rating: 4,
    placeType: PlaceType.Room,
    point: {
      id: 2,
      lat: 52.3609553943508,
      lng: 4.85309666406198
    },
  },
  {
    id: 3,
    title: 'Aboba',
    price: 111,
    isPremium: false,
    image: 'img/apartment-02.jpg',
    rating: 3,
    placeType: PlaceType.Apartment,
    point: {
      id: 3,
      lat: 52.3909553943508,
      lng: 4.929309666406198
    },
  },
  {
    id: 4,
    title: 'Chetvertoe predlozenie',
    price: 44,
    isPremium: false,
    image: 'img/apartment-03.jpg',
    rating: 5,
    placeType: PlaceType.Apartment,
    point: {
      id:4,
      lat: 52.3809553943508,
      lng: 4.939309666406198
    },
  }
];
