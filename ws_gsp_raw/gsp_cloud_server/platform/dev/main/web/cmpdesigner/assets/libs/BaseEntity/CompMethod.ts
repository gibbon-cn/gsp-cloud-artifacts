import { CompParameter } from './CompParameter';
import { ReturnValue } from './ReturnValue';
import { ICompMethod } from '../Interface/ICompMethod';

export class CompMethod implements ICompMethod {
    MethodName: string;
    Assembly: string;
    ClassName: string;
    ReturnValue: ReturnValue;
    Parameters: Array<CompParameter>;
}
