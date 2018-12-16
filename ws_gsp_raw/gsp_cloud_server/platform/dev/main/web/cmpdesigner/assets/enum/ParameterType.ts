/**
 * 构件方法参数类型
 */
export enum ParameterType {
    /**
     * 字符型
     */
    String = 'String',
    /**
     * 布尔型
     */
    Boolean = 'Boolean',
    /**
     * 整数
     */
    Integer = 'Integer',
    /**
     * 浮点数
     */
    Float = 'Float',
    /**
     * 双浮点
     */
    Double = 'Double',
    /**
     * 时间
     */
    DateTime = 'DateTime',
    /**
     * 对象类型
     */
    Object = 'Object',
    /**
     * 自定义
     */
    Custom = 'Custom'
}

export const ParameterTypes: Array<{ index: number, text: string, value: ParameterType, assembly: string, className: string }> = [
    { index: 0, text: '字符串', value: ParameterType.String, assembly: 'mscorlib.dll', className: 'System.String' },
    { index: 1, text: '布尔型', value: ParameterType.Boolean, assembly: 'mscorlib.dll', className: 'System.Boolean' },
    { index: 2, text: '整数', value: ParameterType.Integer, assembly: 'mscorlib.dll', className: 'System.Int32' },
    { index: 3, text: '浮点数', value: ParameterType.Float, assembly: 'mscorlib.dll', className: 'System.Single' },
    { index: 4, text: '双浮点数', value: ParameterType.Double, assembly: 'mscorlib.dll', className: 'System.Double' },
    { index: 5, text: '时间类型', value: ParameterType.DateTime, assembly: 'mscorlib.dll', className: 'System.DateTime' },
    { index: 6, text: '对象类型', value: ParameterType.Object, assembly: 'mscorlib.dll', className: 'System.Object' },
    { index: 7, text: '自定义类型', value: ParameterType.Custom, assembly: '', className: '' },
];
