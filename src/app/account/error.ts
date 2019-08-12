import { User } from './user';

export class MyError {
    errorMessage:string;
    result:boolean;
    errorPasswordMessage:string;
    passwordResult:boolean;
    user:User;
}
