import { Platform } from './platform.enum';

export interface Game {
    name:string;
    id:number;
    releaseDate:Date;
    developer:string;
    companyUid:number;
    rating:number;
    popularity:number;
    platforms:Platform[];
}
