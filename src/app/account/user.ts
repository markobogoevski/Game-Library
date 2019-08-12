import { Game } from '../game/game';

export interface User {
    firstName:string;
    lastName:string;
    emailAdress:string;
    password:string;
    adress1:string;
    adress2?:string;
    phoneNumber?:string;
    city:string;
    country:string;
    zip:string;
    age?:number;
    terms:boolean;
    purchasedGames:Game[];
}
