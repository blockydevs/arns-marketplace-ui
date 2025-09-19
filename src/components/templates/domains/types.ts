export type Type = 'bid' | 'buyout';
export type ListingType = 'english' | 'dutch' | 'fixed';
export type Status = 'sold' | 'listed' | 'idle';
export type OwnershipType = 'lease' | 'permabuy';

export interface Domain {
  name: string;
  price: {
    value: number;
    symbol?: string;
    type: Type;
  };
  type: {
    value: ListingType;
    label?: string;
    highlightColor?: string;
  };
  createdAt?: string;
  endDate?: string | null;
  action: () => void;
  ownershipType: OwnershipType;
}

type ExtendedDomain = Omit<Domain, 'price' | 'endDate' | 'type'> & Partial<Pick<Domain, 'endDate' | 'price' | 'type'>>;

export interface OwnedDomain extends ExtendedDomain {
  status: Status;
  disabled?: boolean;
}

export interface Bid {
  bidder: string;
  href: string;
  date: string;
  price: string;
}
