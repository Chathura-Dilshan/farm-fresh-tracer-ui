import {Food} from '../food/food';
import {User} from '../session/guest-user-creation/user';

export class Farm {
    farmSeq: number;
    farmName: string;
    address: string;
    contactNo: string;
    fertilizerName: string
    pesticideName: string;
    foodSeq: number;
    food: Food;
    userSeq: number;
    user: User;
}
