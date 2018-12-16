var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_1) {
                var EndEvent = /** @class */ (function (_super) {
                    __extends(EndEvent, _super);
                    function EndEvent(model) {
                        return _super.call(this, model) || this;
                    }
                    EndEvent.prototype.getShowableProperty = function () {
                        return ["ClrTypeID", "Id", "Name"];
                    };
                    return EndEvent;
                }(inspur.gsp.pmf.bpmn.model.EndEvent));
                model_1.EndEvent = EndEvent;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_2) {
                var CompletionStrategyEx = /** @class */ (function (_super) {
                    __extends(CompletionStrategyEx, _super);
                    function CompletionStrategyEx(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.CompletionStrategyEx";
                        _this.participantCoefficientSet = new Array();
                        _this.workitemCoefficientSet = new Array();
                        return _this;
                    }
                    CompletionStrategyEx.prototype.NewInstance = function () {
                        return new CompletionStrategyEx(this.Model);
                    };
                    Object.defineProperty(CompletionStrategyEx.prototype, "ParticipantCoefficientSet", {
                        get: function () { return this.participantCoefficientSet; },
                        set: function (value) { this.participantCoefficientSet = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(CompletionStrategyEx.prototype, "WorkitemCoefficientSet", {
                        get: function () { return this.workitemCoefficientSet; },
                        set: function (value) { this.workitemCoefficientSet = value; },
                        enumerable: true,
                        configurable: true
                    });
                    CompletionStrategyEx.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                    };
                    CompletionStrategyEx.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        var pCoefficientElements = [];
                        if (this.ParticipantCoefficientSet !== null) {
                            this.ParticipantCoefficientSet.forEach(function (item) {
                                pCoefficientElements.push(item.ConvertToJsonObject());
                            });
                        }
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'ParticipantCoefficientSets', pCoefficientElements);
                        var wCoefficientElements = [];
                        if (this.WorkitemCoefficientSet !== null) {
                            this.WorkitemCoefficientSet.forEach(function (item) {
                                wCoefficientElements.push(item.ConvertToJsonObject());
                            });
                        }
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'WorkitemCoefficientSets', wCoefficientElements);
                        return obj;
                    };
                    CompletionStrategyEx.prototype.LoadFromJsonObject = function (obj) {
                        var _this = this;
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        var pCoefficientElements = obj.ParticipantCoefficientSets;
                        if (pCoefficientElements !== null) {
                            pCoefficientElements.forEach(function (item) {
                                var pCoefficient = new model_2.ParticipantCoefficient(_this.Model);
                                pCoefficient.LoadFromJsonObject(item);
                                _this.ParticipantCoefficientSet.push(pCoefficient);
                            });
                        }
                        var wCoefficientElements = obj.WorkitemCoefficientSets;
                        if (wCoefficientElements) {
                            wCoefficientElements.forEach(function (item) {
                                var wCoefficient = new model_2.WorkitemCoefficient(_this.Model);
                                wCoefficient.LoadFromJsonObject(item);
                                _this.WorkitemCoefficientSet.push(wCoefficient);
                            });
                        }
                    };
                    return CompletionStrategyEx;
                }(gsp.pmf.bpmn.model.ExtensionElement));
                model_2.CompletionStrategyEx = CompletionStrategyEx;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_3) {
                var ParticipantCoefficient = /** @class */ (function (_super) {
                    __extends(ParticipantCoefficient, _super);
                    function ParticipantCoefficient(model, id, name, code, type, mustCompleted, coefficient) {
                        var _this = _super.call(this, model) || this;
                        _this.participantId = id;
                        _this.participantName = name;
                        _this.participantCode = code;
                        _this.participantType = type;
                        _this.mustCompleted = mustCompleted;
                        _this.coefficient = coefficient;
                        return _this;
                    }
                    Object.defineProperty(ParticipantCoefficient.prototype, "ParticipantId", {
                        //序列化内容
                        get: function () { return this.participantId; },
                        set: function (value) { this.participantId = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ParticipantCoefficient.prototype, "ParticipantName", {
                        get: function () { return this.participantName; },
                        set: function (value) { this.participantName = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ParticipantCoefficient.prototype, "ParticipantCode", {
                        get: function () { return this.participantCode; },
                        set: function (value) { this.participantCode = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ParticipantCoefficient.prototype, "ParticipantType", {
                        get: function () { return this.participantType; },
                        set: function (value) { this.participantType = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ParticipantCoefficient.prototype, "MustCompleted", {
                        get: function () { return this.mustCompleted; },
                        set: function (value) { this.mustCompleted = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ParticipantCoefficient.prototype, "Coefficient", {
                        get: function () { return this.coefficient; },
                        set: function (value) { this.coefficient = value; },
                        enumerable: true,
                        configurable: true
                    });
                    ParticipantCoefficient.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                    };
                    ParticipantCoefficient.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'ParticipantId', this.ParticipantId);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'ParticipantName', this.ParticipantName);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'ParticipantCode', this.ParticipantCode);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'ParticipantType', this.ParticipantType);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'MustCompleted', this.MustCompleted);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Coefficient', this.Coefficient);
                        return obj;
                    };
                    ParticipantCoefficient.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.ParticipantId = obj.ParticipantId;
                        this.ParticipantCode = obj.ParticipantCode;
                        this.ParticipantName = obj.ParticipantName;
                        this.ParticipantType = obj.ParticipantType;
                        this.MustCompleted = obj.MustCompleted;
                        this.Coefficient = obj.Coefficient;
                    };
                    return ParticipantCoefficient;
                }(gsp.pmf.bpmn.model.MexElement));
                model_3.ParticipantCoefficient = ParticipantCoefficient;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_4) {
                var WorkitemCoefficient = /** @class */ (function (_super) {
                    __extends(WorkitemCoefficient, _super);
                    function WorkitemCoefficient(model) {
                        return _super.call(this, model) || this;
                    }
                    Object.defineProperty(WorkitemCoefficient.prototype, "Coefficient", {
                        get: function () { return this.coefficient; },
                        set: function (value) { this.coefficient = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WorkitemCoefficient.prototype, "WorkitemCoeff", {
                        get: function () { return this.workitemCoeff; },
                        set: function (value) { this.workitemCoeff = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WorkitemCoefficient.prototype, "AttrName", {
                        get: function () { return this.attrName; },
                        set: function (value) { this.attrName = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(WorkitemCoefficient.prototype, "AttrValue", {
                        get: function () { return this.attrValue; },
                        set: function (value) { this.attrValue = value; },
                        enumerable: true,
                        configurable: true
                    });
                    WorkitemCoefficient.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                    };
                    WorkitemCoefficient.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Coefficient', this.Coefficient);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'WorkitemCoeff', this.WorkitemCoeff);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'AttrName', this.AttrName);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'AttrValue', this.AttrValue);
                        return obj;
                    };
                    WorkitemCoefficient.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.Coefficient = obj.Coefficient;
                        this.WorkitemCoeff = obj.WorkitemCoeff;
                        this.AttrName = obj.AttrName;
                        this.AttrValue = obj.AttrValue;
                    };
                    return WorkitemCoefficient;
                }(gsp.pmf.bpmn.model.MexElement));
                model_4.WorkitemCoefficient = WorkitemCoefficient;
                var CoefficientType;
                (function (CoefficientType) {
                    /// <summary>通过</summary>
                    CoefficientType[CoefficientType["\u901A\u8FC7"] = 0] = "\u901A\u8FC7";
                    /// <summary>不通过</summary>
                    CoefficientType[CoefficientType["\u4E0D\u901A\u8FC7"] = 1] = "\u4E0D\u901A\u8FC7";
                })(CoefficientType = model_4.CoefficientType || (model_4.CoefficientType = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_5) {
                var ConclusionItem = /** @class */ (function (_super) {
                    __extends(ConclusionItem, _super);
                    function ConclusionItem(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.ConclusionItem";
                        _this.IsDefault = false;
                        _this.Enable = false;
                        return _this;
                    }
                    ConclusionItem.prototype.NewInstance = function () {
                        return new ConclusionItem(this.Model);
                    };
                    ConclusionItem.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                    };
                    ConclusionItem.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Code", this.Code);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "DisplayName", this.DisplayName);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "FlowDirection", this.FlowDirection);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "IsDefault", this.IsDefault);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Enable", this.Enable);
                        return obj;
                    };
                    ConclusionItem.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.Code = obj.Code;
                        this.DisplayName = obj.DisplayName;
                        this.FlowDirection = obj.FlowDirection;
                        this.IsDefault = obj.IsDefault;
                        this.Enable = obj.Enable;
                    };
                    return ConclusionItem;
                }(gsp.pmf.bpmn.model.ExtensionElement));
                model_5.ConclusionItem = ConclusionItem;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_6) {
                var ExecuteForm = /** @class */ (function (_super) {
                    __extends(ExecuteForm, _super);
                    function ExecuteForm(model, id, name, actualParameters) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.ExecuteForm";
                        _this.id = id;
                        _this.name = name;
                        _this.actualParameters = actualParameters;
                        return _this;
                    }
                    ExecuteForm.prototype.NewInstance = function () {
                        return new ExecuteForm(this.Model);
                    };
                    Object.defineProperty(ExecuteForm.prototype, "FormType", {
                        get: function () {
                            return this.formtype;
                        },
                        set: function (value) {
                            this.formtype = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ExecuteForm.prototype, "Id", {
                        get: function () { return this.id; },
                        set: function (value) { this.id = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ExecuteForm.prototype, "Name", {
                        get: function () { return this.name; },
                        set: function (value) { this.name = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ExecuteForm.prototype, "CompontentId", {
                        get: function () { return this._componentId; },
                        set: function (value) { this._componentId = value; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ExecuteForm.prototype, "ActualParameters", {
                        get: function () {
                            if (this.actualParameters === null)
                                this.actualParameters = new Array();
                            return this.actualParameters;
                        },
                        set: function (value) { this.actualParameters = value; },
                        enumerable: true,
                        configurable: true
                    });
                    ExecuteForm.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                        this.FormType = null;
                        this.Id = null;
                        this.Name = null;
                        this.ActualParameters = [];
                    };
                    ExecuteForm.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "FormType", this.FormType);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Id", this.Id);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                        var actualParametersElements = [];
                        if (this.ActualParameters !== null && this.ActualParameters.length > 0) {
                            this.ActualParameters.forEach(function (item) {
                                actualParametersElements.push(item.ConvertToJsonObject());
                            });
                        }
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "WFActualParameters", actualParametersElements);
                        return obj;
                    };
                    ExecuteForm.prototype.LoadFromJsonObject = function (obj) {
                        var _this = this;
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.FormType = obj.FormType;
                        this.Id = obj.Id;
                        this.Name = obj.Name;
                        var actualParameters = obj.WFActualParameters;
                        if (actualParameters !== null && actualParameters.length > 0) {
                            actualParameters.forEach(function (item) {
                                var actualParameter = new model_6.WFActualParameter(_this.Model);
                                actualParameter.LoadFromJsonObject(item);
                                _this.ActualParameters.push(actualParameter);
                            });
                        }
                    };
                    return ExecuteForm;
                }(gsp.pmf.bpmn.model.ExtensionElement));
                model_6.ExecuteForm = ExecuteForm;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_7) {
                var WFExtensionElement = /** @class */ (function (_super) {
                    __extends(WFExtensionElement, _super);
                    function WFExtensionElement(model, id, name) {
                        var _this = _super.call(this, model) || this;
                        _this.ExtendedAttributes = {};
                        _this.Id = id;
                        _this.Name = name;
                        return _this;
                    }
                    WFExtensionElement.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                        this.ExtendedAttributes = {};
                    };
                    WFExtensionElement.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Id", this.Id);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Code", this.Code);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Description", this.Description);
                        var extAttributeElements = [];
                        for (var key in this.ExtendedAttributes) {
                            var obj_1 = {};
                            gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj_1, "Name", key);
                            gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj_1, "Value", this.ExtendedAttributes[key]);
                            extAttributeElements.push(obj_1);
                        }
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ExtendedAttributes", extAttributeElements);
                        if (this.GetMexExtensionElements4ConvertTo().length > 0) {
                            var mexJsonArray_1 = [];
                            this.GetMexExtensionElements4ConvertTo().forEach(function (value) {
                                mexJsonArray_1.push(value.ConvertToJsonObject());
                            });
                            gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "MexExtensionElements", mexJsonArray_1);
                        }
                        return obj;
                    };
                    WFExtensionElement.prototype.LoadFromJsonObject = function (obj) {
                        var _this = this;
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.Id = obj.Id;
                        this.Code = obj.Code;
                        this.Name = obj.Name;
                        this.Description = obj.Description;
                        var extAttributeElements = obj.ExtendedAttributes;
                        if (extAttributeElements.length > 0) {
                            extAttributeElements.forEach(function (item) {
                                _this.ExtendedAttributes[item.Name] = item.Value;
                            });
                        }
                        var mexJsonArray = obj.MexExtensionElements;
                        if (mexJsonArray.length > 0) {
                            var list_1 = new Array();
                            mexJsonArray.forEach(function (item) {
                                var mexExtElementObj = gsp.pmf.bpmn.model.BpmnModelHelper.GetElementType(item.ClrTypeID);
                                if (mexExtElementObj) {
                                    mexExtElementObj.LoadFromJsonObject(item);
                                    list_1.push(mexExtElementObj);
                                }
                            });
                            this.SetMexExtensionElements4LoadFrom(list_1);
                        }
                    };
                    WFExtensionElement.prototype.GetMexExtensionElements4ConvertTo = function () {
                        return [];
                    };
                    WFExtensionElement.prototype.SetMexExtensionElements4LoadFrom = function (list) {
                    };
                    WFExtensionElement.prototype.GetExtendedAttributes = function () {
                        return this.ExtendedAttributes;
                    };
                    return WFExtensionElement;
                }(gsp.pmf.bpmn.model.ExtensionElement));
                model_7.WFExtensionElement = WFExtensionElement;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
/// <reference path="./WFExtensionElement.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_8) {
                var Tool = /** @class */ (function (_super) {
                    __extends(Tool, _super);
                    function Tool(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.Tool";
                        _this.ActualParameters = new Array();
                        _this.Execution = model_8.ExecutionType.SYNCHRONOUS;
                        _this.AsyncCallBackType = model_8.AsyncCallBackType.NO;
                        _this.Time = model_8.ToolTime.UNDEFINITION;
                        return _this;
                    }
                    Tool.prototype.NewInstance = function () {
                        return new Tool(this.Model);
                    };
                    Tool.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                    };
                    Tool.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        var actualParametersElements = [];
                        if (this.ActualParameters !== null && this.ActualParameters.length > 0) {
                            this.ActualParameters.forEach(function (item) {
                                actualParametersElements.push(item.ConvertToJsonObject());
                            });
                        }
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "WFActualParameters", actualParametersElements);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Execution', this.Execution);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'AsyncCallBackType', this.AsyncCallBackType);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Time', this.Time);
                        return obj;
                    };
                    Tool.prototype.LoadFromJsonObject = function (obj) {
                        var _this = this;
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        var actualParameters = obj.ActualParameters;
                        if (actualParameters !== null && actualParameters.length > 0) {
                            actualParameters.forEach(function (item) {
                                var actualParameter = new model_8.WFActualParameter(_this.Model);
                                actualParameter.LoadFromJsonObject(item);
                                _this.ActualParameters.push(actualParameter);
                            });
                        }
                        this.Execution = obj.Execution;
                        this.AsyncCallBackType = obj.AsyncCallBackType;
                        this.Time = obj.Time;
                    };
                    return Tool;
                }(model_8.WFExtensionElement));
                model_8.Tool = Tool;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_9) {
                var AssignmentStrategyDef = /** @class */ (function (_super) {
                    __extends(AssignmentStrategyDef, _super);
                    //undo操作临时clone方法
                    function AssignmentStrategyDef(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.AssignmentStrategy";
                        _this.MexTag = 'wf.ManualActivity';
                        return _this;
                    }
                    AssignmentStrategyDef.prototype.NewInstance = function () {
                        return new AssignmentStrategyDef(this.Model);
                    };
                    AssignmentStrategyDef.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "MexTag", this.MexTag);
                        return obj;
                    };
                    AssignmentStrategyDef.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.MexTag = obj.MexTag;
                    };
                    return AssignmentStrategyDef;
                }(inspur.gsp.pmf.bpmn.model.ExtensionElement));
                model_9.AssignmentStrategyDef = AssignmentStrategyDef;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new AssignmentStrategyDef(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
                // inspur.gsp.pmf.bpmn.designer.BpmnDesignerHelper.RegisterElementType(new AssignmentStrategyDef(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_10) {
                var ManualActivity = /** @class */ (function (_super) {
                    __extends(ManualActivity, _super);
                    function ManualActivity(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.ManualActivity";
                        _this.ParticipantSchemes = new Array();
                        return _this;
                    }
                    //undo操作临时clone方法
                    ManualActivity.prototype.clone = function () {
                        var manualActivity = new ManualActivity(this.Model);
                        //manualActivity.Id = this.Id;
                        //manualActivity.Name = this.Name;
                        return manualActivity;
                    };
                    ManualActivity.prototype.getShowableProperty = function () {
                        return ["ClrTypeID", "Id", "Name"];
                    };
                    ManualActivity.prototype.NewInstance = function () {
                        return new ManualActivity(this.Model);
                    };
                    ManualActivity.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                        this.ParticipantSchemes = new Array();
                    };
                    ManualActivity.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        return obj;
                    };
                    ManualActivity.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                    };
                    ManualActivity.prototype.GetExtensionElements4ConvertTo = function () {
                        var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                        if (this.ParticipantSchemes != null) {
                            for (var scheme in this.ParticipantSchemes) {
                                this.ParticipantSchemes[scheme].MexTag = ManualActivity.MEXTAG;
                                list.push(this.ParticipantSchemes[scheme]);
                            }
                        }
                        return list;
                    };
                    ManualActivity.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                        _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                        for (var extEle in extensionElements) {
                            if (extensionElements[extEle].MexTag !== ManualActivity.MEXTAG)
                                continue;
                            switch (extensionElements[extEle].ClrTypeID) {
                                case 'wf.ParticipantScheme':
                                    this.ParticipantSchemes.push(extensionElements[extEle]);
                                    break;
                                default:
                                    break;
                            }
                        }
                    };
                    ManualActivity.MEXTAG = 'wf.ManualActivity';
                    return ManualActivity;
                }(inspur.gsp.pmf.bpmn.model.UserTask));
                model_10.ManualActivity = ManualActivity;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new ManualActivity(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
                //inspur.gsp.pmf.bpmn.designer.BpmnDesignerHelper.RegisterElementType(new ManualActivity(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model) {
                var AsyncCallBackType;
                (function (AsyncCallBackType) {
                    // 不回调
                    AsyncCallBackType[AsyncCallBackType["NO"] = 0] = "NO";
                    // 默认回调
                    AsyncCallBackType[AsyncCallBackType["DEFAULT"] = 1] = "DEFAULT";
                })(AsyncCallBackType = model.AsyncCallBackType || (model.AsyncCallBackType = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model) {
                var BizActivity = /** @class */ (function () {
                    function BizActivity() {
                        this.Conclusions = new Array();
                        this.Tools = new Array();
                        this.BizParameters = new Array();
                    }
                    return BizActivity;
                }());
                model.BizActivity = BizActivity;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model) {
                var ExcuteWorkItemMode;
                (function (ExcuteWorkItemMode) {
                    /// <summary>
                    /// 串行
                    /// </summary>
                    ExcuteWorkItemMode[ExcuteWorkItemMode["Sequential"] = 0] = "Sequential";
                    /// <summary>
                    /// 并行
                    /// </summary>
                    ExcuteWorkItemMode[ExcuteWorkItemMode["Parallel"] = 1] = "Parallel";
                })(ExcuteWorkItemMode = model.ExcuteWorkItemMode || (model.ExcuteWorkItemMode = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model) {
                var ExecutionType;
                (function (ExecutionType) {
                    // 同步
                    ExecutionType[ExecutionType["SYNCHRONOUS"] = 0] = "SYNCHRONOUS";
                    // 异步
                    ExecutionType[ExecutionType["ASYNCHRONOUS"] = 1] = "ASYNCHRONOUS";
                })(ExecutionType = model.ExecutionType || (model.ExecutionType = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model) {
                var FlowDirection;
                (function (FlowDirection) {
                    // 正向
                    FlowDirection[FlowDirection["Forward"] = 0] = "Forward";
                    // 反向
                    FlowDirection[FlowDirection["Opposite"] = 1] = "Opposite";
                    // 中止
                    FlowDirection[FlowDirection["Abort"] = 2] = "Abort";
                })(FlowDirection = model.FlowDirection || (model.FlowDirection = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model) {
                var ToolTime;
                (function (ToolTime) {
                    ///<summary>流程实例预警启动事件</summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_ALARM"] = 0] = "PROCESSINSTANCE_ALARM";
                    ///<summary>流程实例超时事件</summary> 
                    ToolTime[ToolTime["PROCESSINSTANCE_TIMEOUT"] = 1] = "PROCESSINSTANCE_TIMEOUT";
                    /// <summary> 过程实例已经异常退出事件 </summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_ABORT"] = 2] = "PROCESSINSTANCE_ABORT";
                    /// <summary> 过程实例已经完成事件 </summary>  
                    ToolTime[ToolTime["PROCESSINSTANCE_COMPLETE"] = 3] = "PROCESSINSTANCE_COMPLETE";
                    /// <summary> 过程实例已经创建事件 </summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_CREATE"] = 4] = "PROCESSINSTANCE_CREATE";
                    /// <summary> 过程实例已经删除事件 </summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_DELETE"] = 5] = "PROCESSINSTANCE_DELETE";
                    /// <summary> 过程实例已经暂停事件 </summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_RESUME"] = 6] = "PROCESSINSTANCE_RESUME";
                    /// <summary> 过程实例已经启动事件 </summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_START"] = 7] = "PROCESSINSTANCE_START";
                    /// <summary> 过程实例已经挂起事件 </summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_SUSPEND"] = 8] = "PROCESSINSTANCE_SUSPEND";
                    /// <summary> 过程实例已经中止事件 </summary>
                    ToolTime[ToolTime["PROCESSINSTANCE_TERMINATE"] = 9] = "PROCESSINSTANCE_TERMINATE";
                    /// <summary> 活动实例已经异常退出事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_ABORTED"] = 10] = "ACTIVITY_ABORTED";
                    /// <summary> 活动实例已经完成事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_COMPLETED"] = 11] = "ACTIVITY_COMPLETED";
                    /// <summary> 活动实例已经创建事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_CREATED"] = 12] = "ACTIVITY_CREATED";
                    /// <summary> 活动实例已经暂停事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_RESUMED"] = 13] = "ACTIVITY_RESUMED";
                    /// <summary> 活动实例已经启动事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_STARTED"] = 14] = "ACTIVITY_STARTED";
                    /// <summary> 活动实例已经停止事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_STOPPED"] = 15] = "ACTIVITY_STOPPED";
                    /// <summary> 活动实例已经挂起事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_SUSPENDED"] = 16] = "ACTIVITY_SUSPENDED";
                    /// <summary> 活动实例已经中止事件 </summary>
                    ToolTime[ToolTime["ACTIVITY_TERMINATED"] = 17] = "ACTIVITY_TERMINATED";
                    /// <summary> 工作项已经异常退出事件 </summary>
                    ToolTime[ToolTime["WORKITEM_ABORTED"] = 18] = "WORKITEM_ABORTED";
                    /// <summary> 工作项已经分配事件 </summary>
                    ToolTime[ToolTime["WORKITEM_ASSIGNED"] = 19] = "WORKITEM_ASSIGNED";
                    /// <summary> 工作项已经完成事件 </summary>
                    ToolTime[ToolTime["WORKITEM_COMPLETED"] = 20] = "WORKITEM_COMPLETED";
                    /// <summary> 工作项已经创建事件 </summary>
                    ToolTime[ToolTime["WORKITEM_CREATED"] = 21] = "WORKITEM_CREATED";
                    /// <summary> 工作项已经暂停事件 </summary>
                    ToolTime[ToolTime["WORKITEM_RESUMED"] = 22] = "WORKITEM_RESUMED";
                    /// <summary> 工作项已经启动事件 </summary>
                    ToolTime[ToolTime["WORKITEM_STARTED"] = 23] = "WORKITEM_STARTED";
                    /// <summary> 工作项已经停止事件 </summary>
                    ToolTime[ToolTime["WORKITEM_STOPPED"] = 24] = "WORKITEM_STOPPED";
                    /// <summary> 工作项已经挂起事件 </summary>
                    ToolTime[ToolTime["WORKITEM_SUSPENDED"] = 25] = "WORKITEM_SUSPENDED";
                    /// <summary> 工作项已经终止事件 </summary>
                    ToolTime[ToolTime["WORKITEM_TERMINATED"] = 26] = "WORKITEM_TERMINATED";
                    /// <summary> 工作项预警启动事件 </summary>
                    ToolTime[ToolTime["WORKITEM_ALARM"] = 27] = "WORKITEM_ALARM";
                    /// <summary> 工作项超时事件</summary>
                    ToolTime[ToolTime["WORKITEM_TIMEOUT"] = 28] = "WORKITEM_TIMEOUT";
                    /// <summary> 未定义</summary>
                    ToolTime[ToolTime["UNDEFINITION"] = 29] = "UNDEFINITION";
                })(ToolTime = model.ToolTime || (model.ToolTime = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_11) {
                var FormalParameter = /** @class */ (function (_super) {
                    __extends(FormalParameter, _super);
                    function FormalParameter(model, id, code, name, desc, index, datatype, mode) {
                        var _this = _super.call(this, model) || this;
                        _this.Id = id;
                        _this.Code = code;
                        _this.Name = name;
                        _this.Description = desc;
                        _this.index = index;
                        _this.DataType = datatype;
                        _this.Mode = mode;
                        return _this;
                    }
                    Object.defineProperty(FormalParameter.prototype, "Index", {
                        get: function () {
                            return this.index;
                        },
                        set: function (index) {
                            this.index = index;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    FormalParameter.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                    };
                    FormalParameter.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Id", this.Id);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Code", this.Code);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Description", this.Description);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "index", this.index);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "DataType", this.DataType.ConvertToJsonObject());
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Mode", this.Mode);
                        return obj;
                    };
                    FormalParameter.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.Id = obj.Id;
                        this.Name = obj.Name;
                        this.index = obj.index;
                        this.Description = obj.Description;
                        this.Code = obj.Code;
                        var type = new gsp.pmf.bpmn.model.DataType(this.Model);
                        type.LoadFromJsonObject(obj.DataType);
                        this.DataType = type;
                        this.Mode = obj.Mode;
                    };
                    return FormalParameter;
                }(gsp.pmf.bpmn.model.MexElement));
                model_11.FormalParameter = FormalParameter;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model) {
                var ParameterMode;
                (function (ParameterMode) {
                    /// <summary>
                    /// 传入参数
                    /// </summary>
                    ParameterMode[ParameterMode["IN"] = 0] = "IN";
                    /// <summary>
                    /// 传出参数
                    /// </summary>
                    ParameterMode[ParameterMode["OUT"] = 1] = "OUT";
                    /// <summary>
                    /// 传入传出参数
                    /// </summary>
                    ParameterMode[ParameterMode["INOUT"] = 2] = "INOUT";
                })(ParameterMode = model.ParameterMode || (model.ParameterMode = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_12) {
                var WFActualParameter = /** @class */ (function (_super) {
                    __extends(WFActualParameter, _super);
                    function WFActualParameter(model, text, name) {
                        var _this = _super.call(this, model) || this;
                        _this.Text = text;
                        _this.DisplayName = name;
                        return _this;
                    }
                    WFActualParameter.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                        this.Text = '';
                        this.DisplayName = '';
                    };
                    WFActualParameter.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "DisplayName", this.DisplayName);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Text", this.Text);
                        return obj;
                    };
                    WFActualParameter.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.DisplayName = obj.DisplayName;
                        this.Text = obj.Text;
                    };
                    return WFActualParameter;
                }(gsp.pmf.bpmn.model.MexElement));
                model_12.WFActualParameter = WFActualParameter;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_13) {
                var Participant = /** @class */ (function (_super) {
                    __extends(Participant, _super);
                    function Participant(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.Participant";
                        _this.MexTag = 'wf.Participant';
                        _this.extensionElements = [];
                        return _this;
                    }
                    Participant.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ParserId", this.ParserId);
                        return obj;
                    };
                    Participant.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.ParserId = obj.ParserId;
                    };
                    Participant.prototype.GetExtensionElements4ConvertTo = function () {
                        var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                        for (var item in this.extensionElements) {
                            this.extensionElements[item].MexTag = this.MexTag;
                            list.push(this.extensionElements[item]);
                        }
                        return list;
                    };
                    Participant.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                        _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                        for (var item in this.extensionElements) {
                            if (extensionElements[item].MexTag === this.MexTag)
                                this.extensionElements.push(extensionElements[item]);
                        }
                    };
                    Participant.prototype.GetExtensionElements = function () {
                        return this.extensionElements;
                    };
                    return Participant;
                }(inspur.gsp.pmf.bpmn.model.HumanPerformer));
                model_13.Participant = Participant;
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_14) {
                var ParticipantScheme = /** @class */ (function (_super) {
                    __extends(ParticipantScheme, _super);
                    function ParticipantScheme(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.ParticipantScheme";
                        _this.MexTag = 'wf.ManualActivity';
                        return _this;
                    }
                    ParticipantScheme.prototype.NewInstance = function () {
                        return new ParticipantScheme(this.Model);
                    };
                    ParticipantScheme.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Id", this.Id);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Name", this.Name);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "Performers", this.Performers);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ExclusionPerformers", this.ExclusionPerformers);
                        return obj;
                    };
                    ParticipantScheme.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.Id = obj.Id;
                        this.Name = obj.Name;
                        this.Performers = obj.Performers;
                        this.ExclusionPerformers = obj.ExclusionPerformers;
                    };
                    ParticipantScheme.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                        this.Id = '';
                        this.Name = '';
                    };
                    return ParticipantScheme;
                }(gsp.pmf.bpmn.model.ExtensionElement));
                model_14.ParticipantScheme = ParticipantScheme;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new ParticipantScheme(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
/// <reference path="./Participant.ts" />
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_15) {
                var UserParticipant = /** @class */ (function (_super) {
                    __extends(UserParticipant, _super);
                    function UserParticipant(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.UserParticipant";
                        _this.OrgType = 'Sys';
                        return _this;
                    }
                    UserParticipant.prototype.NewInstance = function () {
                        return new UserParticipant(this.Model);
                    };
                    UserParticipant.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "OrgId", this.OrgId);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "OrgName", this.OrgName);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "OrgType", this.OrgType);
                        return obj;
                    };
                    UserParticipant.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.OrgId = obj.OrgId;
                        this.OrgName = obj.OrgName;
                        this.OrgType = obj.OrgType;
                    };
                    return UserParticipant;
                }(model_15.Participant));
                model_15.UserParticipant = UserParticipant;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new UserParticipant(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_16) {
                var StartActivity = /** @class */ (function (_super) {
                    __extends(StartActivity, _super);
                    function StartActivity(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.StartActivity";
                        return _this;
                    }
                    //undo操作临时clone方法
                    StartActivity.prototype.clone = function () {
                        var startActivity = new StartActivity(this.Model);
                        startActivity.Id = this.Id;
                        startActivity.Name = this.Name;
                        return startActivity;
                    };
                    StartActivity.prototype.getShowableProperty = function () {
                        return ["ClrTypeID", "Id", "Name"];
                    };
                    StartActivity.prototype.NewInstance = function () {
                        return new StartActivity(this.Model);
                    };
                    StartActivity.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        return obj;
                    };
                    StartActivity.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                    };
                    return StartActivity;
                }(inspur.gsp.pmf.bpmn.model.StartEvent));
                model_16.StartActivity = StartActivity;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new StartActivity(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
                //inspur.gsp.pmf.bpmn.designer.BpmnDesignerHelper.RegisterElementType(new StartActivity(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_17) {
                var UserActivity = /** @class */ (function (_super) {
                    __extends(UserActivity, _super);
                    function UserActivity(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.UserActivity";
                        _this.ParticipantSchemes = new Array();
                        _this.BizActivityID = "FinancialAudit";
                        _this.BizActivityName = "财务稽核";
                        return _this;
                    }
                    UserActivity.prototype.NewInstance = function () {
                        return new UserActivity(this.Model);
                    };
                    UserActivity.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                        this.ParticipantSchemes = new Array();
                    };
                    UserActivity.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'BizActivityID', this.BizActivityID);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'BizActivityName', this.BizActivityName);
                        return obj;
                    };
                    UserActivity.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.BizActivityID = obj.BizActivityID;
                        this.BizActivityName = obj.BizActivityName;
                    };
                    UserActivity.prototype.GetExtensionElements4ConvertTo = function () {
                        var list = _super.prototype.GetExtensionElements4ConvertTo.call(this);
                        if (this.ParticipantSchemes != null) {
                            for (var scheme in this.ParticipantSchemes) {
                                this.ParticipantSchemes[scheme].MexTag = UserActivity.MEXTAG;
                                list.push(this.ParticipantSchemes[scheme]);
                            }
                        }
                        return list;
                    };
                    UserActivity.prototype.SetExtensionElements4LoadFrom = function (extensionElements) {
                        _super.prototype.SetExtensionElements4LoadFrom.call(this, extensionElements);
                        for (var extEle in extensionElements) {
                            if (extensionElements[extEle].MexTag !== UserActivity.MEXTAG)
                                continue;
                            switch (extensionElements[extEle].ClrTypeID) {
                                case 'wf.ParticipantScheme':
                                    this.ParticipantSchemes.push(extensionElements[extEle]);
                                    break;
                                default:
                                    break;
                            }
                        }
                    };
                    //undo操作临时clone方法
                    UserActivity.prototype.clone = function () {
                        var userActivity = new UserActivity(this.Model);
                        return userActivity;
                    };
                    UserActivity.MEXTAG = 'wf.UserActivity';
                    return UserActivity;
                }(inspur.gsp.pmf.bpmn.model.UserTask));
                model_17.UserActivity = UserActivity;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new UserActivity(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
                //inspur.gsp.pmf.bpmn.designer.BpmnDesignerHelper.RegisterElementType(new ManualActivity(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var wf;
        (function (wf) {
            var model;
            (function (model_18) {
                var Notification = /** @class */ (function (_super) {
                    __extends(Notification, _super);
                    function Notification(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "wf.Notification";
                        /// <summary>消息的发送方式：同步或者异步</summary>
                        _this.Execution = model_18.ExecutionType.SYNCHRONOUS;
                        return _this;
                    }
                    Notification.prototype.NewInstance = function () {
                        return new Notification(this.Model);
                    };
                    Notification.prototype.ResetBeforeLoadFrom = function () {
                        _super.prototype.ResetBeforeLoadFrom.call(this);
                    };
                    Notification.prototype.ToString = function () {
                        return "Message[name='" + this.Name + "'" + ", content='" + this.Header + "\r\n" + this.Body + "\r\n" + this.Footer + "'" + ",receiver=" + this.Receiver + "]";
                    };
                    Notification.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Id', this.Id);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Name', this.Name);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Time', this.Time);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Condition', this.Condition);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'SenderName', this.SenderName);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Receiver', this.Receiver);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Way', this.Way);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Header', this.Header);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Body', this.Body);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Footer', this.Footer);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'SendTempAssMessage', this.SendTempAssMessage);
                        gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, 'Execution', this.Execution);
                        return obj;
                    };
                    Notification.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.Id = obj.Id;
                        this.Name = obj.Name;
                        this.Time = obj.Time;
                        this.Condition = obj.Condition;
                        this.SenderName = obj.SenderName;
                        this.Receiver = obj.Receiver;
                        this.Way = obj.Way;
                        this.Header = obj.Header;
                        this.Body = obj.Body;
                        this.Footer = obj.Footer;
                        this.SendTempAssMessage = obj.SendTempAssMessage;
                        this.Execution = obj.Execution;
                    };
                    return Notification;
                }(gsp.pmf.bpmn.model.ExtensionElement));
                model_18.Notification = Notification;
                var NotifyTime;
                (function (NotifyTime) {
                    ///<summary>流程实例预警启动事件</summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_ALARM"] = 0] = "PROCESSINSTANCE_ALARM";
                    ///<summary>流程实例超时事件</summary> 
                    NotifyTime[NotifyTime["PROCESSINSTANCE_TIMEOUT"] = 1] = "PROCESSINSTANCE_TIMEOUT";
                    /// <summary> 过程实例已经异常退出事件 </summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_ABORT"] = 2] = "PROCESSINSTANCE_ABORT";
                    /// <summary> 过程实例已经完成事件 </summary>  
                    NotifyTime[NotifyTime["PROCESSINSTANCE_COMPLETE"] = 3] = "PROCESSINSTANCE_COMPLETE";
                    /// <summary> 过程实例已经创建事件 </summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_CREATE"] = 4] = "PROCESSINSTANCE_CREATE";
                    /// <summary> 过程实例已经删除事件 </summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_DELETE"] = 5] = "PROCESSINSTANCE_DELETE";
                    /// <summary> 过程实例已经暂停事件 </summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_RESUME"] = 6] = "PROCESSINSTANCE_RESUME";
                    /// <summary> 过程实例已经启动事件 </summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_START"] = 7] = "PROCESSINSTANCE_START";
                    /// <summary> 过程实例已经挂起事件 </summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_SUSPEND"] = 8] = "PROCESSINSTANCE_SUSPEND";
                    /// <summary> 过程实例已经中止事件 </summary>
                    NotifyTime[NotifyTime["PROCESSINSTANCE_TERMINATE"] = 9] = "PROCESSINSTANCE_TERMINATE";
                    /// <summary> 活动实例已经异常退出事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_ABORTED"] = 10] = "ACTIVITY_ABORTED";
                    /// <summary> 活动实例已经完成事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_COMPLETED"] = 11] = "ACTIVITY_COMPLETED";
                    /// <summary> 活动实例已经创建事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_CREATED"] = 12] = "ACTIVITY_CREATED";
                    /// <summary> 活动实例已经暂停事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_RESUMED"] = 13] = "ACTIVITY_RESUMED";
                    /// <summary> 活动实例已经启动事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_STARTED"] = 14] = "ACTIVITY_STARTED";
                    /// <summary> 活动实例已经停止事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_STOPPED"] = 15] = "ACTIVITY_STOPPED";
                    /// <summary> 活动实例已经挂起事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_SUSPENDED"] = 16] = "ACTIVITY_SUSPENDED";
                    /// <summary> 活动实例已经中止事件 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_TERMINATED"] = 17] = "ACTIVITY_TERMINATED";
                    /// <summary>活动实例已经取回</summary>
                    NotifyTime[NotifyTime["ACTIVITY_RETRIEVED"] = 18] = "ACTIVITY_RETRIEVED";
                    /// <summary>活动实例从该活动取回</summary>
                    NotifyTime[NotifyTime["ACTIVITY_RETRIEVED_FROM"] = 19] = "ACTIVITY_RETRIEVED_FROM";
                    /// <summary>活动实例回退</summary>
                    NotifyTime[NotifyTime["ACTIVITY_ROLLBACK"] = 20] = "ACTIVITY_ROLLBACK";
                    /// <summary>活动实例回退到该活动 </summary>
                    NotifyTime[NotifyTime["ACTIVITY_ROLLBACK_TO"] = 21] = "ACTIVITY_ROLLBACK_TO";
                    /// <summary> 工作项已经异常退出事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_ABORTED"] = 22] = "WORKITEM_ABORTED";
                    /// <summary> 工作项已经分配事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_ASSIGNED"] = 23] = "WORKITEM_ASSIGNED";
                    /// <summary> 工作项已经完成事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_COMPLETED"] = 24] = "WORKITEM_COMPLETED";
                    /// <summary> 工作项已经创建事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_CREATED"] = 25] = "WORKITEM_CREATED";
                    /// <summary> 工作项已经暂停事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_RESUMED"] = 26] = "WORKITEM_RESUMED";
                    /// <summary> 工作项已经启动事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_STARTED"] = 27] = "WORKITEM_STARTED";
                    /// <summary> 工作项已经停止事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_STOPPED"] = 28] = "WORKITEM_STOPPED";
                    /// <summary> 工作项已经挂起事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_SUSPENDED"] = 29] = "WORKITEM_SUSPENDED";
                    /// <summary> 工作项已经终止事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_TERMINATED"] = 30] = "WORKITEM_TERMINATED";
                    /// <summary> 工作项预警启动事件 </summary>
                    NotifyTime[NotifyTime["WORKITEM_ALARM"] = 31] = "WORKITEM_ALARM";
                    /// <summary> 工作项超时事件</summary>
                    NotifyTime[NotifyTime["WORKITEM_TIMEOUT"] = 32] = "WORKITEM_TIMEOUT";
                    /// <summary> 未定义</summary>
                    NotifyTime[NotifyTime["UNDEFINITION"] = 33] = "UNDEFINITION";
                })(NotifyTime = model_18.NotifyTime || (model_18.NotifyTime = {}));
            })(model = wf.model || (wf.model = {}));
        })(wf = gsp.wf || (gsp.wf = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
//# sourceMappingURL=inspur.gsp.wf.model.js.map