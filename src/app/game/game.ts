import { Platform } from './platform.enum';

export interface Game {
    name:string;
    id:number;
    productCode:string;
    releaseDate:string;
    description:string;
    developer:string;
    price:number;
    companyUid:number;
    rating:number;
    popularity:number;
    platforms:string[];
    imageUrl:string;
}
