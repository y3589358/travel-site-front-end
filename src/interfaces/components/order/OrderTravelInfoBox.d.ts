interface OrderTravelInfoBoxProps {
  readonly?: boolean;
  contact: Contact;
  orderNo?: string;
  orderStatus?: string;
  onChange?: (contact: Contact) => void;
  onFrequentTravellerChange?: (frequentTraveller: string) => void;
}
