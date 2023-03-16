export interface Client {
    id: string;
    imgSrc?: string;
    surname: string;
    name: string;
    street: string;
    postCode: string;
    city: string;
    region?: string;
    phoneNumber: string;
  }