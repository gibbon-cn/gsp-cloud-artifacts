/**
 * 参数输入输出模式（现只支持IN）
 */
export enum ParameterMode {
    IN
    // OUT,
    // INOUT
}

export const ParameterModes: Array<{text: string, value: ParameterMode}> = [
    { text: 'IN', value: ParameterMode.IN }
    // { text: 'OUT', value: ParameterMode.OUT },
    // { text: 'INOUT', value: ParameterMode.INOUT }
];
