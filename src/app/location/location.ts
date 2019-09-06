import {User} from '../session/guest-user-creation/user';

export class Location {
   locationSeq: number;
    locationName: string;
    address: string;
    contactNo: string;
    locationType: string;
    userSeq: number;
    user: User;
}
