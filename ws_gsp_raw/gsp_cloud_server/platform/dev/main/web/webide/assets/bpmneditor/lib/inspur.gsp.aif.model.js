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
        var aif;
        (function (aif) {
            var model;
            (function (model) {
                var PropertyObject = /** @class */ (function () {
                    function PropertyObject() {
                        this.readonly = false;
                        this.visible = true;
                    }
                    return PropertyObject;
                }());
                model.PropertyObject = PropertyObject;
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var model;
            (function (model_1) {
                var BeCreationProcessNode = /** @class */ (function (_super) {
                    __extends(BeCreationProcessNode, _super);
                    function BeCreationProcessNode(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "aif.Flowchart.BeCreationProcessNode";
                        _this.Name = "生单流程";
                        _this.IsForCompensation = false;
                        _this.CreationProcessId = "";
                        _this.ProcessName = "";
                        _this.ProcessMetadataID = "";
                        return _this;
                    }
                    BeCreationProcessNode.prototype.clone = function () {
                        var beCreationProcessNode = new BeCreationProcessNode(this.Model);
                        beCreationProcessNode.Id = this.Id;
                        beCreationProcessNode.Name = this.Name;
                        beCreationProcessNode.CreationProcessId = this.CreationProcessId;
                        beCreationProcessNode.IsForCompensation = this.IsForCompensation;
                        beCreationProcessNode.getShowableProperty = this.getShowableProperty;
                        beCreationProcessNode.ProcessName = this.ProcessName;
                        beCreationProcessNode.ProcessMetadataID = this.ProcessMetadataID;
                        return beCreationProcessNode;
                    };
                    BeCreationProcessNode.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.CreationProcessId = obj['CreationProcessId'];
                        this.ProcessMetadataID = obj['ProcessMetadataID'];
                        this.ProcessName = obj['ProcessName'];
                    };
                    BeCreationProcessNode.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "CreationProcessId", this.CreationProcessId);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ProcessMetadataID", this.ProcessMetadataID);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ProcessName", this.ProcessName);
                        return obj;
                    };
                    BeCreationProcessNode.prototype.NewInstance = function () {
                        return new BeCreationProcessNode(this.Model);
                    };
                    BeCreationProcessNode.prototype.getShowableProperty = function () {
                        return ["Id", "Name", "CreationProcessId", "ProcessName", "ProcessMetadataID"];
                    };
                    BeCreationProcessNode.prototype.getShowableProepertyObjects = function () {
                        var properties = [];
                        properties.push({
                            code: "Id",
                            name: "ID",
                            //description: "",
                            propertyName: "Id",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "Name",
                            name: "名称",
                            description: "这是画布中元素节点的名称",
                            propertyName: "Name",
                            propertyType: "string",
                            readonly: false,
                            visible: true
                        });
                        properties.push({
                            code: "CreationProcessId",
                            name: "CreationProcessId",
                            description: "这是生单流程的Id，其值不等同于元数据文件的Id和画布节点元素的Id",
                            propertyName: "CreationProcessId",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "ProcessName",
                            name: "生单流程",
                            description: "这是生单流程元数据的名称",
                            propertyName: "ProcessName",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "ProcessMetadataID",
                            name: "生单流程元数据ID",
                            description: "这是生单流程元数据文件的ID",
                            propertyName: "ProcessMetadataID",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        return properties;
                    };
                    return BeCreationProcessNode;
                }(inspur.gsp.pmf.bpmn.model.ServiceTask));
                model_1.BeCreationProcessNode = BeCreationProcessNode;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new BeCreationProcessNode(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var model;
            (function (model_2) {
                var BeCreationRuleNode = /** @class */ (function (_super) {
                    __extends(BeCreationRuleNode, _super);
                    function BeCreationRuleNode(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "aif.Flowchart.BeCreationRuleNode";
                        _this.IsForCompensation = false;
                        _this.Name = "生单规则";
                        _this.CreationRuleId = "";
                        _this.RuleName = "";
                        _this.RuleMetadataID = "";
                        return _this;
                    }
                    BeCreationRuleNode.prototype.clone = function () {
                        var beCreationRuleNode = new BeCreationRuleNode(this.Model);
                        beCreationRuleNode.Id = this.Id;
                        beCreationRuleNode.IsForCompensation = this.IsForCompensation;
                        beCreationRuleNode.Name = this.Name;
                        beCreationRuleNode.CreationRuleId = this.CreationRuleId;
                        beCreationRuleNode.RuleName = this.RuleName;
                        beCreationRuleNode.RuleMetadataID = this.RuleMetadataID;
                        return beCreationRuleNode;
                    };
                    BeCreationRuleNode.prototype.NewInstance = function () {
                        return new BeCreationRuleNode(this.Model);
                    };
                    BeCreationRuleNode.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "CreationRuleId", this.CreationRuleId);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "RuleMetadataID", this.RuleMetadataID);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "RuleName", this.RuleName);
                        return obj;
                    };
                    BeCreationRuleNode.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.CreationRuleId = obj['CreationRuleId'];
                        this.RuleMetadataID = obj["RuleMetadataID"];
                        this.RuleName = obj["RuleName"];
                    };
                    BeCreationRuleNode.prototype.getShowableProperty = function () {
                        return ["Id", "Name", "CreationRuleId", "RuleName", "RuleMetadataID"];
                    };
                    BeCreationRuleNode.prototype.getShowableProepertyObjects = function () {
                        var properties = [];
                        properties.push({
                            code: "Id",
                            name: "ID",
                            //description: "",
                            propertyName: "Id",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "Name",
                            name: "名称",
                            description: "这是画布中元素节点的名称",
                            propertyName: "Name",
                            propertyType: "string",
                            readonly: false,
                            visible: true
                        });
                        properties.push({
                            code: "CreationRuleId",
                            name: "CreationRuleId",
                            description: "这是生单规则的Id，其值不等同于元数据文件的Id和画布节点元素的Id",
                            propertyName: "CreationRuleId",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "RuleName",
                            name: "生单规则",
                            description: "这是生单规则元数据的名称",
                            propertyName: "RuleName",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "RuleMetadataID",
                            name: "生单规则元数据ID",
                            description: "这是生单规则元数据文件的ID",
                            propertyName: "RuleMetadataID",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        return properties;
                    };
                    return BeCreationRuleNode;
                }(inspur.gsp.pmf.bpmn.model.ServiceTask));
                model_2.BeCreationRuleNode = BeCreationRuleNode;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new BeCreationRuleNode(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var model;
            (function (model_3) {
                var BeNode = /** @class */ (function (_super) {
                    __extends(BeNode, _super);
                    function BeNode(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "aif.Flowchart.BeNode";
                        _this.BeType = "";
                        _this.Name = "业务实体";
                        _this.IsForCompensation = false;
                        _this.extensionElements = [];
                        _this.BeName = "";
                        _this.BeMetadataID = "";
                        return _this;
                    }
                    BeNode.prototype.clone = function () {
                        var beNode = new BeNode(this.Model);
                        beNode.Id = this.Id;
                        beNode.Name = this.Name;
                        beNode.BeType = this.BeType;
                        beNode.BeMetadataID = this.BeMetadataID;
                        beNode.BeName = this.BeName;
                        beNode.IsForCompensation = this.IsForCompensation;
                        beNode.extensionElements = this.extensionElements;
                        return beNode;
                    };
                    BeNode.prototype.NewInstance = function () {
                        return new BeNode(this.Model);
                    };
                    BeNode.prototype.getShowableProperty = function () {
                        return ["Id", "Name", "BeType", "BeName", "BeMetadataID", "extensionElements"];
                    };
                    BeNode.prototype.getShowableProepertyObjects = function () {
                        var properties = [];
                        properties.push({
                            code: "Id",
                            name: "ID",
                            //description: "",
                            propertyName: "Id",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "Name",
                            name: "名称",
                            description: "这是画布中元素节点的名称",
                            propertyName: "Name",
                            propertyType: "string",
                            readonly: false,
                            visible: true
                        });
                        properties.push({
                            code: "BeType",
                            name: "业务实体类型",
                            description: "这是业务实体类型，其值去业务实体元数据的Code",
                            propertyName: "BeType",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "BeName",
                            name: "业务实体名称",
                            description: "这是业务实体元数据的名称",
                            propertyName: "BeName",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "BeMetadataID",
                            name: "业务实体元数据ID",
                            description: "这是业务实体元数据文件的ID",
                            propertyName: "BeMetadataID",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "extensionElements",
                            name: "回写流程",
                            description: "这是扩展元素，对于业务实体而言，其扩展元素即为回写流程，一个业务实体的回写流程可以有若干个",
                            propertyName: "extensionElements",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        return properties;
                    };
                    BeNode.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "extensionElements", this.ConvertToJsonObject4ExtensionElements());
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "BeType", this.BeType);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "BeName", this.BeName);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "BeMetadataID", this.BeMetadataID);
                        return obj;
                    };
                    BeNode.prototype.ConvertToJsonObject4ExtensionElements = function () {
                        var list = [];
                        for (var i = 0; i < this.extensionElements.length; i++) {
                            list.push(this.extensionElements[i].ConvertToJsonObject());
                        }
                        return list;
                    };
                    BeNode.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.Id = obj.Id;
                        this.Name = obj.Name;
                        this.BeType = obj.BeType;
                        this.BeName = obj.BeName;
                        this.BeMetadataID = obj.BeMetadataID;
                        this.IsForCompensation = obj.IsForCompensation;
                        this.LoadFromJsonObject4ExtensionElements(obj.extensionElements);
                    };
                    BeNode.prototype.LoadFromJsonObject4ExtensionElements = function (obj) {
                        if (Array.isArray(obj) == false) {
                            this.extensionElements = [];
                            return;
                        }
                        for (var i = 0; i < obj.length; i++) {
                            var temp = new model_3.WritebackProcessElement(this.Model);
                            temp.LoadFromJsonObject(obj[i]);
                            this.extensionElements.push(temp);
                        }
                    };
                    return BeNode;
                }(inspur.gsp.pmf.bpmn.model.ServiceTask));
                model_3.BeNode = BeNode;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new BeNode(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var model;
            (function (model_4) {
                var EndEvent = /** @class */ (function (_super) {
                    __extends(EndEvent, _super);
                    function EndEvent(model) {
                        var _this = _super.call(this, model) || this;
                        _this.Name = "结束";
                        return _this;
                    }
                    EndEvent.prototype.getShowableProperty = function () {
                        return ["Id", "Name"];
                    };
                    EndEvent.prototype.getShowableProepertyObjects = function () {
                        var properties = [];
                        properties.push({
                            code: "Id",
                            name: "ID",
                            //description: "",
                            propertyName: "Id",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "Name",
                            name: "名称",
                            description: "这是画布中元素节点的名称",
                            propertyName: "Name",
                            propertyType: "string",
                            readonly: false,
                            visible: true
                        });
                        return properties;
                    };
                    EndEvent.prototype.NewInstance = function () {
                        return new EndEvent(this.Model);
                    };
                    EndEvent.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                    };
                    EndEvent.prototype.ConvertToJsonObject = function () {
                        return _super.prototype.ConvertToJsonObject.call(this);
                    };
                    return EndEvent;
                }(inspur.gsp.pmf.bpmn.model.EndEvent));
                model_4.EndEvent = EndEvent;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new EndEvent(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var model;
            (function (model_5) {
                var SequenceFlow = /** @class */ (function (_super) {
                    __extends(SequenceFlow, _super);
                    function SequenceFlow(model) {
                        return _super.call(this, model) || this;
                    }
                    SequenceFlow.prototype.getShowableProperty = function () {
                        return ["Id", "SourceRef", "TargetRef"];
                    };
                    SequenceFlow.prototype.getShowableProepertyObjects = function () {
                        var properties = [];
                        properties.push({
                            code: "Id",
                            name: "ID",
                            //description: "",
                            propertyName: "Id",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "SourceRef",
                            name: "源节点",
                            description: "这是源节点的名称",
                            propertyName: "SourceRef",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "TargetRef",
                            name: "目标节点",
                            description: "这是目标节点的名称",
                            propertyName: "TargetRef",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        return properties;
                    };
                    SequenceFlow.prototype.NewInstance = function () {
                        return new SequenceFlow(this.Model);
                    };
                    SequenceFlow.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                    };
                    SequenceFlow.prototype.ConvertToJsonObject = function () {
                        return _super.prototype.ConvertToJsonObject.call(this);
                    };
                    return SequenceFlow;
                }(inspur.gsp.pmf.bpmn.model.SequenceFlow));
                model_5.SequenceFlow = SequenceFlow;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new SequenceFlow(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var model;
            (function (model_6) {
                var StartEvent = /** @class */ (function (_super) {
                    __extends(StartEvent, _super);
                    function StartEvent(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "bpmn.StartEvent";
                        _this.Name = "开始";
                        return _this;
                    }
                    StartEvent.prototype.getShowableProperty = function () {
                        return ["Id", "Name"];
                    };
                    StartEvent.prototype.getShowableProepertyObjects = function () {
                        var properties = [];
                        properties.push({
                            code: "Id",
                            name: "ID",
                            //description: "",
                            propertyName: "Id",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "Name",
                            name: "名称",
                            description: "这是画布中元素节点的名称",
                            propertyName: "Name",
                            propertyType: "string",
                            readonly: false,
                            visible: true
                        });
                        return properties;
                    };
                    StartEvent.prototype.NewInstance = function () {
                        return new StartEvent(this.Model);
                    };
                    StartEvent.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                    };
                    StartEvent.prototype.ConvertToJsonObject = function () {
                        return _super.prototype.ConvertToJsonObject.call(this);
                    };
                    return StartEvent;
                }(inspur.gsp.pmf.bpmn.model.StartEvent));
                model_6.StartEvent = StartEvent;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new StartEvent(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var model;
            (function (model_7) {
                var WritebackProcessElement = /** @class */ (function (_super) {
                    __extends(WritebackProcessElement, _super);
                    function WritebackProcessElement(model) {
                        var _this = _super.call(this, model) || this;
                        _this.ClrTypeID = "aif.Flowchart.WritebackProcess";
                        _this.ProcessId = "";
                        _this.MexTag = "aif.Flowchart.WritebackProcess";
                        _this.ProcessName = "";
                        _this.ProcessMetadataID = "";
                        return _this;
                    }
                    WritebackProcessElement.prototype.getShowableProperty = function () {
                        return ["ProcessId", "MexTag", "ProcessName", "ProcessMetadataID"];
                    };
                    WritebackProcessElement.prototype.getShowableProepertyObjects = function () {
                        var properties = [];
                        properties.push({
                            code: "ProcessId",
                            name: "ID",
                            description: "这是回写流程的Id",
                            propertyName: "ProcessId",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "ProcessName",
                            name: "回写流程",
                            description: "这是回写流程元数据的名称",
                            propertyName: "ProcessName",
                            propertyType: "string",
                            readonly: false,
                            visible: true
                        });
                        properties.push({
                            code: "MexTag",
                            name: "扩展标签",
                            //description: "这是生单流程的Id，其值不等同于元数据文件的Id和画布节点元素的Id",
                            propertyName: "MexTag",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "ProcessMetadataID",
                            name: "回写流程元数据ID",
                            description: "这是回写流程元数据的ID",
                            propertyName: "ProcessMetadataID",
                            propertyType: "modal",
                            readonly: true,
                            visible: true
                        });
                        properties.push({
                            code: "ProcessMetadataID",
                            name: "生单流程元数据ID",
                            description: "这是生单流程元数据文件的ID",
                            propertyName: "ProcessMetadataID",
                            propertyType: "string",
                            readonly: true,
                            visible: true
                        });
                        return properties;
                    };
                    WritebackProcessElement.prototype.clone = function () {
                        var writebackProcessElement = new WritebackProcessElement(this.Model);
                        writebackProcessElement.ProcessId = this.ProcessId;
                        writebackProcessElement.MexTag = this.MexTag;
                        writebackProcessElement.ProcessMetadataID = this.ProcessMetadataID;
                        writebackProcessElement.ProcessName = this.ProcessName;
                        return writebackProcessElement;
                    };
                    WritebackProcessElement.prototype.NewInstance = function () {
                        return new WritebackProcessElement(this.Model);
                    };
                    WritebackProcessElement.prototype.ConvertToJsonObject = function () {
                        var obj = _super.prototype.ConvertToJsonObject.call(this);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ClrTypeID", this.ClrTypeID);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "MexTag", this.MexTag);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ProcessId", this.ProcessId);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ProcessName", this.ProcessName);
                        inspur.gsp.pmf.bpmn.model.BpmnModelHelper.SetAttributeValue(obj, "ProcessMetadataID", this.ProcessMetadataID);
                        return obj;
                    };
                    WritebackProcessElement.prototype.LoadFromJsonObject = function (obj) {
                        _super.prototype.LoadFromJsonObject.call(this, obj);
                        this.MexTag = obj.MexTag;
                        this.ProcessId = obj.ProcessId;
                        this.ProcessName = obj.ProcessName;
                        this.ProcessMetadataID = obj.ProcessMetadataID;
                    };
                    return WritebackProcessElement;
                }(inspur.gsp.pmf.bpmn.model.ExtensionElement));
                model_7.WritebackProcessElement = WritebackProcessElement;
                inspur.gsp.pmf.bpmn.model.BpmnModelHelper.RegisterElementType(new WritebackProcessElement(new inspur.gsp.pmf.bpmn.model.BpmnModel()));
            })(model = aif.model || (aif.model = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
//# sourceMappingURL=inspur.gsp.aif.model.js.map