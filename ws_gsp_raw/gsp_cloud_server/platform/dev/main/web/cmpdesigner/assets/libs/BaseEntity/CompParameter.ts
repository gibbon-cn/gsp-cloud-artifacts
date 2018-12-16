import { ParameterMode } from '../../enum/ParameterMode';
import { ParameterType } from '../../enum/ParameterType';
import { ICompParameter } from '../Interface/ICompParameter';

export class CompParameter implements ICompParameter {
    ID: string;
    ParamCode: string;
    ParamName: string;
    ParamType: ParameterType;
    Assembly: string;
    ClassName: string;
    Mode: ParameterMode;
    ParamDescription: string;
}
