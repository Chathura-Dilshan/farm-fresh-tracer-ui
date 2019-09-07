import {User} from '../session/guest-user-creation/user';

export class BodyMassIndex {
    bodyMassIndexSeq: number;
    height: number;
    weight: number;
    age: number;
    bodyStatus: number;
    dailyCalories: number;
    gender: string;
    userSeq: number;
    user: User;
}
