import { ReturnValue } from '../BaseEntity/ReturnValue';
import { ICompParameter } from './ICompParameter';

export class ICompMethod {
    Assembly: string;
    ClassName: string;
    MethodName: string;
    ReturnValue: ReturnValue;
    Parameters: Array<ICompParameter>;
}
