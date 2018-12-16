import { ParameterMode } from '../enum/ParameterMode';
import { ParameterType } from '../enum/ParameterType';

export const ComponentExample = {
    ComponentID: '1324424242421312',
    ComponentCode: 'BizComponentBasicComponent',
    ComponentName: '业务逻辑构件基础构件',
    ComponentDescription: '业务逻辑构件基础构件描述',
    ComponentType: 'BEComponent',
    Method: {
        Assembly: 'Genersoft.Platform.BizComponent.BasicLib',
        ClassName: 'Genersoft.Platform.BizComponent.BasicLib.BaseBizComponent',
        MethodName: 'AddObject',
        ReturnValue: {
            ID: '123123123123',
            ParamCode: undefined,
            ParamName: undefined,
            Mode: ParameterMode.IN,
            ParamType: ParameterType.DateTime,
            Assembly: 'mscorlib.dll',
            ClassName: 'System.DateTime',
            ParamDescription: 'Return13213ParamDescription11'
        },
        Parameters: [
            {
                ID: '11111111',
                ParamCode: 'ParamCode1',
                ParamName: '参数1',
                Mode: ParameterMode.IN,
                ParamType: ParameterType.String,
                Assembly: 'mscorlib.dll',
                ClassName: 'System.String',
                ParamDescription: '参数描述1'
            },
            {
                ID: '22222222',
                ParamCode: 'ParamCode2',
                ParamName: '参数2',
                Mode: ParameterMode.IN,
                ParamType: ParameterType.Integer,
                Assembly: 'mscorlib.dll',
                ClassName: 'System.Int32',
                ParamDescription: '参数描述2'
            },
            {
                ID: '33333333',
                ParamCode: 'ParamCode3',
                ParamName: '参数3',
                Mode: ParameterMode.IN,
                ParamType: ParameterType.Boolean,
                Assembly: 'mscorlib.dll',
                ClassName: 'System.Boolean',
                ParamDescription: '参数描述3'
            }
        ]
    }
};
