export interface Game {
    name:string;
    id:number;
    productCode:string;
    releaseDate:string;
    actualReleaseDate:Date;
    description:string;
    developer:string;
    price:number;
    companyUid:number;
    rating:number;
    popularity:number;
    platforms:string[];
    imageUrl:string;
}
