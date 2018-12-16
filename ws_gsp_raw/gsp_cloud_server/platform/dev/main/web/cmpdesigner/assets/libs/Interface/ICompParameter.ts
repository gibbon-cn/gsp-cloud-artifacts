import { ParameterType } from '../../enum/ParameterType';
import { ParameterMode } from '../../enum/ParameterMode';

export class ICompParameter {
    ID: string;
    ParamCode: string;
    ParamName: string;
    ParamType: ParameterType;
    Assembly: string;
    ClassName: string;
    Mode: ParameterMode;
    ParamDescription: string;
}
