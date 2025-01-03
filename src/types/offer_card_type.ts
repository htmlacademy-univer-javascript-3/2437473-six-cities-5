import {Point} from './map_types.ts';

export enum PlaceType {
  Apartment = 'Apartment',
  Room = 'Private room'
}

export type OfferCardType = {
  id: number;
  title: string;
  price: number;
  isPremium: boolean;
  image: string;
  rating: number;
  placeType: PlaceType;
  point: Point;
}
