import {Roles} from '../../authentication/Roles';

export class User {
    userSeq: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    secondName: string;
    roles: Roles[];
    securityAnswer: string;
    userType: string;
}
