var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ActionKeys;
                (function (ActionKeys) {
                    ActionKeys["pmf_save"] = "pmf_save";
                    ActionKeys["pmf_export"] = "pmf_export";
                    ActionKeys["pmf_publish"] = "pmf_publish";
                    ActionKeys["pmf_unpublish"] = "pmf_unpublish";
                    ActionKeys["pmf_undo"] = "pmf_undo";
                    ActionKeys["pmf_redo"] = "pmf_redo";
                    ActionKeys["pmf_cut"] = "pmf_cut";
                    ActionKeys["pmf_copy"] = "pmf_copy";
                    ActionKeys["pmf_paste"] = "pmf_paste";
                    ActionKeys["pmf_pasteHere"] = "pmf_pasteHere";
                    ActionKeys["pmf_delete"] = "pmf_delete";
                    ActionKeys["pmf_deleteAll"] = "pmf_deleteAll";
                    ActionKeys["pmf_duplicate"] = "pmf_duplicate";
                    ActionKeys["pmf_selectVertices"] = "pmf_selectVertices";
                    ActionKeys["pmf_selectEdges"] = "pmf_selectEdges";
                    ActionKeys["pmf_selectAll"] = "pmf_selectAll";
                    ActionKeys["pmf_selectNone"] = "pmf_selectNone";
                    ActionKeys["pmf_lockUnlock"] = "pmf_lockUnlock";
                    ActionKeys["pmf_formatPanel"] = "pmf_formatPanel";
                    ActionKeys["pmf_outline"] = "pmf_outline";
                    ActionKeys["pmf_layers"] = "pmf_layers";
                    ActionKeys["pmf_pageView"] = "pmf_pageView";
                    ActionKeys["pmf_grid"] = "pmf_grid";
                    ActionKeys["pmf_connectionArrows"] = "pmf_connectionArrows";
                    ActionKeys["pmf_connectionPoints"] = "pmf_connectionPoints";
                    ActionKeys["pmf_locked"] = "pmf_locked";
                    ActionKeys["pmf_resetView"] = "pmf_resetView";
                    ActionKeys["pmf_zoomIn"] = "pmf_zoomIn";
                    ActionKeys["pmf_zoomOut"] = "pmf_zoomOut";
                    ActionKeys["pmf_view_25"] = "pmf_view_25";
                    ActionKeys["pmf_view_50"] = "pmf_view_50";
                    ActionKeys["pmf_view_75"] = "pmf_view_75";
                    ActionKeys["pmf_view_100"] = "pmf_view_100";
                    ActionKeys["pmf_view_125"] = "pmf_view_125";
                    ActionKeys["pmf_view_150"] = "pmf_view_150";
                    ActionKeys["pmf_view_200"] = "pmf_view_200";
                    ActionKeys["pmf_view_300"] = "pmf_view_300";
                    ActionKeys["pmf_view_400"] = "pmf_view_400";
                    ActionKeys["pmf_fitWindow"] = "pmf_fitWindow";
                    ActionKeys["pmf_fitPage"] = "pmf_fitPage";
                    ActionKeys["pmf_fitTwoPages"] = "pmf_fitTwoPages";
                    ActionKeys["pmf_fitPageWidth"] = "pmf_fitPageWidth";
                    ActionKeys["pmf_customZoom"] = "pmf_customZoom";
                    ActionKeys["pmf_toFront"] = "pmf_toFront";
                    ActionKeys["pmf_toBack"] = "pmf_toBack";
                    ActionKeys["pmf_leftAlign"] = "pmf_leftAlign";
                    ActionKeys["pmf_center"] = "pmf_center";
                    ActionKeys["pmf_rightAlign"] = "pmf_rightAlign";
                    ActionKeys["pmf_topAlign"] = "pmf_topAlign";
                    ActionKeys["pmf_middle"] = "pmf_middle";
                    ActionKeys["pmf_bottomAlign"] = "pmf_bottomAlign";
                    ActionKeys["pmf_horizontal"] = "pmf_horizontal";
                    ActionKeys["pmf_vertical"] = "pmf_vertical";
                    ActionKeys["pmf_clearWaypoints"] = "pmf_clearWaypoints";
                    ActionKeys["pmf_autosize"] = "pmf_autosize";
                    ActionKeys["pmf_help"] = "pmf_help";
                    ActionKeys["pmf_about"] = "pmf_about";
                    ActionKeys["pmf_viewModelXml"] = "pmf_viewModelXml";
                })(ActionKeys = grapheditor.ActionKeys || (grapheditor.ActionKeys = {}));
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
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
            var grapheditor;
            (function (grapheditor) {
                var Action = (function (_super) {
                    __extends(Action, _super);
                    function Action(key, enabled) {
                        var _this = _super.call(this) || this;
                        _this.enabled = true;
                        _this.toggleAction = false;
                        _this.key = key;
                        _this.enabled = (enabled != null) ? enabled : true;
                        return _this;
                    }
                    Action.prototype.isEnabled = function () {
                        return this.enabled;
                    };
                    Action.prototype.isToggleAction = function () {
                        return this.toggleAction;
                    };
                    Action.prototype.isSelected = function (editorUi) {
                        return false;
                    };
                    Action.prototype.setEnabled = function (value) {
                        if (this.enabled != value) {
                            this.enabled = value;
                            this.fireEvent(new mxEventObject('stateChanged'));
                        }
                    };
                    Action.prototype.getShortcut = function () {
                        if (this.shortcutKeyCode == null)
                            return null;
                        if (this.shortcut != null)
                            return this.shortcut;
                        var shortcut = grapheditor.Utils.keyboardMap[this.shortcutKeyCode];
                        if (this.shortcutAltKey) {
                            shortcut = "Alt+" + shortcut;
                        }
                        if (this.shortcutShiftKey) {
                            shortcut = "Shift+" + shortcut;
                        }
                        if (this.shortcutControlKey) {
                            shortcut = grapheditor.EditorUi.ctrlKey + "+" + shortcut;
                        }
                        return shortcut;
                    };
                    Action.prototype.setToggleAction = function (value) {
                        this.toggleAction = value;
                    };
                    Action.prototype.execute = function (ui, evt) {
                    };
                    return Action;
                }(mxEventSource));
                grapheditor.Action = Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AboutAction = (function (_super) {
                    __extends(AboutAction, _super);
                    function AboutAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_about, true) || this;
                    }
                    AboutAction.prototype.execute = function (ui, evt) {
                        alert(this.key);
                    };
                    return AboutAction;
                }(grapheditor.Action));
                grapheditor.AboutAction = AboutAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AlignBottomAction = (function (_super) {
                    __extends(AlignBottomAction, _super);
                    function AlignBottomAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_bottomAlign, false) || this;
                    }
                    AlignBottomAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.alignCells(mxConstants.ALIGN_BOTTOM);
                    };
                    return AlignBottomAction;
                }(grapheditor.Action));
                grapheditor.AlignBottomAction = AlignBottomAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AlignCenterAction = (function (_super) {
                    __extends(AlignCenterAction, _super);
                    function AlignCenterAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_center, false) || this;
                    }
                    AlignCenterAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.alignCells(mxConstants.ALIGN_CENTER);
                    };
                    return AlignCenterAction;
                }(grapheditor.Action));
                grapheditor.AlignCenterAction = AlignCenterAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AlignLeftAction = (function (_super) {
                    __extends(AlignLeftAction, _super);
                    function AlignLeftAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_leftAlign, false) || this;
                    }
                    AlignLeftAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.alignCells(mxConstants.ALIGN_LEFT);
                    };
                    return AlignLeftAction;
                }(grapheditor.Action));
                grapheditor.AlignLeftAction = AlignLeftAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AlignMiddleAction = (function (_super) {
                    __extends(AlignMiddleAction, _super);
                    function AlignMiddleAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_middle, false) || this;
                    }
                    AlignMiddleAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.alignCells(mxConstants.ALIGN_MIDDLE);
                    };
                    return AlignMiddleAction;
                }(grapheditor.Action));
                grapheditor.AlignMiddleAction = AlignMiddleAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AlignRightAction = (function (_super) {
                    __extends(AlignRightAction, _super);
                    function AlignRightAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_rightAlign, false) || this;
                    }
                    AlignRightAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.alignCells(mxConstants.ALIGN_RIGHT);
                    };
                    return AlignRightAction;
                }(grapheditor.Action));
                grapheditor.AlignRightAction = AlignRightAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AlignTopAction = (function (_super) {
                    __extends(AlignTopAction, _super);
                    function AlignTopAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_topAlign, false) || this;
                    }
                    AlignTopAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.alignCells(mxConstants.ALIGN_TOP);
                    };
                    return AlignTopAction;
                }(grapheditor.Action));
                grapheditor.AlignTopAction = AlignTopAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var AutosizeAction = (function (_super) {
                    __extends(AutosizeAction, _super);
                    function AutosizeAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_autosize, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.Y;
                        return _this;
                    }
                    AutosizeAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        var cells = graph.getSelectionCells();
                        if (cells != null) {
                            graph.getModel().beginUpdate();
                            try {
                                for (var i = 0; i < cells.length; i++) {
                                    var cell = cells[i];
                                    if (graph.getModel().getChildCount(cell)) {
                                        graph.updateGroupBounds([cell], 20);
                                    }
                                    else {
                                        var state = graph.view.getState(cell);
                                        var geo = graph.getCellGeometry(cell);
                                        if (graph.getModel().isVertex(cell) && state != null && state.text != null &&
                                            geo != null && graph.isWrapping(cell)) {
                                            geo = geo.clone();
                                            geo.height = state.text.boundingBox.height / graph.view.scale;
                                            graph.getModel().setGeometry(cell, geo);
                                        }
                                        else {
                                            graph.updateCellSize(cell);
                                        }
                                    }
                                }
                            }
                            finally {
                                graph.getModel().endUpdate();
                            }
                        }
                    };
                    return AutosizeAction;
                }(grapheditor.Action));
                grapheditor.AutosizeAction = AutosizeAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ClearWaypointsAction = (function (_super) {
                    __extends(ClearWaypointsAction, _super);
                    function ClearWaypointsAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_clearWaypoints, false) || this;
                        _this.shortcutControlKey = false;
                        _this.shortcutShiftKey = true;
                        _this.shortcutAltKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.C;
                        return _this;
                    }
                    ClearWaypointsAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        var cells = graph.getSelectionCells();
                        if (cells != null) {
                            cells = graph.addAllEdges(cells);
                            graph.getModel().beginUpdate();
                            try {
                                for (var i = 0; i < cells.length; i++) {
                                    var cell = cells[i];
                                    if (graph.getModel().isEdge(cell)) {
                                        var geo = graph.getCellGeometry(cell);
                                        if (geo != null) {
                                            geo = geo.clone();
                                            geo.points = null;
                                            graph.getModel().setGeometry(cell, geo);
                                        }
                                    }
                                }
                            }
                            finally {
                                graph.getModel().endUpdate();
                            }
                        }
                    };
                    return ClearWaypointsAction;
                }(grapheditor.Action));
                grapheditor.ClearWaypointsAction = ClearWaypointsAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ConnectionArrowAction = (function (_super) {
                    __extends(ConnectionArrowAction, _super);
                    function ConnectionArrowAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_connectionArrows, true) || this;
                        _this.setToggleAction(true);
                        return _this;
                    }
                    ConnectionArrowAction.prototype.isSelected = function (ui) {
                        return ui.graph.isConnectable(true);
                    };
                    ConnectionArrowAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.setConnectable(!this.isSelected(ui));
                        graph.refresh();
                    };
                    return ConnectionArrowAction;
                }(grapheditor.Action));
                grapheditor.ConnectionArrowAction = ConnectionArrowAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var CopyAction = (function (_super) {
                    __extends(CopyAction, _super);
                    function CopyAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_copy, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.C;
                        return _this;
                    }
                    CopyAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        mxClipboard.copy(graph);
                    };
                    return CopyAction;
                }(grapheditor.Action));
                grapheditor.CopyAction = CopyAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var CutAction = (function (_super) {
                    __extends(CutAction, _super);
                    function CutAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_cut, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.X;
                        return _this;
                    }
                    CutAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        mxClipboard.cut(graph);
                    };
                    return CutAction;
                }(grapheditor.Action));
                grapheditor.CutAction = CutAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var DeleteAction = (function (_super) {
                    __extends(DeleteAction, _super);
                    function DeleteAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_delete, false) || this;
                        _this.shortcutControlKey = false;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.Del;
                        return _this;
                    }
                    DeleteAction.prototype.execute = function (ui, evt) {
                        var includeEdges = true;
                        var graph = ui.graph;
                        graph.escape();
                        var cells = graph.getDeletableCells(graph.getSelectionCells());
                        if (cells != null && cells.length > 0) {
                            var parents = graph.model.getParents(cells);
                            graph.removeCells(cells, includeEdges);
                            if (parents != null) {
                                var select = [];
                                for (var i = 0; i < parents.length; i++) {
                                    if (graph.model.contains(parents[i]) && (graph.model.isVertex(parents[i]) || graph.model.isEdge(parents[i]))) {
                                        select.push(parents[i]);
                                    }
                                }
                                graph.setSelectionCells(select);
                            }
                        }
                    };
                    return DeleteAction;
                }(grapheditor.Action));
                grapheditor.DeleteAction = DeleteAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var DistributeHorizontalAction = (function (_super) {
                    __extends(DistributeHorizontalAction, _super);
                    function DistributeHorizontalAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_horizontal, false) || this;
                    }
                    DistributeHorizontalAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.distributeCells(true);
                    };
                    return DistributeHorizontalAction;
                }(grapheditor.Action));
                grapheditor.DistributeHorizontalAction = DistributeHorizontalAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var DistributeVerticalAction = (function (_super) {
                    __extends(DistributeVerticalAction, _super);
                    function DistributeVerticalAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_vertical, false) || this;
                    }
                    DistributeVerticalAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.distributeCells(false);
                    };
                    return DistributeVerticalAction;
                }(grapheditor.Action));
                grapheditor.DistributeVerticalAction = DistributeVerticalAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var DuplicateAction = (function (_super) {
                    __extends(DuplicateAction, _super);
                    function DuplicateAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_duplicate, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.D;
                        return _this;
                    }
                    DuplicateAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        var cells = graph.getSelectionCells();
                        var append = true;
                        cells = graph.model.getTopmostCells(cells);
                        var model = graph.getModel();
                        var s = graph.gridSize;
                        var select = [];
                        model.beginUpdate();
                        try {
                            var clones = graph.cloneCells(cells, false);
                            for (var i = 0; i < cells.length; i++) {
                                var parent_1 = model.getParent(cells[i]);
                                var child = graph.moveCells([clones[i]], s, s, false, parent_1)[0];
                                select.push(child);
                                if (append) {
                                    model.add(parent_1, clones[i]);
                                }
                                else {
                                    var index = parent_1.getIndex(cells[i]);
                                    model.add(parent_1, clones[i], index + 1);
                                }
                            }
                        }
                        finally {
                            model.endUpdate();
                        }
                        graph.setSelectionCells(select);
                    };
                    return DuplicateAction;
                }(grapheditor.Action));
                grapheditor.DuplicateAction = DuplicateAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var LockedAction = (function (_super) {
                    __extends(LockedAction, _super);
                    function LockedAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_locked, true) || this;
                        _this.setToggleAction(true);
                        return _this;
                    }
                    LockedAction.prototype.isSelected = function (ui) {
                        return ui.graph.isCellsLocked();
                    };
                    LockedAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.setCellsLocked(!this.isSelected(ui));
                        graph.refresh();
                        var cell = graph.getSelectionCell();
                        if (cell) {
                            console.log("元素锁定后子页面发送点击元素消息至" + grapheditor.POST_MESSAGE_URL);
                            top.postMessage("#show#" + grapheditor.PropertyAdapter.getCellPropertyConfigAndData(graph, cell), grapheditor.POST_MESSAGE_URL);
                        }
                        else {
                        }
                    };
                    return LockedAction;
                }(grapheditor.Action));
                grapheditor.LockedAction = LockedAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var FitWindowAction = (function (_super) {
                    __extends(FitWindowAction, _super);
                    function FitWindowAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_fitWindow, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.H;
                        return _this;
                    }
                    FitWindowAction.prototype.execute = function (ui, evt) {
                        ui.graph.fit(16);
                    };
                    return FitWindowAction;
                }(grapheditor.Action));
                grapheditor.FitWindowAction = FitWindowAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var FormatPanelAction = (function (_super) {
                    __extends(FormatPanelAction, _super);
                    function FormatPanelAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_formatPanel, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.P;
                        _this.setToggleAction(true);
                        return _this;
                    }
                    FormatPanelAction.prototype.isSelected = function (ui) {
                        return ui.formatEnabled;
                    };
                    FormatPanelAction.prototype.execute = function (ui, evt) {
                        ui.formatEnabled = !ui.formatEnabled;
                        ui.refresh();
                    };
                    return FormatPanelAction;
                }(grapheditor.Action));
                grapheditor.FormatPanelAction = FormatPanelAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var HelpAction = (function (_super) {
                    __extends(HelpAction, _super);
                    function HelpAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_help, true) || this;
                    }
                    HelpAction.prototype.execute = function (ui, evt) {
                        alert(this.key);
                    };
                    return HelpAction;
                }(grapheditor.Action));
                grapheditor.HelpAction = HelpAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var LockUnlockAction = (function (_super) {
                    __extends(LockUnlockAction, _super);
                    function LockUnlockAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_lockUnlock, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.L;
                        return _this;
                    }
                    LockUnlockAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        if (!graph.isSelectionEmpty()) {
                            graph.getModel().beginUpdate();
                            try {
                                var defaultValue = graph.isCellMovable(graph.getSelectionCell()) ? 1 : 0;
                                graph.toggleCellStyles(mxConstants.STYLE_MOVABLE, defaultValue);
                                graph.toggleCellStyles(mxConstants.STYLE_RESIZABLE, defaultValue);
                                graph.toggleCellStyles(mxConstants.STYLE_ROTATABLE, defaultValue);
                                graph.toggleCellStyles(mxConstants.STYLE_DELETABLE, defaultValue);
                                graph.toggleCellStyles(mxConstants.STYLE_EDITABLE, defaultValue);
                                graph.toggleCellStyles('connectable', defaultValue);
                            }
                            finally {
                                graph.getModel().endUpdate();
                                ui.fireEvent(new mxEventObject(grapheditor.PmfEvents.LockedChanged));
                            }
                        }
                    };
                    return LockUnlockAction;
                }(grapheditor.Action));
                grapheditor.LockUnlockAction = LockUnlockAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var OutlineAction = (function (_super) {
                    __extends(OutlineAction, _super);
                    function OutlineAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_outline, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.O;
                        _this.setToggleAction(true);
                        return _this;
                    }
                    OutlineAction.prototype.isSelected = function (ui) {
                        if (this.outlineWindow == null)
                            return false;
                        return this.outlineWindow.window.isVisible();
                    };
                    OutlineAction.prototype.execute = function (ui, evt) {
                        if (this.outlineWindow == null) {
                            this.outlineWindow = new grapheditor.OutlineWindow(ui, document.body.offsetWidth - 260, 100, 180, 180);
                            this.outlineWindow.window.addListener('show', function () {
                                ui.fireEvent(new mxEventObject('outline'));
                            });
                            this.outlineWindow.window.addListener('hide', function () {
                                ui.fireEvent(new mxEventObject('outline'));
                            });
                            this.outlineWindow.window.setVisible(true);
                            ui.fireEvent(new mxEventObject('outline'));
                        }
                        else {
                            this.outlineWindow.window.setVisible(!this.outlineWindow.window.isVisible());
                        }
                    };
                    return OutlineAction;
                }(grapheditor.Action));
                grapheditor.OutlineAction = OutlineAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var PasteAction = (function (_super) {
                    __extends(PasteAction, _super);
                    function PasteAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_paste, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.V;
                        return _this;
                    }
                    PasteAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        if (graph.isEnabled() && !graph.isCellLocked(graph.getDefaultParent())) {
                            mxClipboard.paste(graph);
                        }
                    };
                    return PasteAction;
                }(grapheditor.Action));
                grapheditor.PasteAction = PasteAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var PublishAction = (function (_super) {
                    __extends(PublishAction, _super);
                    function PublishAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_publish, true) || this;
                    }
                    PublishAction.prototype.execute = function (ui, evt) {
                        grapheditor.BpmnMxGraphAdaper.publishMetadata(ui.graph);
                    };
                    return PublishAction;
                }(grapheditor.Action));
                grapheditor.PublishAction = PublishAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var RedoAction = (function (_super) {
                    __extends(RedoAction, _super);
                    function RedoAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_redo, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.Y;
                        return _this;
                    }
                    RedoAction.prototype.execute = function (ui, evt) {
                        alert(this.key);
                    };
                    return RedoAction;
                }(grapheditor.Action));
                grapheditor.RedoAction = RedoAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ResetViewAction = (function (_super) {
                    __extends(ResetViewAction, _super);
                    function ResetViewAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_resetView, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.H;
                        return _this;
                    }
                    ResetViewAction.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(1);
                        ui.resetScrollbars();
                    };
                    return ResetViewAction;
                }(grapheditor.Action));
                grapheditor.ResetViewAction = ResetViewAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var SaveAction = (function (_super) {
                    __extends(SaveAction, _super);
                    function SaveAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_save, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.S;
                        return _this;
                    }
                    SaveAction.prototype.execute = function (ui, evt) {
                        grapheditor.BpmnMxGraphAdaper.saveIntoMetadata(ui.graph);
                    };
                    return SaveAction;
                }(grapheditor.Action));
                grapheditor.SaveAction = SaveAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var SelectAllAction = (function (_super) {
                    __extends(SelectAllAction, _super);
                    function SelectAllAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_selectAll, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.A;
                        return _this;
                    }
                    SelectAllAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.selectAll(null, true);
                    };
                    return SelectAllAction;
                }(grapheditor.Action));
                grapheditor.SelectAllAction = SelectAllAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var SelectEdgesAction = (function (_super) {
                    __extends(SelectEdgesAction, _super);
                    function SelectEdgesAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_selectEdges, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.E;
                        return _this;
                    }
                    SelectEdgesAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.selectEdges();
                    };
                    return SelectEdgesAction;
                }(grapheditor.Action));
                grapheditor.SelectEdgesAction = SelectEdgesAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var SelectNoneAction = (function (_super) {
                    __extends(SelectNoneAction, _super);
                    function SelectNoneAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_selectNone, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.A;
                        return _this;
                    }
                    SelectNoneAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.clearSelection();
                    };
                    return SelectNoneAction;
                }(grapheditor.Action));
                grapheditor.SelectNoneAction = SelectNoneAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var SelectVerticesAction = (function (_super) {
                    __extends(SelectVerticesAction, _super);
                    function SelectVerticesAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_selectVertices, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.I;
                        return _this;
                    }
                    SelectVerticesAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.selectVertices();
                    };
                    return SelectVerticesAction;
                }(grapheditor.Action));
                grapheditor.SelectVerticesAction = SelectVerticesAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToBackAction = (function (_super) {
                    __extends(ToBackAction, _super);
                    function ToBackAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_toBack, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.B;
                        return _this;
                    }
                    ToBackAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.orderCells(true);
                    };
                    return ToBackAction;
                }(grapheditor.Action));
                grapheditor.ToBackAction = ToBackAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToFrontAction = (function (_super) {
                    __extends(ToFrontAction, _super);
                    function ToFrontAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_toFront, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.F;
                        return _this;
                    }
                    ToFrontAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.orderCells(false);
                    };
                    return ToFrontAction;
                }(grapheditor.Action));
                grapheditor.ToFrontAction = ToFrontAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var UndoAction = (function (_super) {
                    __extends(UndoAction, _super);
                    function UndoAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_undo, false) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.Z;
                        return _this;
                    }
                    UndoAction.prototype.execute = function (ui, evt) {
                        alert(this.key);
                    };
                    return UndoAction;
                }(grapheditor.Action));
                grapheditor.UndoAction = UndoAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var UnpublishAction = (function (_super) {
                    __extends(UnpublishAction, _super);
                    function UnpublishAction() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_unpublish, true) || this;
                    }
                    UnpublishAction.prototype.execute = function (ui, evt) {
                        grapheditor.BpmnMxGraphAdaper.unpublishMetadata(ui.graph);
                    };
                    return UnpublishAction;
                }(grapheditor.Action));
                grapheditor.UnpublishAction = UnpublishAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ViewGridAction = (function (_super) {
                    __extends(ViewGridAction, _super);
                    function ViewGridAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_grid, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.G;
                        _this.setToggleAction(true);
                        return _this;
                    }
                    ViewGridAction.prototype.isSelected = function (ui) {
                        return ui.graph.isGridEnabled();
                    };
                    ViewGridAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        graph.setGridEnabled(!graph.isGridEnabled());
                        graph.refresh();
                    };
                    return ViewGridAction;
                }(grapheditor.Action));
                grapheditor.ViewGridAction = ViewGridAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ViewModelXmlAction = (function (_super) {
                    __extends(ViewModelXmlAction, _super);
                    function ViewModelXmlAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_viewModelXml, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.F12;
                        return _this;
                    }
                    ViewModelXmlAction.prototype.execute = function (ui, evt) {
                        var graph = ui.graph;
                        var encoder = new mxCodec();
                        var node = encoder.encode(graph.getModel());
                        mxUtils.popup(mxUtils.getPrettyXml(node), false);
                    };
                    return ViewModelXmlAction;
                }(grapheditor.Action));
                grapheditor.ViewModelXmlAction = ViewModelXmlAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_100_Action = (function (_super) {
                    __extends(View_100_Action, _super);
                    function View_100_Action() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_view_100, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutAltKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes._0;
                        return _this;
                    }
                    View_100_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(1);
                    };
                    return View_100_Action;
                }(grapheditor.Action));
                grapheditor.View_100_Action = View_100_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_125_Action = (function (_super) {
                    __extends(View_125_Action, _super);
                    function View_125_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_125, true) || this;
                    }
                    View_125_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(1.25);
                    };
                    return View_125_Action;
                }(grapheditor.Action));
                grapheditor.View_125_Action = View_125_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_150_Action = (function (_super) {
                    __extends(View_150_Action, _super);
                    function View_150_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_150, true) || this;
                    }
                    View_150_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(1.5);
                    };
                    return View_150_Action;
                }(grapheditor.Action));
                grapheditor.View_150_Action = View_150_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_200_Action = (function (_super) {
                    __extends(View_200_Action, _super);
                    function View_200_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_200, true) || this;
                    }
                    View_200_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(2);
                    };
                    return View_200_Action;
                }(grapheditor.Action));
                grapheditor.View_200_Action = View_200_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_25_Action = (function (_super) {
                    __extends(View_25_Action, _super);
                    function View_25_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_25, true) || this;
                    }
                    View_25_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(0.25);
                    };
                    return View_25_Action;
                }(grapheditor.Action));
                grapheditor.View_25_Action = View_25_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_300_Action = (function (_super) {
                    __extends(View_300_Action, _super);
                    function View_300_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_300, true) || this;
                    }
                    View_300_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(3);
                    };
                    return View_300_Action;
                }(grapheditor.Action));
                grapheditor.View_300_Action = View_300_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_400_Action = (function (_super) {
                    __extends(View_400_Action, _super);
                    function View_400_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_400, true) || this;
                    }
                    View_400_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(4);
                    };
                    return View_400_Action;
                }(grapheditor.Action));
                grapheditor.View_400_Action = View_400_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_50_Action = (function (_super) {
                    __extends(View_50_Action, _super);
                    function View_50_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_50, true) || this;
                    }
                    View_50_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(0.5);
                    };
                    return View_50_Action;
                }(grapheditor.Action));
                grapheditor.View_50_Action = View_50_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var View_75_Action = (function (_super) {
                    __extends(View_75_Action, _super);
                    function View_75_Action() {
                        return _super.call(this, grapheditor.ActionKeys.pmf_view_75, true) || this;
                    }
                    View_75_Action.prototype.execute = function (ui, evt) {
                        ui.graph.zoomTo(0.75);
                    };
                    return View_75_Action;
                }(grapheditor.Action));
                grapheditor.View_75_Action = View_75_Action;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ZoomInAction = (function (_super) {
                    __extends(ZoomInAction, _super);
                    function ZoomInAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_zoomIn, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutAltKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.Plus;
                        return _this;
                    }
                    ZoomInAction.prototype.execute = function (ui, evt) {
                        ui.graph.zoomIn();
                    };
                    return ZoomInAction;
                }(grapheditor.Action));
                grapheditor.ZoomInAction = ZoomInAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ZoomOutAction = (function (_super) {
                    __extends(ZoomOutAction, _super);
                    function ZoomOutAction() {
                        var _this = _super.call(this, grapheditor.ActionKeys.pmf_zoomOut, true) || this;
                        _this.shortcutControlKey = true;
                        _this.shortcutShiftKey = false;
                        _this.shortcutAltKey = true;
                        _this.shortcutKeyCode = grapheditor.KeyCodes.Minus;
                        return _this;
                    }
                    ZoomOutAction.prototype.execute = function (ui, evt) {
                        ui.graph.zoomOut();
                    };
                    return ZoomOutAction;
                }(grapheditor.Action));
                grapheditor.ZoomOutAction = ZoomOutAction;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var PropertyAdapter = (function () {
                    function PropertyAdapter() {
                    }
                    PropertyAdapter.getCellPropertyConfigAndData = function (graph, cell) {
                        var propertyData = {};
                        var result = {
                            propertyConfig: [],
                            propertyData: propertyData
                        };
                        if (cell.isEdge()) {
                            return JSON.stringify(result);
                        }
                        var usualPropertyConfig = new ElementPropertyConfig();
                        usualPropertyConfig.categoryId = "usual";
                        usualPropertyConfig.categoryName = "常规属性";
                        usualPropertyConfig.properties = cell.isEdge() ? PropertyAdapter.getUsualPropertyConfigFromEdge(graph, cell, propertyData) : this.getUsualPropertyConfigFromVertex(graph, cell, propertyData);
                        var customPropertyConfig = new ElementPropertyConfig();
                        customPropertyConfig.categoryId = "property";
                        customPropertyConfig.categoryName = "BPMN属性";
                        customPropertyConfig.properties = PropertyAdapter.getCustomPropertyConfig(graph, cell, propertyData);
                        result.propertyConfig.push(customPropertyConfig);
                        return JSON.stringify(result);
                    };
                    PropertyAdapter.getUsualPropertyConfigFromVertex = function (graph, cell, propertyData) {
                        var readonly = graph.isCellLocked(cell);
                        var propertyEntities = [
                            {
                                propertyID: "id",
                                propertyName: "ID",
                                propertyType: "string",
                                readonly: true,
                                visible: false
                            }, {
                                propertyID: "x",
                                propertyName: "x",
                                propertyType: "number",
                                readonly: readonly
                            }, {
                                propertyID: "y",
                                propertyName: "y",
                                propertyType: "number",
                                readonly: readonly
                            }, {
                                propertyID: "width",
                                propertyName: "宽度",
                                propertyType: "number",
                                readonly: readonly
                            }, {
                                propertyID: "height",
                                propertyName: "高度",
                                propertyType: "number",
                                readonly: readonly
                            },
                        ];
                        propertyData["id"] = cell.id;
                        propertyData["x"] = cell.geometry.x;
                        propertyData['y'] = cell.geometry.y;
                        propertyData['width'] = cell.geometry.width;
                        propertyData['height'] = cell.geometry.height;
                        return propertyEntities;
                    };
                    PropertyAdapter.getUsualPropertyConfigFromEdge = function (graph, cell, propertyData) {
                        var readonly = graph.isCellLocked(cell);
                        var propertyEntities = [
                            {
                                propertyID: "id",
                                propertyName: "ID",
                                propertyType: "string",
                                readonly: true,
                                visible: false
                            }, {
                                propertyID: "source",
                                propertyName: "源ID",
                                propertyType: "string",
                                readonly: true,
                                visible: false
                            }, {
                                propertyID: "target",
                                propertyName: "目标ID",
                                propertyType: "string",
                                readonly: true,
                                visible: false
                            }
                        ];
                        propertyData["id"] = cell.id;
                        propertyData["source"] = cell.source.value['flowElement']['Id'] || cell.source.id;
                        propertyData['target'] = cell.target.value['flowElement']['Id'] || cell.target.id;
                        return propertyEntities;
                    };
                    PropertyAdapter.getCustomPropertyConfig = function (graph, cell, propertyData) {
                        if (!cell || !cell.value || !cell.value['flowElement']) {
                            return [];
                        }
                        var flowElement = cell.value['flowElement'];
                        var propertyEntities = [];
                        console.log(flowElement);
                        var showableProperty = [];
                        if (flowElement.getShowableProperty == undefined) {
                            showableProperty = PropertyAdapter.getShowablePropertyWithoutGetMothod(flowElement);
                        }
                        else {
                            showableProperty = flowElement.getShowableProperty();
                        }
                        for (var _i = 0, showableProperty_1 = showableProperty; _i < showableProperty_1.length; _i++) {
                            var i = showableProperty_1[_i];
                            var propertyEntity = new PropertyEntity();
                            propertyEntity.propertyID = i;
                            propertyEntity.propertyName = i;
                            propertyEntity.propertyType = PropertyAdapter.judgePropertyType(flowElement, i);
                            PropertyAdapter.specialCaseHandler(propertyEntity);
                            propertyEntities.push(propertyEntity);
                            if (i == "extensionElements") {
                                var s = "";
                                var extensionElementsIds = [];
                                var result = [];
                                var extensionElements = flowElement.extensionElements;
                                for (var j = 0; j < extensionElements.length; j++) {
                                    s = s + extensionElements[j].ProcessId + ",";
                                    result.push(extensionElements[j].ConvertToJsonObject());
                                    extensionElementsIds.push(extensionElements[j].ProcessId);
                                }
                                propertyData[i] = JSON.stringify(result);
                            }
                            else {
                                propertyData[i] = flowElement[i];
                            }
                        }
                        var typeProperty = new PropertyEntity();
                        typeProperty.propertyID = "ClrTypeID";
                        typeProperty.propertyName = "ClrTypeID";
                        typeProperty.propertyType = "string";
                        typeProperty.readonly = true;
                        typeProperty.visible = false;
                        propertyEntities.push(typeProperty);
                        propertyData["ClrTypeID"] = cell.value["flowElement"].ClrTypeID;
                        return propertyEntities;
                    };
                    PropertyAdapter.getCustomPropertyConfigByGetShowableProepertyObjects = function (graph, cell, propertyData) {
                        if (!cell || !cell.value || !cell.value['flowElement']) {
                            return [];
                        }
                        var flowElement = cell.value['flowElement'];
                        var propertyEntities = [];
                        console.log(flowElement);
                        var showableProperty = [];
                        showableProperty = flowElement.getShowableProepertyObjects();
                        for (var _i = 0, showableProperty_2 = showableProperty; _i < showableProperty_2.length; _i++) {
                            var i = showableProperty_2[_i];
                            var propertyEntity = new PropertyEntity();
                            propertyEntity.propertyID = i.code;
                            propertyEntity.propertyName = i.name;
                            propertyEntity.propertyType = i.propertyType;
                            propertyEntity.readonly = i.readonly;
                            propertyEntity.visible = i.visible;
                            propertyEntity.description = i.description ? i.description : undefined;
                            propertyEntities.push(propertyEntity);
                            if (i.propertyName == "extensionElements") {
                                var s = "";
                                var extensionElementsIds = [];
                                var result = [];
                                var extensionElements = flowElement.extensionElements;
                                for (var j = 0; j < extensionElements.length; j++) {
                                    s = s + extensionElements[j].ProcessId + ",";
                                    result.push(extensionElements[j].ConvertToJsonObject());
                                    extensionElementsIds.push(extensionElements[j].ProcessId);
                                }
                                propertyData[i.propertyName] = JSON.stringify(result);
                            }
                            else {
                                propertyData[i.propertyName] = flowElement[i.propertyName];
                            }
                        }
                        var typeProperty = new PropertyEntity();
                        typeProperty.propertyID = "ClrTypeID";
                        typeProperty.propertyName = "ClrTypeID";
                        typeProperty.propertyType = "string";
                        typeProperty.readonly = true;
                        typeProperty.visible = false;
                        propertyEntities.push(typeProperty);
                        propertyData["ClrTypeID"] = cell.value["flowElement"].ClrTypeID;
                        return propertyEntities;
                    };
                    PropertyAdapter.specialCaseHandler = function (propertyEntity) {
                        if (propertyEntity.propertyID == 'Id') {
                            propertyEntity.readonly = true;
                            propertyEntity.visible = false;
                        }
                        if (propertyEntity.propertyID == 'CreationProcessId') {
                            propertyEntity.propertyName = "生单流程ID";
                            propertyEntity.visible = false;
                        }
                        if (propertyEntity.propertyID == "ProcessName") {
                            propertyEntity.propertyName = "生单流程名称(*)";
                            propertyEntity.description = "生单流程名称";
                            propertyEntity.propertyType = "modal";
                        }
                        if (propertyEntity.propertyID == "ProcessMetadataID") {
                            propertyEntity.propertyName = "生单流程元数据ID";
                            propertyEntity.description = "生单流程元数据ID";
                            propertyEntity.visible = false;
                        }
                        if (propertyEntity.propertyID == 'Name') {
                            propertyEntity.propertyName = "名称";
                        }
                        if (propertyEntity.propertyID == 'CreationRuleId') {
                            propertyEntity.propertyName = "生单规则ID";
                            propertyEntity.description = "生单规则ID";
                            propertyEntity.visible = false;
                        }
                        if (propertyEntity.propertyID == "RuleName") {
                            propertyEntity.propertyName = "生单规则名称(*)";
                            propertyEntity.description = "生单规则名称";
                            propertyEntity.propertyType = "modal";
                        }
                        if (propertyEntity.propertyID == "RuleMetadataID") {
                            propertyEntity.propertyName = "生单规则元数据ID";
                            propertyEntity.description = "生单规则元数据ID";
                            propertyEntity.visible = false;
                        }
                        if (propertyEntity.propertyID == 'BeType') {
                            propertyEntity.propertyName = "业务实体类型";
                            propertyEntity.description = "业务实体类型";
                            propertyEntity.visible = false;
                        }
                        if (propertyEntity.propertyID == 'BeName') {
                            propertyEntity.propertyName = "业务实体名称(*)";
                            propertyEntity.description = "业务实体名称";
                            propertyEntity.propertyType = "modal";
                        }
                        if (propertyEntity.propertyID == 'BeMetadataID') {
                            propertyEntity.propertyName = "业务实体元数据ID";
                            propertyEntity.description = "业务实体元数据ID";
                            propertyEntity.visible = false;
                        }
                        if (propertyEntity.propertyID == "extensionElements") {
                            propertyEntity.propertyName = '回写流程';
                            propertyEntity.description = "这是回写流程属性设置，输入内容应为回写流程Id，多个回写流程间用英文标点“,”隔开，不可有空格";
                            propertyEntity.propertyType = "modal";
                        }
                        return propertyEntity;
                    };
                    PropertyAdapter.getShowablePropertyWithoutGetMothod = function (flowElement) {
                        console.log('come in getShowablePropertyWithoutGetMothod...');
                        var showableProperty = [];
                        if (flowElement['Id'] != undefined) {
                            showableProperty.push("Id");
                        }
                        if (flowElement['Name'] != undefined) {
                            showableProperty.push("Name");
                        }
                        if (flowElement['ClrTypeId'] != undefined) {
                            showableProperty.push("ClrTypeId");
                        }
                        if (flowElement['BeType'] != undefined) {
                            showableProperty.push("BeType");
                        }
                        if (flowElement['IsForCompensation'] != undefined) {
                            showableProperty.push('IsForCompensation');
                        }
                        if (flowElement['extensionElements'] != undefined) {
                            showableProperty.push('extensionElements');
                        }
                        if (flowElement['CreationRuleId'] != undefined) {
                            showableProperty.push('CreationRuleId');
                        }
                        if (flowElement['CreationProcessId'] != undefined) {
                            showableProperty.push('CreationProcessId');
                        }
                        return showableProperty;
                    };
                    PropertyAdapter.judgePropertyType = function (flowElement, propertyName) {
                        switch (typeof flowElement[propertyName]) {
                            case "boolean":
                                return "boolean";
                            case "number":
                                return "number";
                            case "string":
                                return "string";
                            case "object":
                                if (Array.isArray(flowElement[propertyName])) {
                                }
                                else {
                                }
                                return 'string';
                            default:
                                return "string";
                        }
                    };
                    PropertyAdapter.updateCell = function (graph, obj, cell) {
                        if (!cell) {
                            console.error("cell is undefined.");
                            return;
                        }
                        graph.getModel().beginUpdate();
                        if ((obj['propertyID'] in cell) == true) {
                            cell[obj['propertyID']] = obj['propertyValue'];
                        }
                        else if ((obj['propertyID'] in cell.geometry) == true) {
                            cell.geometry[obj['propertyID']] = obj['propertyValue'];
                        }
                        else if (('flowElement' in cell.value) == true && (obj['propertyID'] in cell.value['flowElement']) == true) {
                            if (obj['propertyID'] == 'extensionElements') {
                                grapheditor.BpmnMxGraphAdaper.setExtensionElements(graph, cell.value['flowElement'], obj['propertyValue']);
                            }
                            else {
                                cell.value['flowElement'][obj['propertyID']] = obj['propertyValue'];
                            }
                        }
                        if (cell.isVertex()) {
                            PropertyAdapter.updateVertexGeometry(graph, cell);
                        }
                        else if (cell.isEdge()) {
                            PropertyAdapter.updateEdgeGeometry(graph, cell);
                        }
                        graph.getModel().endUpdate();
                        graph.refresh();
                        console.log("cell " + cell.getId() + " 已更新");
                    };
                    PropertyAdapter.updateVertexGeometry = function (graph, cell) {
                        var bpmnModel = graph['bpmnModel'];
                        var flowElement = cell.value['flowElement'];
                        var diagramElement = cell.value['diagramElement'];
                        if (!bpmnModel || !flowElement || !diagramElement) {
                            console.error("cell 无flowElement或diagramElement属性");
                            return;
                        }
                        diagramElement.Bounds.X = cell.geometry.x;
                        diagramElement.Bounds.Y = cell.geometry.y;
                        diagramElement.Bounds.Height = cell.geometry.height;
                        diagramElement.Bounds.Width = cell.geometry.width;
                        console.log(cell);
                        console.log("vertex cell 更新完毕");
                    };
                    PropertyAdapter.updateEdgeGeometry = function (graph, cell) {
                        var bpmnModel = graph['bpmnModel'];
                        var flow = cell.value['flowElement'];
                        var diagramElement = cell.value['diagramElement'];
                        if (!bpmnModel || !flow || !diagramElement) {
                            throw "cell 无flowElement或diagramElement属性";
                        }
                        flow.SourceRef = cell.source.value['flowElement']['Id'];
                        flow.TargetRef = cell.target.value['flowElement']['Id'];
                        diagramElement.SourceShapeElementId = cell.source.value['flowElement']['Id'];
                        diagramElement.TargetShapeElementId = cell.target.value['flowElement']['Id'];
                        console.log(cell);
                        console.log("edge cell 更新完毕");
                    };
                    PropertyAdapter.getGraphPropertyConfigAndData = function (graph) {
                        var propertyData = {};
                        var result = {
                            propertyConfig: [],
                            propertyData: propertyData
                        };
                        var bpmnModel = null;
                        try {
                            bpmnModel = graph['bpmnModel'];
                        }
                        catch (err) {
                            console.error(err);
                            return JSON.stringify(result);
                        }
                        result.propertyConfig.push(PropertyAdapter.getGraphPropertyConfig(graph, bpmnModel, propertyData));
                        console.log(result);
                        return JSON.stringify(result);
                    };
                    PropertyAdapter.getGraphPropertyConfig = function (graph, bpmnModel, propertyData) {
                        var propertyConfig = new ElementPropertyConfig();
                        propertyConfig.categoryId = "property";
                        propertyConfig.categoryName = "BPMN属性";
                        propertyConfig.properties = [];
                        var propertyEntity = new PropertyEntity();
                        propertyEntity.propertyID = "Id";
                        propertyEntity.propertyName = "流程标识";
                        propertyEntity.propertyType = "string";
                        propertyEntity.readonly = true;
                        propertyEntity.visible = false;
                        propertyData['Id'] = bpmnModel.DefaultProcess.Id;
                        propertyConfig.properties.push(propertyEntity);
                        propertyEntity = new PropertyEntity();
                        propertyEntity.propertyID = "Key";
                        propertyEntity.propertyName = "Key(*)";
                        propertyEntity.propertyType = "string";
                        propertyData['Key'] = bpmnModel.DefaultProcess.Key || "";
                        propertyConfig.properties.push(propertyEntity);
                        propertyEntity = new PropertyEntity();
                        propertyEntity.propertyID = "Name";
                        propertyEntity.propertyName = "场景名称";
                        propertyEntity.propertyType = "string";
                        propertyData['Name'] = bpmnModel.DefaultProcess.Name || "";
                        propertyConfig.properties.push(propertyEntity);
                        propertyEntity = new PropertyEntity();
                        propertyEntity.propertyID = "Documentation";
                        propertyEntity.propertyName = "场景描述";
                        propertyEntity.propertyType = "string";
                        propertyData['Documentation'] = bpmnModel.DefaultProcess.Documentation || "";
                        propertyConfig.properties.push(propertyEntity);
                        return propertyConfig;
                    };
                    PropertyAdapter.updateGraph = function (graph, obj) {
                        graph.getModel().beginUpdate();
                        var bpmnModel = null;
                        try {
                            bpmnModel = graph['bpmnModel'];
                        }
                        catch (err) {
                            console.error(err);
                            return;
                        }
                        bpmnModel.DefaultProcess[obj['propertyID']] = obj['propertyValue'];
                        graph.getModel().endUpdate();
                        console.log("graph 更新完毕");
                        console.log(graph);
                    };
                    return PropertyAdapter;
                }());
                grapheditor.PropertyAdapter = PropertyAdapter;
                var ElementPropertyConfig = (function () {
                    function ElementPropertyConfig() {
                        this.properties = [];
                    }
                    return ElementPropertyConfig;
                }());
                grapheditor.ElementPropertyConfig = ElementPropertyConfig;
                var PropertyEntity = (function () {
                    function PropertyEntity() {
                        this.propertyType = "string";
                        this.readonly = false;
                        this.visible = true;
                    }
                    return PropertyEntity;
                }());
                grapheditor.PropertyEntity = PropertyEntity;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var CellEditor = (function (_super) {
                    __extends(CellEditor, _super);
                    function CellEditor(graph) {
                        return _super.call(this, graph) || this;
                    }
                    CellEditor.prototype.isContentEditing = function () {
                        var state = this.graph.view.getState(this.editingCell);
                        return state != null && state.style['html'] == 1;
                    };
                    ;
                    return CellEditor;
                }(mxCellEditor));
                grapheditor.CellEditor = CellEditor;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var GraphView = (function (_super) {
                    __extends(GraphView, _super);
                    function GraphView(graph) {
                        var _this = _super.call(this, graph) || this;
                        _this.gridSteps = 4;
                        _this.minGridSize = 4;
                        _this.gridImage = grapheditor.Init.IMAGE_PATH + '/grid.gif';
                        _this.gridColor = '#e0e0e0';
                        return _this;
                    }
                    GraphView.prototype.validateBackgroundImage = function () {
                        var graph = this.graph;
                        if (graph == null || graph.container == null)
                            return;
                        var color = (graph.background == null || graph.background == mxConstants.NONE) ? '#ffffff' : graph.background;
                        var gridColor = (this.gridColor != color.toLowerCase()) ? this.gridColor : '#ffffff';
                        var image = 'none';
                        if (graph.isGridEnabled()) {
                            if (mxClient.IS_SVG) {
                                image = unescape(encodeURIComponent(this.createSvgGrid(gridColor)));
                                image = (window.btoa) ? btoa(image) : Base64.encode(image, true);
                                image = 'url(' + 'data:image/svg+xml;base64,' + image + ')';
                            }
                            else {
                                image = 'url(' + this.gridImage + ')';
                            }
                        }
                        graph.container.style.backgroundImage = image;
                    };
                    GraphView.prototype.validate = function (cell) {
                        var graph = this.graph;
                        if (graph != null && graph.container != null && mxUtils.hasScrollbars(graph.container)) {
                            var pad = graph.getPagePadding();
                            var size = graph.getPageSize();
                            var tx = this.translate.x;
                            var ty = this.translate.y;
                            this.translate.x = pad.x / this.scale - (this.x0 || 0) * size.width;
                            this.translate.y = pad.y / this.scale - (this.y0 || 0) * size.height;
                        }
                        _super.prototype.validate.call(this, cell);
                    };
                    GraphView.prototype.getBackgroundPageBounds = function () {
                        var graph = this.graph;
                        var layout = graph.getPageLayout();
                        var page = graph.getPageSize();
                        return new mxRectangle(this.scale * (this.translate.x + layout.x * page.width), this.scale * (this.translate.y + layout.y * page.height), this.scale * layout.width * page.width, this.scale * layout.height * page.height);
                    };
                    GraphView.prototype.createSvgGrid = function (color) {
                        var tmp = this.graph.gridSize * this.scale;
                        while (tmp < this.minGridSize) {
                            tmp *= 2;
                        }
                        var tmp2 = this.gridSteps * tmp;
                        var d = [];
                        for (var i = 1; i < this.gridSteps; i++) {
                            var tmp3 = i * tmp;
                            d.push('M 0 ' + tmp3 + ' L ' + tmp2 + ' ' + tmp3 + ' M ' + tmp3 + ' 0 L ' + tmp3 + ' ' + tmp2);
                        }
                        var size = tmp2;
                        var svg = '<svg width="' + size + '" height="' + size + '" xmlns="' + mxConstants.NS_SVG + '">' +
                            '<defs><pattern id="grid" width="' + tmp2 + '" height="' + tmp2 + '" patternUnits="userSpaceOnUse">' +
                            '<path d="' + d.join(' ') + '" fill="none" stroke="' + color + '" opacity="0.2" stroke-width="1"/>' +
                            '<path d="M ' + tmp2 + ' 0 L 0 0 0 ' + tmp2 + '" fill="none" stroke="' + color + '" stroke-width="1"/>' +
                            '</pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>';
                        return svg;
                    };
                    ;
                    return GraphView;
                }(mxGraphView));
                grapheditor.GraphView = GraphView;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var HoverIcons = (function () {
                    function HoverIcons(graph) {
                        this.currentState = null;
                        this.cssCursor = 'copy';
                        this.tolerance = (mxClient.IS_TOUCH) ? 6 : 0;
                        this.triangleUp = (!mxClient.IS_SVG) ? new mxImage(grapheditor.Init.IMAGE_PATH + '/triangle-up.png', 26, 14) :
                            this.createSvgImage(26, 14, '<path d="m 1 14 L 13 1 L 26 14 z" stroke="#fff" fill="#007dfc"/>');
                        this.triangleDown = (!mxClient.IS_SVG) ? new mxImage(grapheditor.Init.IMAGE_PATH + '/triangle-up.png', 26, 14) :
                            this.createSvgImage(26, 14, '<path d=m 1 1 L 13 14 L 26 1 z" stroke="#fff" fill="#007dfc"/>');
                        this.triangleLeft = (!mxClient.IS_SVG) ? new mxImage(grapheditor.Init.IMAGE_PATH + '/triangle-up.png', 14, 26) :
                            this.createSvgImage(26, 14, '<path d="m 14 1 L 1 13 L 14 26 z" stroke="#fff" fill="#007dfc"/>');
                        this.triangleRight = (!mxClient.IS_SVG) ? new mxImage(grapheditor.Init.IMAGE_PATH + '/triangle-up.png', 14, 26) :
                            this.createSvgImage(26, 14, '<path d="m 1 1 L 14 13 L 1 26 z" stroke="#fff" fill="#007dfc"/>');
                        this.repaintHandler = null;
                        this.graph = graph;
                        this.init();
                    }
                    HoverIcons.prototype.init = function () {
                        this.arrowUp = this.createArrow(this.triangleUp, mxResources.get('plusTooltip'));
                        this.arrowRight = this.createArrow(this.triangleRight, mxResources.get('plusTooltip'));
                        this.arrowDown = this.createArrow(this.triangleDown, mxResources.get('plusTooltip'));
                        this.arrowLeft = this.createArrow(this.triangleLeft, mxResources.get('plusTooltip'));
                        this.elts = [this.arrowUp, this.arrowRight, this.arrowDown, this.arrowLeft];
                        this.repaintHandler = mxUtils.bind(this, function () {
                        });
                    };
                    HoverIcons.prototype.createArrow = function (img, tooltip) {
                        var arrow = null;
                        if (mxClient.IS_IE && !mxClient.IS_SVG) {
                            if (mxClient.IS_IE6 && document.compatMode != 'CSS1Compat') {
                                arrow = document.createElement(mxClient.VML_PREFIX + ':image');
                                arrow.setAttribute('src', img.src);
                                arrow.style.borderStyle = 'none';
                            }
                            else {
                                arrow = document.createElement('div');
                                arrow.style.backgroundImage = 'url(' + img.src + ')';
                                arrow.style.backgroundPosition = 'center';
                                arrow.style.backgroundRepeat = 'no-repeat';
                            }
                            arrow.style.width = (img.width + 4) + 'px';
                            arrow.style.height = (img.height + 4) + 'px';
                            arrow.style.display = (mxClient.IS_QUIRKS) ? 'inline' : 'inline-block';
                        }
                        else {
                            arrow = mxUtils.createImage(img.src);
                            arrow.style.width = img.width + 'px';
                            arrow.style.height = img.height + 'px';
                            arrow.style.padding = this.tolerance + 'px';
                        }
                        if (tooltip != null) {
                            arrow.setAttribute('title', tooltip);
                        }
                        arrow.style.position = 'absolute';
                        arrow.style.cursor = this.cssCursor;
                        mxEvent.addGestureListeners(arrow, mxUtils.bind(this, function (evt) {
                            if (this.currentState != null && !this.isResetEvent(evt)) {
                                this.mouseDownPoint = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(evt), mxEvent.getClientY(evt));
                                this.drag(evt, this.mouseDownPoint.x, this.mouseDownPoint.y);
                                this.activeArrow = arrow;
                                this.setDisplay('none');
                                mxEvent.consume(evt);
                            }
                        }));
                        mxEvent.redirectMouseEvents(arrow, this.graph, this.currentState);
                        mxEvent.addListener(arrow, 'mouseenter', mxUtils.bind(this, function (evt) {
                            if (mxEvent.isMouseEvent(evt)) {
                                if (this.activeArrow != null && this.activeArrow != arrow) {
                                    mxUtils.setOpacity(this.activeArrow, this.inactiveOpacity);
                                }
                                this.graph.connectionHandler.constraintHandler.reset();
                                mxUtils.setOpacity(arrow, 100);
                                this.activeArrow = arrow;
                            }
                        }));
                        mxEvent.addListener(arrow, 'mouseleave', mxUtils.bind(this, function (evt) {
                            if (!this.graph.isMouseDown) {
                                this.resetActiveArrow();
                            }
                        }));
                        return arrow;
                    };
                    HoverIcons.prototype.createSvgImage = function (w, h, data) {
                        var tmp = unescape(encodeURIComponent('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + w + 'px" height="' + h + 'px" ' +
                            'version="1.1">' + data + '</svg>'));
                        return new mxImage('data:image/svg+xml;base64,' + ((window.btoa) ? btoa(tmp) : Base64.encode(tmp, true)), w, h);
                    };
                    ;
                    return HoverIcons;
                }());
                grapheditor.HoverIcons = HoverIcons;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var KeyHandler = (function (_super) {
                    __extends(KeyHandler, _super);
                    function KeyHandler(graph) {
                        var _this = _super.call(this, graph) || this;
                        _this.altKeys = {};
                        _this.ctrlAltKeys = {};
                        _this.shiftAltKeys = {};
                        _this.ctrlShiftAltKeys = {};
                        return _this;
                    }
                    KeyHandler.prototype.isControlDown = function (evt) {
                        return mxEvent.isControlDown(evt) || (mxClient.IS_MAC && evt.metaKey);
                    };
                    KeyHandler.prototype.getFunction = function (evt) {
                        if (evt != null && mxEvent.isAltDown(evt)) {
                            if (this.isControlDown(evt)) {
                                if (mxEvent.isShiftDown(evt)) {
                                    return this.ctrlShiftAltKeys[evt.keyCode];
                                }
                                else {
                                    return this.ctrlAltKeys[evt.keyCode];
                                }
                            }
                            else {
                                if (mxEvent.isShiftDown(evt)) {
                                    return this.shiftAltKeys[evt.keyCode];
                                }
                                else {
                                    return this.altKeys[evt.keyCode];
                                }
                            }
                        }
                        else {
                            return _super.prototype.getFunction.call(this, evt);
                        }
                    };
                    KeyHandler.prototype.bindAltKey = function (code, funct) {
                        this.altKeys[code] = funct;
                    };
                    KeyHandler.prototype.bindCtrlAltKey = function (code, funct) {
                        this.ctrlAltKeys[code] = funct;
                    };
                    KeyHandler.prototype.bindShiftAltKey = function (code, funct) {
                        this.shiftAltKeys[code] = funct;
                    };
                    KeyHandler.prototype.bindCtrlShiftAltKey = function (code, funct) {
                        this.ctrlShiftAltKeys[code] = funct;
                    };
                    return KeyHandler;
                }(mxKeyHandler));
                grapheditor.KeyHandler = KeyHandler;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Menu = (function (_super) {
                    __extends(Menu, _super);
                    function Menu() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Menu.prototype.addItem = function (title, image, funct, parent, iconCls, enabled) {
                        var result = mxPopupMenu.apply(this, arguments);
                        if (enabled != null && !enabled) {
                            mxEvent.addListener(result, 'mousedown', function (evt) {
                                mxEvent.consume(evt);
                            });
                        }
                        return result;
                    };
                    return Menu;
                }(mxPopupMenu));
                grapheditor.Menu = Menu;
                var Menus = (function () {
                    function Menus() {
                    }
                    Menus.prototype.edgeStyleChange = function (menu, label, keys, values, sprite, parent, reset) {
                        return menu.addItem(label, null, mxUtils.bind(this, function () {
                            var graph = this.editorUi.editor.graph;
                            graph.stopEditing(false);
                            graph.getModel().beginUpdate();
                            try {
                                var cells = graph.getSelectionCells();
                                var edges = [];
                                for (var i = 0; i < cells.length; i++) {
                                    var cell = cells[i];
                                    if (graph.getModel().isEdge(cell)) {
                                        if (reset) {
                                            var geo = graph.getCellGeometry(cell);
                                            if (geo != null) {
                                                geo = geo.clone();
                                                geo.points = null;
                                                graph.getModel().setGeometry(cell, geo);
                                            }
                                        }
                                        for (var j = 0; j < keys.length; j++) {
                                            graph.setCellStyles(keys[j], values[j], [cell]);
                                        }
                                        edges.push(cell);
                                    }
                                }
                                this.editorUi.fireEvent(new mxEventObject('styleChanged', 'keys', keys, 'values', values, 'cells', edges));
                            }
                            finally {
                                graph.getModel().endUpdate();
                            }
                        }), parent, sprite);
                    };
                    return Menus;
                }());
                grapheditor.Menus = Menus;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var OutlineWindow = (function () {
                    function OutlineWindow(editorUi, x, y, w, h) {
                        var that = this;
                        var graph = editorUi.graph;
                        var div = document.createElement('div');
                        div.style.position = 'absolute';
                        div.style.width = '100%';
                        div.style.height = '100%';
                        div.style.border = '1px solid whiteSmoke';
                        div.style.overflow = 'hidden';
                        this.window = new mxWindow(mxResources.get('outline'), div, x, y, w, h, true, true);
                        this.window.destroyOnClose = false;
                        this.window.setMaximizable(false);
                        this.window.setResizable(true);
                        this.window.setClosable(true);
                        this.window.setVisible(true);
                        this.window.setLocation = function (x, y) {
                            var iw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                            var ih = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                            x = Math.max(0, Math.min(x, iw - that.window.table.clientWidth));
                            y = Math.max(0, Math.min(y, ih - that.window.table.clientHeight - 48));
                            if (that.window.getX() != x || that.window.getY() != y) {
                                mxWindow.prototype.setLocation.apply(that.window, arguments);
                            }
                        };
                        mxEvent.addListener(window, 'resize', function () {
                            var x = that.window.getX();
                            var y = that.window.getY();
                            that.window.setLocation(x, y);
                        });
                        var outline = new mxOutline(editorUi.graph);
                        outline.border = 20;
                        mxEvent.addListener(window, 'resize', function () {
                            outline.update();
                        });
                        editorUi.addListener('pageFormatChanged', function () {
                            outline.update();
                        });
                        editorUi.addListener(grapheditor.PmfEvents.ResizeGraphView, function () {
                            outline.update();
                        });
                        this.window.addListener(mxEvent.RESIZE, function () {
                            outline.update(false);
                            outline.outline.sizeDidChange();
                        });
                        this.window.addListener(mxEvent.SHOW, function () {
                            outline.suspended = false;
                            outline.outline.refresh();
                            outline.update();
                        });
                        this.window.addListener(mxEvent.HIDE, function () {
                            outline.suspended = true;
                        });
                        this.window.addListener(mxEvent.NORMALIZE, function () {
                            outline.suspended = false;
                            outline.update();
                        });
                        this.window.addListener(mxEvent.MINIMIZE, function () {
                            outline.suspended = true;
                        });
                        var outlineCreateGraph = outline.createGraph;
                        outline.createGraph = function (container) {
                            var g = outlineCreateGraph.apply(outline, arguments);
                            g.gridEnabled = false;
                            g.pageScale = graph.pageScale;
                            g.pageFormat = graph.pageFormat;
                            g["background"] = graph.background;
                            g.pageVisible = graph.pageVisible;
                            var current = mxUtils.getCurrentStyle(graph.container);
                            div.style.backgroundColor = current.backgroundColor;
                            return g;
                        };
                        function update() {
                            outline.outline.pageScale = graph.pageScale;
                            outline.outline.pageFormat = graph.pageFormat;
                            outline.outline.pageVisible = graph.pageVisible;
                            outline.outline["background"] = graph.background;
                            var current = mxUtils.getCurrentStyle(graph.container);
                            div.style.backgroundColor = current.backgroundColor;
                            if (graph.view.backgroundPageShape != null && outline.outline.view.backgroundPageShape != null) {
                                outline.outline.view.backgroundPageShape.fill = graph.view.backgroundPageShape.fill;
                            }
                            outline.outline.refresh();
                        }
                        ;
                        outline.init(div);
                        editorUi.addListener('resetGraphView', update);
                        editorUi.addListener('pageFormatChanged', update);
                        editorUi.addListener('backgroundColorChanged', update);
                        editorUi.addListener('backgroundImageChanged', update);
                        editorUi.addListener('pageViewChanged', function () {
                            update();
                            outline.update(true);
                        });
                        if (outline.outline.dialect == mxConstants.DIALECT_SVG) {
                            var zoomInAction_1 = editorUi.actions.getAction(grapheditor.ActionKeys.pmf_zoomIn);
                            var zoomOutAction_1 = editorUi.actions.getAction(grapheditor.ActionKeys.pmf_zoomOut);
                            mxEvent.addMouseWheelListener(function (evt, up) {
                                var outlineWheel = false;
                                var source = mxEvent.getSource(evt);
                                while (source != null) {
                                    if (source == outline.outline.view.canvas.ownerSVGElement) {
                                        outlineWheel = true;
                                        break;
                                    }
                                    source = source.parentNode;
                                }
                                if (outlineWheel) {
                                    if (up) {
                                        zoomInAction_1.execute(editorUi);
                                    }
                                    else {
                                        zoomOutAction_1.execute(editorUi);
                                    }
                                    mxEvent.consume(evt);
                                }
                            });
                        }
                    }
                    return OutlineWindow;
                }());
                grapheditor.OutlineWindow = OutlineWindow;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var PmfEvents;
                (function (PmfEvents) {
                    PmfEvents["ResizeGraphView"] = "ResizeGraphView";
                    PmfEvents["SelectionModelChanged"] = "SelectionModelChanged";
                    PmfEvents["LockedChanged"] = "LockedChanged";
                })(PmfEvents = grapheditor.PmfEvents || (grapheditor.PmfEvents = {}));
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ResourceKeys;
                (function (ResourceKeys) {
                    ResourceKeys["pmf_file"] = "file";
                    ResourceKeys["pmf_save"] = "save";
                    ResourceKeys["pmf_export"] = "export";
                    ResourceKeys["pmf_publish"] = "pmf_publish";
                    ResourceKeys["pmf_unpublish"] = "pmf_unpublish";
                    ResourceKeys["pmf_edit"] = "edit";
                    ResourceKeys["pmf_undo"] = "undo";
                    ResourceKeys["pmf_redo"] = "redo";
                    ResourceKeys["pmf_cut"] = "cut";
                    ResourceKeys["pmf_copy"] = "copy";
                    ResourceKeys["pmf_paste"] = "paste";
                    ResourceKeys["pmf_pasteHere"] = "pasteHere";
                    ResourceKeys["pmf_delete"] = "delete";
                    ResourceKeys["pmf_deleteAll"] = "deleteAll";
                    ResourceKeys["pmf_duplicate"] = "duplicate";
                    ResourceKeys["pmf_selectVertices"] = "selectVertices";
                    ResourceKeys["pmf_selectEdges"] = "selectEdges";
                    ResourceKeys["pmf_selectAll"] = "selectAll";
                    ResourceKeys["pmf_selectNone"] = "selectNone";
                    ResourceKeys["pmf_lockUnlock"] = "lockUnlock";
                    ResourceKeys["pmf_view"] = "view";
                    ResourceKeys["pmf_formatPanel"] = "formatPanel";
                    ResourceKeys["pmf_outline"] = "outline";
                    ResourceKeys["pmf_layers"] = "layers";
                    ResourceKeys["pmf_pageView"] = "pageView";
                    ResourceKeys["pmf_grid"] = "grid";
                    ResourceKeys["pmf_connectionArrows"] = "connectionArrows";
                    ResourceKeys["pmf_connectionPoints"] = "connectionPoints";
                    ResourceKeys["pmf_locked"] = "locked";
                    ResourceKeys["pmf_resetView"] = "resetView";
                    ResourceKeys["pmf_zoom"] = "zoom";
                    ResourceKeys["pmf_zoomIn"] = "zoomIn";
                    ResourceKeys["pmf_zoomOut"] = "zoomOut";
                    ResourceKeys["pmf_fitWindow"] = "fitWindow";
                    ResourceKeys["pmf_fitPage"] = "fitPage";
                    ResourceKeys["pmf_fitTwoPages"] = "fitTwoPages";
                    ResourceKeys["pmf_fitPageWidth"] = "fitPageWidth";
                    ResourceKeys["pmf_customZoom"] = "custom";
                    ResourceKeys["pmf_arrange"] = "arrange";
                    ResourceKeys["pmf_toFront"] = "toFront";
                    ResourceKeys["pmf_toBack"] = "toBack";
                    ResourceKeys["pmf_align"] = "align";
                    ResourceKeys["pmf_leftAlign"] = "leftAlign";
                    ResourceKeys["pmf_center"] = "center";
                    ResourceKeys["pmf_rightAlign"] = "rightAlign";
                    ResourceKeys["pmf_topAlign"] = "topAlign";
                    ResourceKeys["pmf_middle"] = "middle";
                    ResourceKeys["pmf_bottomAlign"] = "bottomAlign";
                    ResourceKeys["pmf_distribute"] = "distribute";
                    ResourceKeys["pmf_horizontal"] = "horizontal";
                    ResourceKeys["pmf_vertical"] = "vertical";
                    ResourceKeys["pmf_clearWaypoints"] = "clearWaypoints";
                    ResourceKeys["pmf_autosize"] = "autosize";
                    ResourceKeys["pmf_help"] = "help";
                    ResourceKeys["pmf_about"] = "about";
                    ResourceKeys["pmf_mainMenu"] = "pmf_mainMenu";
                    ResourceKeys["pmf_viewModelXml"] = "pmf_viewModelXml";
                })(ResourceKeys = grapheditor.ResourceKeys || (grapheditor.ResourceKeys = {}));
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var PlusShape = (function (_super) {
                    __extends(PlusShape, _super);
                    function PlusShape(rectangle) {
                        var _this = _super.call(this, rectangle ? rectangle : new mxRectangle(), null, null) || this;
                        mxRectangleShape.call(_this);
                        return _this;
                    }
                    PlusShape.prototype.isHtmlAllowed = function () {
                        return false;
                    };
                    PlusShape.prototype.paintForeground = function (c, x, y, w, h) {
                        var border = Math.min(w / 5, h / 5) + 1;
                        c.begin();
                        c.moveTo(x + w / 2, y + border);
                        c.lineTo(x + w / 2, y + h - border);
                        c.moveTo(x + border, y + h / 2);
                        c.lineTo(x + w - border, y + h / 2);
                        c.end();
                        c.stroke();
                        mxRectangleShape.prototype.paintForeground.apply(this, arguments);
                    };
                    return PlusShape;
                }(mxRectangleShape));
                grapheditor.PlusShape = PlusShape;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Shape = (function () {
                    function Shape() {
                    }
                    return Shape;
                }());
                grapheditor.Shape = Shape;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolBox = (function () {
                    function ToolBox() {
                        this.groups = new grapheditor.List();
                    }
                    return ToolBox;
                }());
                grapheditor.ToolBox = ToolBox;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var DefaultToolBox = (function (_super) {
                    __extends(DefaultToolBox, _super);
                    function DefaultToolBox() {
                        var _this = _super.call(this) || this;
                        _this.init();
                        return _this;
                    }
                    DefaultToolBox.prototype.init = function () { };
                    return DefaultToolBox;
                }(grapheditor.ToolBox));
                grapheditor.DefaultToolBox = DefaultToolBox;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolBoxGroup = (function () {
                    function ToolBoxGroup() {
                        this.items = new grapheditor.List();
                    }
                    return ToolBoxGroup;
                }());
                grapheditor.ToolBoxGroup = ToolBoxGroup;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolBoxItem = (function () {
                    function ToolBoxItem(style, width, height, value, title, showLabel, showTitle, tags) {
                        if (style === void 0) { style = ""; }
                        if (width === void 0) { width = null; }
                        if (height === void 0) { height = null; }
                        if (value === void 0) { value = ""; }
                        if (title === void 0) { title = ""; }
                        if (showLabel === void 0) { showLabel = true; }
                        if (showTitle === void 0) { showTitle = true; }
                        if (tags === void 0) { tags = ""; }
                        this.style = "";
                        this.width = null;
                        this.height = null;
                        this.value = "";
                        this.title = "";
                        this.showLabel = true;
                        this.showTitle = true;
                        this.tags = "";
                        this.style = style;
                        this.width = width;
                        this.height = height;
                        this.value = value;
                        this.title = title;
                        this.showLabel = showLabel;
                        this.showTitle = showTitle;
                        this.tags = tags;
                    }
                    return ToolBoxItem;
                }());
                grapheditor.ToolBoxItem = ToolBoxItem;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStrip = (function () {
                    function ToolStrip() {
                        this.items = new grapheditor.List();
                    }
                    return ToolStrip;
                }());
                grapheditor.ToolStrip = ToolStrip;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var DefaultToolStrip = (function (_super) {
                    __extends(DefaultToolStrip, _super);
                    function DefaultToolStrip() {
                        var _this = _super.call(this) || this;
                        _this.init();
                        return _this;
                    }
                    DefaultToolStrip.prototype.init = function () {
                        this.init_mainMenu();
                        this.init_mainMenu_file();
                        this.init_mainMenu_file_save();
                        this.init_mainMenu_file_publish();
                        this.init_mainMenu_file_unpublish();
                        this.init_mainMenu_edit();
                        this.init_mainMenu_edit_undo();
                        this.init_mainMenu_edit_redo();
                        this.init_mainMenu_edit_cut();
                        this.init_mainMenu_edit_copy();
                        this.init_mainMenu_edit_paste();
                        this.init_mainMenu_edit_delete();
                        this.init_mainMenu_edit_duplicate();
                        this.init_mainMenu_edit_selectVertices();
                        this.init_mainMenu_edit_selectEdges();
                        this.init_mainMenu_edit_selectAll();
                        this.init_mainMenu_edit_selectNone();
                        this.init_mainMenu_edit_connectionArrows();
                        this.init_mainMenu_edit_lockUnlock();
                        this.init_mainMenu_edit_locked();
                        this.init_mainMenu_view();
                        this.init_mainMenu_view_formatPanel();
                        this.init_mainMenu_view_outline();
                        this.init_mainMenu_view_layers();
                        this.init_mainMenu_view_pageView();
                        this.init_mainMenu_view_grid();
                        this.init_mainMenu_view_connectionPoints();
                        this.init_mainMenu_view_resetView();
                        this.init_mainMenu_view_zoomIn();
                        this.init_mainMenu_view_zoomOut();
                        this.init_mainMenu_arrange();
                        this.init_mainMenu_arrange_toFront();
                        this.init_mainMenu_arrange_toBack();
                        this.init_mainMenu_arrange_align();
                        this.init_mainMenu_arrange_align_leftAlign();
                        this.init_mainMenu_arrange_align_center();
                        this.init_mainMenu_arrange_align_rightAlign();
                        this.init_mainMenu_arrange_align_topAlign();
                        this.init_mainMenu_arrange_align_middle();
                        this.init_mainMenu_arrange_align_bottomAlign();
                        this.init_mainMenu_arrange_distribute();
                        this.init_mainMenu_arrange_distribute_horizontal();
                        this.init_mainMenu_arrange_distribute_vertical();
                        this.init_mainMenu_arrange_clearWaypoints();
                        this.init_mainMenu_arrange_autosize();
                        this.init_mainMenu_help();
                        this.init_mainMenu_help_help();
                        this.init_mainMenu_help_about();
                        this.init_mainMenu_help_viewModelXml();
                        this.init_btn_save();
                        this.init_btn_edit();
                        this.init_btn_viewPanels();
                        this.init_btn_zoom();
                        this.init_view_25();
                        this.init_view_50();
                        this.init_view_75();
                        this.init_view_100();
                        this.init_view_125();
                        this.init_view_150();
                        this.init_view_200();
                        this.init_view_300();
                        this.init_view_400();
                        this.init_view_fitWindow();
                        this.init_view_fitPage();
                        this.init_view_fitTwoPages();
                        this.init_view_fitPageWidth();
                        this.init_view_customZoom();
                        this.init_btn_zoomIn();
                        this.init_btn_zoomOut();
                        this.init_btn_undo();
                        this.init_btn_redo();
                        this.init_btn_delete();
                        this.init_btn_align();
                        this.init_btn_distribute();
                        this.items.add(this.mainMenu);
                        {
                            this.mainMenu.items.add(this.mainMenu_file);
                            {
                                this.mainMenu_file.items.add(this.mainMenu_file_save);
                                this.mainMenu_file.items.add(this.mainMenu_file_publish);
                                this.mainMenu_file.items.add(this.mainMenu_file_unpublish);
                            }
                            this.mainMenu.items.add(this.mainMenu_edit);
                            {
                                this.mainMenu_edit.items.add(this.mainMenu_edit_undo);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_redo);
                                this.mainMenu_edit.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_edit.items.add(this.mainMenu_edit_cut);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_copy);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_paste);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_delete);
                                this.mainMenu_edit.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_edit.items.add(this.mainMenu_edit_duplicate);
                                this.mainMenu_edit.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_edit.items.add(this.mainMenu_edit_selectVertices);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_selectEdges);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_selectAll);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_selectNone);
                                this.mainMenu_edit.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_edit.items.add(this.mainMenu_edit_connectionArrows);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_lockUnlock);
                                this.mainMenu_edit.items.add(this.mainMenu_edit_locked);
                            }
                            this.mainMenu.items.add(this.mainMenu_view);
                            {
                                this.mainMenu_view.items.add(this.mainMenu_view_outline);
                                this.mainMenu_view.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_view.items.add(this.mainMenu_view_grid);
                                this.mainMenu_view.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_view.items.add(this.mainMenu_view_resetView);
                                this.mainMenu_view.items.add(this.mainMenu_view_zoomIn);
                                this.mainMenu_view.items.add(this.mainMenu_view_zoomOut);
                            }
                            this.mainMenu.items.add(this.mainMenu_arrange);
                            {
                                this.mainMenu_arrange.items.add(this.mainMenu_arrange_toFront);
                                this.mainMenu_arrange.items.add(this.mainMenu_arrange_toBack);
                                this.mainMenu_arrange.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_arrange.items.add(this.mainMenu_arrange_align);
                                {
                                    this.mainMenu_arrange_align.items.add(this.mainMenu_arrange_align_leftAlign);
                                    this.mainMenu_arrange_align.items.add(this.mainMenu_arrange_align_center);
                                    this.mainMenu_arrange_align.items.add(this.mainMenu_arrange_align_rightAlign);
                                    this.mainMenu_arrange_align.items.add(new grapheditor.ToolStripSeparator());
                                    this.mainMenu_arrange_align.items.add(this.mainMenu_arrange_align_topAlign);
                                    this.mainMenu_arrange_align.items.add(this.mainMenu_arrange_align_middle);
                                    this.mainMenu_arrange_align.items.add(this.mainMenu_arrange_align_bottomAlign);
                                }
                                this.mainMenu_arrange.items.add(this.mainMenu_arrange_distribute);
                                {
                                    this.mainMenu_arrange_distribute.items.add(this.mainMenu_arrange_distribute_horizontal);
                                    this.mainMenu_arrange_distribute.items.add(this.mainMenu_arrange_distribute_vertical);
                                }
                                this.mainMenu_arrange.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_arrange.items.add(this.mainMenu_arrange_clearWaypoints);
                                this.mainMenu_arrange.items.add(this.mainMenu_arrange_autosize);
                            }
                            this.mainMenu.items.add(this.mainMenu_help);
                            {
                                this.mainMenu_help.items.add(this.mainMenu_help_help);
                                this.mainMenu_help.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_help.items.add(this.mainMenu_help_viewModelXml);
                                this.mainMenu_help.items.add(new grapheditor.ToolStripSeparator());
                                this.mainMenu_help.items.add(this.mainMenu_help_about);
                            }
                        }
                        this.items.add(new grapheditor.ToolStripSeparator());
                        this.items.add(this.btn_save);
                        this.items.add(this.btn_edit);
                        {
                            this.btn_edit.items.add(this.mainMenu_edit_connectionArrows);
                            this.btn_edit.items.add(this.mainMenu_edit_lockUnlock);
                            this.btn_edit.items.add(this.mainMenu_edit_locked);
                        }
                        this.items.add(new grapheditor.ToolStripSeparator());
                        this.items.add(this.btn_zoom);
                        {
                            this.btn_zoom.items.add(this.mainMenu_view_resetView);
                            this.btn_zoom.items.add(new grapheditor.ToolStripSeparator());
                            this.btn_zoom.items.add(this.view_25);
                            this.btn_zoom.items.add(this.view_50);
                            this.btn_zoom.items.add(this.view_75);
                            this.btn_zoom.items.add(this.view_100);
                            this.btn_zoom.items.add(this.view_125);
                            this.btn_zoom.items.add(this.view_150);
                            this.btn_zoom.items.add(this.view_200);
                            this.btn_zoom.items.add(this.view_300);
                            this.btn_zoom.items.add(this.view_400);
                            this.btn_zoom.items.add(new grapheditor.ToolStripSeparator());
                            this.btn_zoom.items.add(this.view_fitWindow);
                        }
                        this.items.add(this.btn_zoomIn);
                        this.items.add(this.btn_zoomOut);
                        this.items.add(new grapheditor.ToolStripSeparator());
                        this.items.add(this.btn_undo);
                        this.items.add(this.btn_redo);
                        this.items.add(new grapheditor.ToolStripSeparator());
                        this.items.add(this.btn_align);
                        {
                            this.btn_align.items.add(this.mainMenu_arrange_align_leftAlign);
                            this.btn_align.items.add(this.mainMenu_arrange_align_center);
                            this.btn_align.items.add(this.mainMenu_arrange_align_rightAlign);
                            this.btn_align.items.add(new grapheditor.ToolStripSeparator());
                            this.btn_align.items.add(this.mainMenu_arrange_align_topAlign);
                            this.btn_align.items.add(this.mainMenu_arrange_align_middle);
                            this.btn_align.items.add(this.mainMenu_arrange_align_bottomAlign);
                        }
                        this.items.add(this.btn_distribute);
                        {
                            this.btn_distribute.items.add(this.mainMenu_arrange_distribute_horizontal);
                            this.btn_distribute.items.add(this.mainMenu_arrange_distribute_vertical);
                        }
                    };
                    DefaultToolStrip.prototype.init_mainMenu = function () {
                        this.mainMenu = new grapheditor.ToolStripDropDownButton();
                        this.mainMenu.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.mainMenu.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/menu.svg";
                        this.mainMenu.imageClassName = "pmf_iconic_svg";
                        this.mainMenu.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_mainMenu);
                    };
                    DefaultToolStrip.prototype.init_mainMenu_file = function () {
                        this.mainMenu_file = new grapheditor.ToolStripDropDownMenuItem();
                        this.mainMenu_file.resourceKey = grapheditor.ResourceKeys.pmf_file;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_file_save = function () {
                        this.mainMenu_file_save = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_file_save.resourceKey = grapheditor.ResourceKeys.pmf_save;
                        this.mainMenu_file_save.actionKey = grapheditor.ActionKeys.pmf_save;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_file_publish = function () {
                        this.mainMenu_file_publish = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_file_publish.resourceKey = grapheditor.ResourceKeys.pmf_publish;
                        this.mainMenu_file_publish.actionKey = grapheditor.ActionKeys.pmf_publish;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_file_unpublish = function () {
                        this.mainMenu_file_unpublish = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_file_unpublish.resourceKey = grapheditor.ResourceKeys.pmf_unpublish;
                        this.mainMenu_file_unpublish.actionKey = grapheditor.ActionKeys.pmf_unpublish;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_file_export = function () {
                        this.mainMenu_file_export = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_file_export.resourceKey = grapheditor.ResourceKeys.pmf_export;
                        this.mainMenu_file_export.actionKey = grapheditor.ActionKeys.pmf_export;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit = function () {
                        this.mainMenu_edit = new grapheditor.ToolStripDropDownMenuItem();
                        this.mainMenu_edit.resourceKey = grapheditor.ResourceKeys.pmf_edit;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_undo = function () {
                        this.mainMenu_edit_undo = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_undo.resourceKey = grapheditor.ResourceKeys.pmf_undo;
                        this.mainMenu_edit_undo.actionKey = grapheditor.ActionKeys.pmf_undo;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_redo = function () {
                        this.mainMenu_edit_redo = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_redo.resourceKey = grapheditor.ResourceKeys.pmf_redo;
                        this.mainMenu_edit_redo.actionKey = grapheditor.ActionKeys.pmf_redo;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_cut = function () {
                        this.mainMenu_edit_cut = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_cut.resourceKey = grapheditor.ResourceKeys.pmf_cut;
                        this.mainMenu_edit_cut.actionKey = grapheditor.ActionKeys.pmf_cut;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_copy = function () {
                        this.mainMenu_edit_copy = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_copy.resourceKey = grapheditor.ResourceKeys.pmf_copy;
                        this.mainMenu_edit_copy.actionKey = grapheditor.ActionKeys.pmf_copy;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_paste = function () {
                        this.mainMenu_edit_paste = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_paste.resourceKey = grapheditor.ResourceKeys.pmf_paste;
                        this.mainMenu_edit_paste.actionKey = grapheditor.ActionKeys.pmf_paste;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_delete = function () {
                        this.mainMenu_edit_delete = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_delete.resourceKey = grapheditor.ResourceKeys.pmf_delete;
                        this.mainMenu_edit_delete.actionKey = grapheditor.ActionKeys.pmf_delete;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_duplicate = function () {
                        this.mainMenu_edit_duplicate = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_duplicate.resourceKey = grapheditor.ResourceKeys.pmf_duplicate;
                        this.mainMenu_edit_duplicate.actionKey = grapheditor.ActionKeys.pmf_duplicate;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_selectVertices = function () {
                        this.mainMenu_edit_selectVertices = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_selectVertices.resourceKey = grapheditor.ResourceKeys.pmf_selectVertices;
                        this.mainMenu_edit_selectVertices.actionKey = grapheditor.ActionKeys.pmf_selectVertices;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_selectEdges = function () {
                        this.mainMenu_edit_selectEdges = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_selectEdges.resourceKey = grapheditor.ResourceKeys.pmf_selectEdges;
                        this.mainMenu_edit_selectEdges.actionKey = grapheditor.ActionKeys.pmf_selectEdges;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_selectAll = function () {
                        this.mainMenu_edit_selectAll = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_selectAll.resourceKey = grapheditor.ResourceKeys.pmf_selectAll;
                        this.mainMenu_edit_selectAll.actionKey = grapheditor.ActionKeys.pmf_selectAll;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_selectNone = function () {
                        this.mainMenu_edit_selectNone = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_selectNone.resourceKey = grapheditor.ResourceKeys.pmf_selectNone;
                        this.mainMenu_edit_selectNone.actionKey = grapheditor.ActionKeys.pmf_selectNone;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_connectionArrows = function () {
                        this.mainMenu_edit_connectionArrows = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_connectionArrows.resourceKey = grapheditor.ResourceKeys.pmf_connectionArrows;
                        this.mainMenu_edit_connectionArrows.actionKey = grapheditor.ActionKeys.pmf_connectionArrows;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_lockUnlock = function () {
                        this.mainMenu_edit_lockUnlock = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_lockUnlock.resourceKey = grapheditor.ResourceKeys.pmf_lockUnlock;
                        this.mainMenu_edit_lockUnlock.actionKey = grapheditor.ActionKeys.pmf_lockUnlock;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_edit_locked = function () {
                        this.mainMenu_edit_locked = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_edit_locked.resourceKey = grapheditor.ResourceKeys.pmf_locked;
                        this.mainMenu_edit_locked.actionKey = grapheditor.ActionKeys.pmf_locked;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view = function () {
                        this.mainMenu_view = new grapheditor.ToolStripDropDownMenuItem();
                        this.mainMenu_view.resourceKey = grapheditor.ResourceKeys.pmf_view;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_formatPanel = function () {
                        this.mainMenu_view_formatPanel = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_formatPanel.resourceKey = grapheditor.ResourceKeys.pmf_formatPanel;
                        this.mainMenu_view_formatPanel.actionKey = grapheditor.ActionKeys.pmf_formatPanel;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_outline = function () {
                        this.mainMenu_view_outline = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_outline.resourceKey = grapheditor.ResourceKeys.pmf_outline;
                        this.mainMenu_view_outline.actionKey = grapheditor.ActionKeys.pmf_outline;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_layers = function () {
                        this.mainMenu_view_layers = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_layers.resourceKey = grapheditor.ResourceKeys.pmf_layers;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_pageView = function () {
                        this.mainMenu_view_pageView = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_pageView.resourceKey = grapheditor.ResourceKeys.pmf_pageView;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_grid = function () {
                        this.mainMenu_view_grid = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_grid.resourceKey = grapheditor.ResourceKeys.pmf_grid;
                        this.mainMenu_view_grid.actionKey = grapheditor.ActionKeys.pmf_grid;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_connectionPoints = function () {
                        this.mainMenu_view_connectionPoints = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_connectionPoints.resourceKey = grapheditor.ResourceKeys.pmf_connectionPoints;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_resetView = function () {
                        this.mainMenu_view_resetView = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_resetView.resourceKey = grapheditor.ResourceKeys.pmf_resetView;
                        this.mainMenu_view_resetView.actionKey = grapheditor.ActionKeys.pmf_resetView;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_zoomIn = function () {
                        this.mainMenu_view_zoomIn = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_zoomIn.resourceKey = grapheditor.ResourceKeys.pmf_zoomIn;
                        this.mainMenu_view_zoomIn.actionKey = grapheditor.ActionKeys.pmf_zoomIn;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_view_zoomOut = function () {
                        this.mainMenu_view_zoomOut = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_view_zoomOut.resourceKey = grapheditor.ResourceKeys.pmf_zoomOut;
                        this.mainMenu_view_zoomOut.actionKey = grapheditor.ActionKeys.pmf_zoomOut;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange = function () {
                        this.mainMenu_arrange = new grapheditor.ToolStripDropDownMenuItem();
                        this.mainMenu_arrange.resourceKey = grapheditor.ResourceKeys.pmf_arrange;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_toFront = function () {
                        this.mainMenu_arrange_toFront = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_toFront.resourceKey = grapheditor.ResourceKeys.pmf_toFront;
                        this.mainMenu_arrange_toFront.actionKey = grapheditor.ActionKeys.pmf_toFront;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_toBack = function () {
                        this.mainMenu_arrange_toBack = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_toBack.resourceKey = grapheditor.ResourceKeys.pmf_toBack;
                        this.mainMenu_arrange_toBack.actionKey = grapheditor.ActionKeys.pmf_toBack;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_align = function () {
                        this.mainMenu_arrange_align = new grapheditor.ToolStripDropDownMenuItem();
                        this.mainMenu_arrange_align.resourceKey = grapheditor.ResourceKeys.pmf_align;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_align_leftAlign = function () {
                        this.mainMenu_arrange_align_leftAlign = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_align_leftAlign.resourceKey = grapheditor.ResourceKeys.pmf_leftAlign;
                        this.mainMenu_arrange_align_leftAlign.actionKey = grapheditor.ActionKeys.pmf_leftAlign;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_align_center = function () {
                        this.mainMenu_arrange_align_center = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_align_center.resourceKey = grapheditor.ResourceKeys.pmf_center;
                        this.mainMenu_arrange_align_center.actionKey = grapheditor.ActionKeys.pmf_center;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_align_rightAlign = function () {
                        this.mainMenu_arrange_align_rightAlign = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_align_rightAlign.resourceKey = grapheditor.ResourceKeys.pmf_rightAlign;
                        this.mainMenu_arrange_align_rightAlign.actionKey = grapheditor.ActionKeys.pmf_rightAlign;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_align_topAlign = function () {
                        this.mainMenu_arrange_align_topAlign = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_align_topAlign.resourceKey = grapheditor.ResourceKeys.pmf_topAlign;
                        this.mainMenu_arrange_align_topAlign.actionKey = grapheditor.ActionKeys.pmf_topAlign;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_align_middle = function () {
                        this.mainMenu_arrange_align_middle = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_align_middle.resourceKey = grapheditor.ResourceKeys.pmf_middle;
                        this.mainMenu_arrange_align_middle.actionKey = grapheditor.ActionKeys.pmf_middle;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_align_bottomAlign = function () {
                        this.mainMenu_arrange_align_bottomAlign = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_align_bottomAlign.resourceKey = grapheditor.ResourceKeys.pmf_bottomAlign;
                        this.mainMenu_arrange_align_bottomAlign.actionKey = grapheditor.ActionKeys.pmf_bottomAlign;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_distribute = function () {
                        this.mainMenu_arrange_distribute = new grapheditor.ToolStripDropDownMenuItem();
                        this.mainMenu_arrange_distribute.resourceKey = grapheditor.ResourceKeys.pmf_distribute;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_distribute_horizontal = function () {
                        this.mainMenu_arrange_distribute_horizontal = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_distribute_horizontal.resourceKey = grapheditor.ResourceKeys.pmf_horizontal;
                        this.mainMenu_arrange_distribute_horizontal.actionKey = grapheditor.ActionKeys.pmf_horizontal;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_distribute_vertical = function () {
                        this.mainMenu_arrange_distribute_vertical = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_distribute_vertical.resourceKey = grapheditor.ResourceKeys.pmf_vertical;
                        this.mainMenu_arrange_distribute_vertical.actionKey = grapheditor.ActionKeys.pmf_vertical;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_clearWaypoints = function () {
                        this.mainMenu_arrange_clearWaypoints = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_clearWaypoints.resourceKey = grapheditor.ResourceKeys.pmf_clearWaypoints;
                        this.mainMenu_arrange_clearWaypoints.actionKey = grapheditor.ActionKeys.pmf_clearWaypoints;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_arrange_autosize = function () {
                        this.mainMenu_arrange_autosize = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_arrange_autosize.resourceKey = grapheditor.ResourceKeys.pmf_autosize;
                        this.mainMenu_arrange_autosize.actionKey = grapheditor.ActionKeys.pmf_autosize;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_help = function () {
                        this.mainMenu_help = new grapheditor.ToolStripDropDownMenuItem();
                        this.mainMenu_help.resourceKey = grapheditor.ResourceKeys.pmf_help;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_help_help = function () {
                        this.mainMenu_help_help = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_help_help.resourceKey = grapheditor.ResourceKeys.pmf_help;
                        this.mainMenu_help_help.actionKey = grapheditor.ActionKeys.pmf_help;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_help_viewModelXml = function () {
                        this.mainMenu_help_viewModelXml = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_help_viewModelXml.resourceKey = grapheditor.ResourceKeys.pmf_viewModelXml;
                        this.mainMenu_help_viewModelXml.actionKey = grapheditor.ActionKeys.pmf_viewModelXml;
                    };
                    DefaultToolStrip.prototype.init_mainMenu_help_about = function () {
                        this.mainMenu_help_about = new grapheditor.ToolStripMenuItem();
                        this.mainMenu_help_about.resourceKey = grapheditor.ResourceKeys.pmf_about;
                        this.mainMenu_help_about.actionKey = grapheditor.ActionKeys.pmf_about;
                    };
                    DefaultToolStrip.prototype.init_btn_save = function () {
                        this.btn_save = new grapheditor.ToolStripButton();
                        this.btn_save.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_save.imageSrc = grapheditor.Init.IMAGE_PATH + "/save.png";
                        this.btn_save.actionKey = grapheditor.ActionKeys.pmf_save;
                        this.btn_save.resourceKey = grapheditor.ResourceKeys.pmf_save;
                    };
                    DefaultToolStrip.prototype.init_btn_edit = function () {
                        this.btn_edit = new grapheditor.ToolStripDropDownButton();
                        this.btn_edit.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_edit.imageSrc = grapheditor.Init.IMAGE_PATH + "/edit.png";
                        this.btn_edit.resourceKey = grapheditor.ResourceKeys.pmf_edit;
                        this.btn_edit.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_edit);
                    };
                    DefaultToolStrip.prototype.init_btn_publish = function () {
                        this.btn_publish = new grapheditor.ToolStripButton();
                        this.btn_publish.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_publish.imageSrc = grapheditor.Init.IMAGE_PATH + "/publish.png";
                        this.btn_publish.actionKey = grapheditor.ActionKeys.pmf_publish;
                        this.btn_publish.resourceKey = grapheditor.ResourceKeys.pmf_publish;
                        this.btn_publish.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_publish);
                    };
                    DefaultToolStrip.prototype.init_btn_unpublish = function () {
                        this.btn_unpublish = new grapheditor.ToolStripButton();
                        this.btn_unpublish.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_unpublish.imageSrc = grapheditor.Init.IMAGE_PATH + "/unpublish.png";
                        this.btn_unpublish.actionKey = grapheditor.ActionKeys.pmf_unpublish;
                        this.btn_unpublish.resourceKey = grapheditor.ResourceKeys.pmf_unpublish;
                        this.btn_unpublish.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_unpublish);
                    };
                    DefaultToolStrip.prototype.init_btn_viewPanels = function () {
                        this.btn_viewPanels = new grapheditor.ToolStripDropDownButton();
                        this.btn_viewPanels.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_viewPanels.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/browser.svg";
                        this.btn_viewPanels.imageClassName = "pmf_iconic_svg";
                        this.btn_viewPanels.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_view);
                    };
                    DefaultToolStrip.prototype.init_btn_zoom = function () {
                        this.btn_zoom = new grapheditor.ToolStripDropDownButton();
                        this.btn_zoom.displayStyle = grapheditor.ToolStripItemDisplayStyle.Text;
                        this.btn_zoom.text = "100%";
                        this.btn_zoom.resourceKey = grapheditor.ResourceKeys.pmf_zoom;
                        this.btn_zoom.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_zoom);
                    };
                    DefaultToolStrip.prototype.init_view_25 = function () {
                        this.view_25 = new grapheditor.ToolStripMenuItem();
                        this.view_25.text = "25%";
                        this.view_25.actionKey = grapheditor.ActionKeys.pmf_view_25;
                    };
                    DefaultToolStrip.prototype.init_view_50 = function () {
                        this.view_50 = new grapheditor.ToolStripMenuItem();
                        this.view_50.text = "50%";
                        this.view_50.actionKey = grapheditor.ActionKeys.pmf_view_50;
                    };
                    DefaultToolStrip.prototype.init_view_75 = function () {
                        this.view_75 = new grapheditor.ToolStripMenuItem();
                        this.view_75.text = "75%";
                        this.view_75.actionKey = grapheditor.ActionKeys.pmf_view_75;
                    };
                    DefaultToolStrip.prototype.init_view_100 = function () {
                        this.view_100 = new grapheditor.ToolStripMenuItem();
                        this.view_100.text = "100%";
                        this.view_100.actionKey = grapheditor.ActionKeys.pmf_view_100;
                    };
                    DefaultToolStrip.prototype.init_view_125 = function () {
                        this.view_125 = new grapheditor.ToolStripMenuItem();
                        this.view_125.text = "125%";
                        this.view_125.actionKey = grapheditor.ActionKeys.pmf_view_125;
                    };
                    DefaultToolStrip.prototype.init_view_150 = function () {
                        this.view_150 = new grapheditor.ToolStripMenuItem();
                        this.view_150.text = "150%";
                        this.view_150.actionKey = grapheditor.ActionKeys.pmf_view_150;
                    };
                    DefaultToolStrip.prototype.init_view_200 = function () {
                        this.view_200 = new grapheditor.ToolStripMenuItem();
                        this.view_200.text = "200%";
                        this.view_200.actionKey = grapheditor.ActionKeys.pmf_view_200;
                    };
                    DefaultToolStrip.prototype.init_view_300 = function () {
                        this.view_300 = new grapheditor.ToolStripMenuItem();
                        this.view_300.text = "300%";
                        this.view_300.actionKey = grapheditor.ActionKeys.pmf_view_300;
                    };
                    DefaultToolStrip.prototype.init_view_400 = function () {
                        this.view_400 = new grapheditor.ToolStripMenuItem();
                        this.view_400.text = "400%";
                        this.view_400.actionKey = grapheditor.ActionKeys.pmf_view_400;
                    };
                    DefaultToolStrip.prototype.init_view_fitWindow = function () {
                        this.view_fitWindow = new grapheditor.ToolStripMenuItem();
                        this.view_fitWindow.resourceKey = grapheditor.ResourceKeys.pmf_fitWindow;
                        this.view_fitWindow.actionKey = grapheditor.ActionKeys.pmf_fitWindow;
                    };
                    DefaultToolStrip.prototype.init_view_fitPage = function () {
                        this.view_fitPage = new grapheditor.ToolStripMenuItem();
                        this.view_fitPage.resourceKey = grapheditor.ResourceKeys.pmf_fitPage;
                    };
                    DefaultToolStrip.prototype.init_view_fitTwoPages = function () {
                        this.view_fitTwoPages = new grapheditor.ToolStripMenuItem();
                        this.view_fitTwoPages.resourceKey = grapheditor.ResourceKeys.pmf_fitTwoPages;
                    };
                    DefaultToolStrip.prototype.init_view_fitPageWidth = function () {
                        this.view_fitPageWidth = new grapheditor.ToolStripMenuItem();
                        this.view_fitPageWidth.resourceKey = grapheditor.ResourceKeys.pmf_fitPageWidth;
                    };
                    DefaultToolStrip.prototype.init_view_customZoom = function () {
                        this.view_customZoom = new grapheditor.ToolStripMenuItem();
                        this.view_customZoom.resourceKey = grapheditor.ResourceKeys.pmf_customZoom;
                    };
                    DefaultToolStrip.prototype.init_btn_zoomIn = function () {
                        this.btn_zoomIn = new grapheditor.ToolStripButton();
                        this.btn_zoomIn.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_zoomIn.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/zoom-in.svg";
                        this.btn_zoomIn.imageClassName = "pmf_iconic_svg";
                        this.btn_zoomIn.actionKey = grapheditor.ActionKeys.pmf_zoomIn;
                        this.btn_zoomIn.resourceKey = grapheditor.ResourceKeys.pmf_zoomIn;
                    };
                    DefaultToolStrip.prototype.init_btn_zoomOut = function () {
                        this.btn_zoomOut = new grapheditor.ToolStripButton();
                        this.btn_zoomOut.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_zoomOut.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/zoom-out.svg";
                        this.btn_zoomOut.imageClassName = "pmf_iconic_svg";
                        this.btn_zoomOut.actionKey = grapheditor.ActionKeys.pmf_zoomOut;
                        this.btn_zoomOut.resourceKey = grapheditor.ResourceKeys.pmf_zoomOut;
                    };
                    DefaultToolStrip.prototype.init_btn_undo = function () {
                        this.btn_undo = new grapheditor.ToolStripButton();
                        this.btn_undo.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_undo.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/action-undo.svg";
                        this.btn_undo.imageClassName = "pmf_iconic_svg";
                        this.btn_undo.actionKey = grapheditor.ActionKeys.pmf_undo;
                        this.btn_undo.resourceKey = grapheditor.ResourceKeys.pmf_undo;
                    };
                    DefaultToolStrip.prototype.init_btn_redo = function () {
                        this.btn_redo = new grapheditor.ToolStripButton();
                        this.btn_redo.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_redo.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/action-redo.svg";
                        this.btn_redo.imageClassName = "pmf_iconic_svg";
                        this.btn_redo.actionKey = grapheditor.ActionKeys.pmf_redo;
                        this.btn_redo.resourceKey = grapheditor.ResourceKeys.pmf_redo;
                    };
                    DefaultToolStrip.prototype.init_btn_delete = function () {
                        this.btn_delete = new grapheditor.ToolStripButton();
                        this.btn_delete.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_delete.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/trash.svg";
                        this.btn_delete.imageClassName = "pmf_iconic_svg";
                        this.btn_delete.actionKey = grapheditor.ActionKeys.pmf_delete;
                        this.btn_delete.resourceKey = grapheditor.ResourceKeys.pmf_delete;
                    };
                    DefaultToolStrip.prototype.init_btn_align = function () {
                        this.btn_align = new grapheditor.ToolStripDropDownButton();
                        this.btn_align.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_align.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/align-left.svg";
                        this.btn_align.imageClassName = "pmf_iconic_svg";
                        this.btn_align.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_align);
                    };
                    DefaultToolStrip.prototype.init_btn_distribute = function () {
                        this.btn_distribute = new grapheditor.ToolStripDropDownButton();
                        this.btn_distribute.displayStyle = grapheditor.ToolStripItemDisplayStyle.Image;
                        this.btn_distribute.imageSrc = grapheditor.Init.IMAGE_PATH + "/iconic/svg/grid-four-up.svg";
                        this.btn_distribute.imageClassName = "pmf_iconic_svg";
                        this.btn_distribute.toolTipText = mxResources.get(grapheditor.ResourceKeys.pmf_distribute);
                    };
                    return DefaultToolStrip;
                }(grapheditor.ToolStrip));
                grapheditor.DefaultToolStrip = DefaultToolStrip;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripItem = (function () {
                    function ToolStripItem() {
                    }
                    return ToolStripItem;
                }());
                grapheditor.ToolStripItem = ToolStripItem;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripActionItem = (function (_super) {
                    __extends(ToolStripActionItem, _super);
                    function ToolStripActionItem() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return ToolStripActionItem;
                }(grapheditor.ToolStripItem));
                grapheditor.ToolStripActionItem = ToolStripActionItem;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripButton = (function (_super) {
                    __extends(ToolStripButton, _super);
                    function ToolStripButton() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.displayStyle = grapheditor.ToolStripItemDisplayStyle.ImageAndText;
                        return _this;
                    }
                    return ToolStripButton;
                }(grapheditor.ToolStripActionItem));
                grapheditor.ToolStripButton = ToolStripButton;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripDropDownItem = (function (_super) {
                    __extends(ToolStripDropDownItem, _super);
                    function ToolStripDropDownItem() {
                        var _this = _super.call(this) || this;
                        _this.items = new grapheditor.List();
                        return _this;
                    }
                    return ToolStripDropDownItem;
                }(grapheditor.ToolStripItem));
                grapheditor.ToolStripDropDownItem = ToolStripDropDownItem;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripDropDownButton = (function (_super) {
                    __extends(ToolStripDropDownButton, _super);
                    function ToolStripDropDownButton() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.displayStyle = grapheditor.ToolStripItemDisplayStyle.ImageAndText;
                        return _this;
                    }
                    return ToolStripDropDownButton;
                }(grapheditor.ToolStripDropDownItem));
                grapheditor.ToolStripDropDownButton = ToolStripDropDownButton;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripItemDisplayStyle;
                (function (ToolStripItemDisplayStyle) {
                    ToolStripItemDisplayStyle["Text"] = "Text";
                    ToolStripItemDisplayStyle["Image"] = "Image";
                    ToolStripItemDisplayStyle["ImageAndText"] = "ImageAndText";
                })(ToolStripItemDisplayStyle = grapheditor.ToolStripItemDisplayStyle || (grapheditor.ToolStripItemDisplayStyle = {}));
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripDropDownMenuItem = (function (_super) {
                    __extends(ToolStripDropDownMenuItem, _super);
                    function ToolStripDropDownMenuItem() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return ToolStripDropDownMenuItem;
                }(grapheditor.ToolStripDropDownItem));
                grapheditor.ToolStripDropDownMenuItem = ToolStripDropDownMenuItem;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripMenuItem = (function (_super) {
                    __extends(ToolStripMenuItem, _super);
                    function ToolStripMenuItem() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return ToolStripMenuItem;
                }(grapheditor.ToolStripActionItem));
                grapheditor.ToolStripMenuItem = ToolStripMenuItem;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ToolStripSeparator = (function (_super) {
                    __extends(ToolStripSeparator, _super);
                    function ToolStripSeparator() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return ToolStripSeparator;
                }(grapheditor.ToolStripItem));
                grapheditor.ToolStripSeparator = ToolStripSeparator;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Dictionary = (function () {
                    function Dictionary() {
                        this._keys = new grapheditor.List();
                        this._values = new grapheditor.List();
                    }
                    Dictionary.prototype.keys = function () {
                        return this._keys.array.concat();
                    };
                    Dictionary.prototype.values = function () {
                        return this._values.array.concat();
                    };
                    Dictionary.prototype.getValue = function (key) {
                        var index = this._keys.indexOf(key);
                        if (index >= 0)
                            return this._values.array[index];
                        return null;
                    };
                    Dictionary.prototype.add = function (key, value) {
                        if (this._keys.contains(key))
                            throw Error("The key \"" + key + "\" is exist.");
                        this._keys.add(key);
                        this._values.add(value);
                    };
                    Dictionary.prototype.remove = function (key) {
                        var index = this._keys.indexOf(key);
                        if (index < 0)
                            return;
                        this._keys.removeAt(index);
                        this._values.removeAt(index);
                    };
                    Dictionary.prototype.containsKey = function (key) {
                        return this._keys.contains(key);
                    };
                    Dictionary.prototype.count = function () {
                        return this._keys.count();
                    };
                    Dictionary.prototype.clear = function () {
                        this._keys = new grapheditor.List();
                        this._values = new grapheditor.List();
                    };
                    return Dictionary;
                }());
                grapheditor.Dictionary = Dictionary;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var KeyCodes;
                (function (KeyCodes) {
                    KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
                    KeyCodes[KeyCodes["Esc"] = 27] = "Esc";
                    KeyCodes[KeyCodes["Left"] = 37] = "Left";
                    KeyCodes[KeyCodes["Up"] = 38] = "Up";
                    KeyCodes[KeyCodes["Right"] = 39] = "Right";
                    KeyCodes[KeyCodes["Down"] = 40] = "Down";
                    KeyCodes[KeyCodes["Del"] = 46] = "Del";
                    KeyCodes[KeyCodes["_0"] = 48] = "_0";
                    KeyCodes[KeyCodes["_1"] = 49] = "_1";
                    KeyCodes[KeyCodes["_2"] = 50] = "_2";
                    KeyCodes[KeyCodes["_3"] = 51] = "_3";
                    KeyCodes[KeyCodes["_4"] = 52] = "_4";
                    KeyCodes[KeyCodes["_5"] = 53] = "_5";
                    KeyCodes[KeyCodes["_6"] = 54] = "_6";
                    KeyCodes[KeyCodes["_7"] = 55] = "_7";
                    KeyCodes[KeyCodes["_8"] = 56] = "_8";
                    KeyCodes[KeyCodes["_9"] = 57] = "_9";
                    KeyCodes[KeyCodes["A"] = 65] = "A";
                    KeyCodes[KeyCodes["B"] = 66] = "B";
                    KeyCodes[KeyCodes["C"] = 67] = "C";
                    KeyCodes[KeyCodes["D"] = 68] = "D";
                    KeyCodes[KeyCodes["E"] = 69] = "E";
                    KeyCodes[KeyCodes["F"] = 70] = "F";
                    KeyCodes[KeyCodes["G"] = 71] = "G";
                    KeyCodes[KeyCodes["H"] = 72] = "H";
                    KeyCodes[KeyCodes["I"] = 73] = "I";
                    KeyCodes[KeyCodes["J"] = 74] = "J";
                    KeyCodes[KeyCodes["K"] = 75] = "K";
                    KeyCodes[KeyCodes["L"] = 76] = "L";
                    KeyCodes[KeyCodes["M"] = 77] = "M";
                    KeyCodes[KeyCodes["N"] = 78] = "N";
                    KeyCodes[KeyCodes["O"] = 79] = "O";
                    KeyCodes[KeyCodes["P"] = 80] = "P";
                    KeyCodes[KeyCodes["Q"] = 81] = "Q";
                    KeyCodes[KeyCodes["R"] = 82] = "R";
                    KeyCodes[KeyCodes["S"] = 83] = "S";
                    KeyCodes[KeyCodes["T"] = 84] = "T";
                    KeyCodes[KeyCodes["U"] = 85] = "U";
                    KeyCodes[KeyCodes["V"] = 86] = "V";
                    KeyCodes[KeyCodes["W"] = 87] = "W";
                    KeyCodes[KeyCodes["X"] = 88] = "X";
                    KeyCodes[KeyCodes["Y"] = 89] = "Y";
                    KeyCodes[KeyCodes["Z"] = 90] = "Z";
                    KeyCodes[KeyCodes["F1"] = 112] = "F1";
                    KeyCodes[KeyCodes["F2"] = 113] = "F2";
                    KeyCodes[KeyCodes["F3"] = 114] = "F3";
                    KeyCodes[KeyCodes["F4"] = 115] = "F4";
                    KeyCodes[KeyCodes["F5"] = 116] = "F5";
                    KeyCodes[KeyCodes["F6"] = 117] = "F6";
                    KeyCodes[KeyCodes["F7"] = 118] = "F7";
                    KeyCodes[KeyCodes["F8"] = 119] = "F8";
                    KeyCodes[KeyCodes["F9"] = 120] = "F9";
                    KeyCodes[KeyCodes["F10"] = 121] = "F10";
                    KeyCodes[KeyCodes["F11"] = 122] = "F11";
                    KeyCodes[KeyCodes["F12"] = 123] = "F12";
                    KeyCodes[KeyCodes["Plus"] = 187] = "Plus";
                    KeyCodes[KeyCodes["Minus"] = 189] = "Minus";
                })(KeyCodes = grapheditor.KeyCodes || (grapheditor.KeyCodes = {}));
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var List = (function () {
                    function List() {
                        this.array = new Array();
                    }
                    List.prototype.count = function () {
                        return this.array.length;
                    };
                    List.prototype.add = function (item) {
                        this.array.push(item);
                    };
                    List.prototype.addRange = function (items) {
                        this.array = this.array.concat(items);
                    };
                    List.prototype.clear = function () {
                        this.array = new Array();
                    };
                    List.prototype.contains = function (item) {
                        return grapheditor.Utils.contains(this.array, item);
                    };
                    List.prototype.indexOf = function (item) {
                        return grapheditor.Utils.indexOf(this.array, item);
                    };
                    List.prototype.insert = function (index, item) {
                        if (index < 0)
                            index = 0;
                        this.array.splice(index, 0, item);
                    };
                    List.prototype.remove = function (item) {
                        return grapheditor.Utils.remove(this.array, item);
                    };
                    List.prototype.removeAt = function (index) {
                        if (index < 0)
                            return;
                        this.array.splice(index, 1);
                    };
                    return List;
                }());
                grapheditor.List = List;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Utils = (function () {
                    function Utils() {
                    }
                    Utils.hasOwnProperty = function (obj, prop) {
                        if (obj == null)
                            return false;
                        return Object.prototype.hasOwnProperty.call(obj, prop);
                    };
                    Utils.defaultEquals = function (a, b) {
                        return a === b;
                    };
                    Utils.indexOf = function (array, item, equalsFunction) {
                        var equals = equalsFunction || Utils.defaultEquals;
                        var length = array.length;
                        for (var i = 0; i < length; i++) {
                            if (equals(array[i], item)) {
                                return i;
                            }
                        }
                        return -1;
                    };
                    Utils.lastIndexOf = function (array, item, equalsFunction) {
                        var equals = equalsFunction || Utils.defaultEquals;
                        var length = array.length;
                        for (var i = length - 1; i >= 0; i--) {
                            if (equals(array[i], item)) {
                                return i;
                            }
                        }
                        return -1;
                    };
                    Utils.contains = function (array, item, equalsFunction) {
                        return Utils.indexOf(array, item, equalsFunction) >= 0;
                    };
                    Utils.remove = function (array, item, equalsFunction) {
                        var index = Utils.indexOf(array, item, equalsFunction);
                        if (index < 0) {
                            return false;
                        }
                        array.splice(index, 1);
                        return true;
                    };
                    Utils.equals = function (array1, array2, equalsFunction) {
                        var equals = equalsFunction || Utils.defaultEquals;
                        if (array1.length !== array2.length) {
                            return false;
                        }
                        var length = array1.length;
                        for (var i = 0; i < length; i++) {
                            if (!equals(array1[i], array2[i])) {
                                return false;
                            }
                        }
                        return true;
                    };
                    Utils.keyboardMap = [
                        "",
                        "",
                        "",
                        "CANCEL",
                        "",
                        "",
                        "HELP",
                        "",
                        "BACK_SPACE",
                        "TAB",
                        "",
                        "",
                        "CLEAR",
                        "Enter",
                        "ENTER_SPECIAL",
                        "",
                        "SHIFT",
                        "CONTROL",
                        "ALT",
                        "PAUSE",
                        "CAPS_LOCK",
                        "KANA",
                        "EISU",
                        "JUNJA",
                        "FINAL",
                        "HANJA",
                        "",
                        "Esc",
                        "CONVERT",
                        "NONCONVERT",
                        "ACCEPT",
                        "MODECHANGE",
                        "SPACE",
                        "PAGE_UP",
                        "PAGE_DOWN",
                        "END",
                        "HOME",
                        "Left",
                        "Up",
                        "Right",
                        "Down",
                        "SELECT",
                        "PRINT",
                        "EXECUTE",
                        "PRINTSCREEN",
                        "INSERT",
                        "Del",
                        "",
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "COLON",
                        "SEMICOLON",
                        "LESS_THAN",
                        "EQUALS",
                        "GREATER_THAN",
                        "QUESTION_MARK",
                        "AT",
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I",
                        "J",
                        "K",
                        "L",
                        "M",
                        "N",
                        "O",
                        "P",
                        "Q",
                        "R",
                        "S",
                        "T",
                        "U",
                        "V",
                        "W",
                        "X",
                        "Y",
                        "Z",
                        "OS_KEY",
                        "",
                        "CONTEXT_MENU",
                        "",
                        "SLEEP",
                        "NUMPAD0",
                        "NUMPAD1",
                        "NUMPAD2",
                        "NUMPAD3",
                        "NUMPAD4",
                        "NUMPAD5",
                        "NUMPAD6",
                        "NUMPAD7",
                        "NUMPAD8",
                        "NUMPAD9",
                        "MULTIPLY",
                        "ADD",
                        "SEPARATOR",
                        "SUBTRACT",
                        "DECIMAL",
                        "DIVIDE",
                        "F1",
                        "F2",
                        "F3",
                        "F4",
                        "F5",
                        "F6",
                        "F7",
                        "F8",
                        "F9",
                        "F10",
                        "F11",
                        "F12",
                        "F13",
                        "F14",
                        "F15",
                        "F16",
                        "F17",
                        "F18",
                        "F19",
                        "F20",
                        "F21",
                        "F22",
                        "F23",
                        "F24",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "NUM_LOCK",
                        "SCROLL_LOCK",
                        "WIN_OEM_FJ_JISHO",
                        "WIN_OEM_FJ_MASSHOU",
                        "WIN_OEM_FJ_TOUROKU",
                        "WIN_OEM_FJ_LOYA",
                        "WIN_OEM_FJ_ROYA",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "CIRCUMFLEX",
                        "EXCLAMATION",
                        "DOUBLE_QUOTE",
                        "HASH",
                        "DOLLAR",
                        "PERCENT",
                        "AMPERSAND",
                        "UNDERSCORE",
                        "OPEN_PAREN",
                        "CLOSE_PAREN",
                        "ASTERISK",
                        "PLUS",
                        "PIPE",
                        "HYPHEN_MINUS",
                        "OPEN_CURLY_BRACKET",
                        "CLOSE_CURLY_BRACKET",
                        "TILDE",
                        "",
                        "",
                        "",
                        "",
                        "VOLUME_MUTE",
                        "VOLUME_DOWN",
                        "VOLUME_UP",
                        "",
                        "",
                        "SEMICOLON",
                        "＋",
                        "COMMA",
                        "－",
                        "PERIOD",
                        "SLASH",
                        "BACK_QUOTE",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "OPEN_BRACKET",
                        "BACK_SLASH",
                        "CLOSE_BRACKET",
                        "QUOTE",
                        "",
                        "META",
                        "ALTGR",
                        "",
                        "WIN_ICO_HELP",
                        "WIN_ICO_00",
                        "",
                        "WIN_ICO_CLEAR",
                        "",
                        "",
                        "WIN_OEM_RESET",
                        "WIN_OEM_JUMP",
                        "WIN_OEM_PA1",
                        "WIN_OEM_PA2",
                        "WIN_OEM_PA3",
                        "WIN_OEM_WSCTRL",
                        "WIN_OEM_CUSEL",
                        "WIN_OEM_ATTN",
                        "WIN_OEM_FINISH",
                        "WIN_OEM_COPY",
                        "WIN_OEM_AUTO",
                        "WIN_OEM_ENLW",
                        "WIN_OEM_BACKTAB",
                        "ATTN",
                        "CRSEL",
                        "EXSEL",
                        "EREOF",
                        "PLAY",
                        "ZOOM",
                        "",
                        "PA1",
                        "WIN_OEM_CLEAR",
                        ""
                    ];
                    return Utils;
                }());
                grapheditor.Utils = Utils;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var BpmnMxGraphAdaper = (function () {
                    function BpmnMxGraphAdaper() {
                    }
                    BpmnMxGraphAdaper.setBpmnModelIntoGraph = function (graph, bpmnModelJsonStr) {
                        var bpmnModel = null;
                        if (graph['bpmnModel'] == undefined) {
                            bpmnModel = new inspur.gsp.pmf.bpmn.model.BpmnModel();
                        }
                        else {
                            bpmnModel = graph['bpmnModel'];
                        }
                        if (bpmnModelJsonStr) {
                            bpmnModel.LoadFromJson(bpmnModelJsonStr);
                            bpmnModel.DefaultDiagram.BpmnPlane.BpmnElementId = bpmnModel.DefaultProcess.Id;
                            bpmnModel.TargetNamespace = JSON.parse(bpmnModelJsonStr)['TargetNamespace'];
                            graph.getModel().beginUpdate();
                            graph.addCells(BpmnMxGraphAdaper.flowElement2MxGraphCell(bpmnModel.DefaultProcess.GetFlowElements(), bpmnModel.DefaultDiagram.BpmnPlane), graph.getDefaultParent());
                            graph.getModel().endUpdate();
                        }
                        else {
                            bpmnModel.TargetNamespace = "UnitTest_Namespace";
                            bpmnModel.MetadataContentID = "MetadataContentID";
                            bpmnModel.MetadataContentCode = "MetadataContentCode";
                            bpmnModel.MetadataContentName = "MetadataContentName";
                            bpmnModel.DefaultProcess = new inspur.gsp.pmf.bpmn.model.Process(bpmnModel);
                            bpmnModel.DefaultDiagram = new inspur.gsp.pmf.bpmn.model.BPMNDiagram(bpmnModel);
                            bpmnModel.DefaultDiagram.BpmnPlane.BpmnElementId = bpmnModel.DefaultProcess.Id;
                        }
                        graph['bpmnModel'] = bpmnModel;
                        console.log(graph);
                    };
                    BpmnMxGraphAdaper.flowElement2MxGraphCell = function (flowElementsMap, bpmnPlane) {
                        var cells = [];
                        var vertexMap = {};
                        var doc = mxUtils.createXmlDocument();
                        var flowElements = [];
                        for (var i in flowElementsMap) {
                            flowElements.push(flowElementsMap[i]);
                        }
                        var diagramDicForFlowElement = {};
                        var diagramElements = bpmnPlane.GetDiagramElements();
                        for (var i = 0; i < diagramElements.length; i++) {
                            diagramDicForFlowElement[diagramElements[i].BpmnElementId] = diagramElements[i];
                        }
                        console.log(diagramDicForFlowElement);
                        BpmnMxGraphAdaper.createVertex(flowElements, diagramDicForFlowElement, doc, vertexMap, cells);
                        BpmnMxGraphAdaper.createEdge(flowElements, diagramDicForFlowElement, doc, vertexMap, cells);
                        return cells;
                    };
                    BpmnMxGraphAdaper.createVertex = function (bpmnElements, diagramDicForFlowElement, doc, vertexMap, cells) {
                        if (!bpmnElements) {
                            return;
                        }
                        for (var i = 0; i < bpmnElements.length; i++) {
                            if (bpmnElements[i]["ClrTypeID"] == "bpmn.SequenceFlow") {
                                continue;
                            }
                            var cell = new mxCell();
                            var flowElement = bpmnElements[i];
                            var value = doc.createElement("CustomProperty");
                            cell.setEdge(false);
                            cell.setVertex(true);
                            var geometry = new mxGeometry();
                            var diagramElement = diagramDicForFlowElement[flowElement.Id];
                            if (diagramElement != null) {
                                geometry.x = diagramElement.Bounds.X;
                                geometry.y = diagramElement.Bounds.Y;
                                geometry.height = diagramElement.Bounds.Height;
                                geometry.width = diagramElement.Bounds.Width;
                            }
                            else {
                                geometry.height = 40;
                                geometry.width = 40;
                            }
                            cell.setGeometry(geometry);
                            cell.setValue(value);
                            cell.id = flowElement.Id;
                            cell.value['flowElement'] = flowElement;
                            cell.value['diagramElement'] = diagramElement;
                            BpmnMxGraphAdaper.setVertexStyle(cell, flowElement.ClrTypeID);
                            vertexMap[flowElement.Id] = cell;
                            cells.push(cell);
                            bpmnElements.splice(i, 1);
                            i--;
                        }
                    };
                    BpmnMxGraphAdaper.setVertexStyle = function (cell, ClrTypeID) {
                        switch (ClrTypeID) {
                            case "bpmn.StartEvent":
                                cell.setStyle('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/StartEvent.png;verticalLabelPosition=bottom;");
                                break;
                            case "bpmn.EndEvent":
                                cell.setStyle('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/EndEvent.png;verticalLabelPosition=bottom;");
                                break;
                            case "aif.Flowchart.BeCreationRuleNode":
                                cell.setStyle('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/BeCreationRuleNode.png;verticalLabelPosition=bottom;");
                                break;
                            case "aif.Flowchart.BeCreationProcessNode":
                                cell.setStyle('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/BeCreationProcessNode.png;verticalLabelPosition=bottom;");
                                break;
                            case "aif.Flowchart.BeNode":
                                cell.setStyle('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/BeNode.png;verticalLabelPosition=bottom;");
                                break;
                            default:
                                break;
                        }
                    };
                    BpmnMxGraphAdaper.createEdge = function (bpmnElements, diagramDicForFlowElement, doc, vertexMap, cells) {
                        if (!bpmnElements) {
                            return;
                        }
                        var _loop_1 = function (i) {
                            if (bpmnElements[i]["ClrTypeID"] != "bpmn.SequenceFlow") {
                                return "continue";
                            }
                            var cell = new mxCell();
                            var flowElement = bpmnElements[i];
                            var value = doc.createElement("CustomProperty");
                            cell.setEdge(true);
                            cell.setVertex(false);
                            var geometry = new mxGeometry();
                            var diagramElement = diagramDicForFlowElement[flowElement.Id];
                            if (diagramElement) {
                                diagramElement.Points.forEach(function (point) {
                                    geometry.points.push(new mxPoint(point.X, point.Y));
                                });
                                cell.source = vertexMap[diagramElement.SourceShapeElementId];
                                cell.target = vertexMap[diagramElement.TargetShapeElementId];
                            }
                            else {
                                cell.source = vertexMap[flowElement.SourceRef];
                                cell.target = vertexMap[flowElement.TargetRef];
                            }
                            cell.setGeometry(geometry);
                            cell.setStyle("sourcePort=e;targetPort=w;edgeStyle=straightEdgeStyle");
                            cell.setValue(value);
                            cell.id = flowElement.Id;
                            cell.value['flowElement'] = flowElement;
                            cell.value['diagramElement'] = diagramElement;
                            cells.push(cell);
                        };
                        for (var i = 0; i < bpmnElements.length; i++) {
                            _loop_1(i);
                        }
                    };
                    BpmnMxGraphAdaper.setBpmnElementIntoMxEdge = function (graph, cells) {
                        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
                            var cell = cells_1[_i];
                            var doc = mxUtils.createXmlDocument();
                            var value = doc.createElement("CustomProperty");
                            value.setAttribute("showedLabel", "bpmn.SequenceFlow");
                            cell.setValue(value);
                            BpmnMxGraphAdaper.judgeBpmnElement(graph, cell);
                        }
                    };
                    BpmnMxGraphAdaper.setBpmnElementIntoMxCell = function (graph, cells) {
                        for (var _i = 0, cells_2 = cells; _i < cells_2.length; _i++) {
                            var cell = cells_2[_i];
                            BpmnMxGraphAdaper.judgeBpmnElement(graph, cell);
                        }
                    };
                    BpmnMxGraphAdaper.judgeBpmnElement = function (graph, cell) {
                        var bpmnModel = null;
                        try {
                            bpmnModel = graph['bpmnModel'];
                        }
                        catch (err) {
                            console.log("mxGraph 未创建 BpmnModel");
                            throw err;
                        }
                        if (!bpmnModel) {
                            throw "mxGraph 未创建 BpmnModel";
                        }
                        if (!cell.value) {
                            throw "mxCell 未设置 value";
                        }
                        graph.getModel().beginUpdate();
                        var clrTypeId = '';
                        if (typeof cell.getValue() == 'string') {
                            var doc = mxUtils.createXmlDocument();
                            var value = doc.createElement("CustomProperty");
                            value.setAttribute("showedLabel", cell.getValue().toString());
                            cell.setValue(value);
                            clrTypeId = cell.getValue().getAttribute('showedLabel');
                        }
                        else if (typeof cell.getValue() == 'object') {
                            clrTypeId = cell.getValue().getAttribute('showedLabel');
                        }
                        var flowElement = null;
                        var diagramElement = null;
                        if (clrTypeId != 'bpmn.SequenceFlow') {
                            flowElement = inspur.gsp.pmf.bpmn.model.BpmnModelHelper.GetElementType(clrTypeId);
                            flowElement.Id = clrTypeId.substr(clrTypeId.lastIndexOf(".") + 1) + flowElement.Id;
                            diagramElement = new inspur.gsp.pmf.bpmn.model.BPMNShape(bpmnModel);
                            var bounds = new inspur.gsp.pmf.bpmn.model.Bounds(bpmnModel);
                            diagramElement.Bounds = bounds;
                            diagramElement.BpmnElementId = flowElement.Id;
                            diagramElement.Bounds.X = cell.geometry.x;
                            diagramElement.Bounds.Y = cell.geometry.y;
                            diagramElement.Bounds.Height = cell.geometry.height;
                            diagramElement.Bounds.Width = cell.geometry.width;
                        }
                        else {
                            flowElement = inspur.gsp.pmf.bpmn.model.BpmnModelHelper.GetElementType(clrTypeId);
                            flowElement.SourceRef = cell.source.value['flowElement']['Id'];
                            flowElement.TargetRef = cell.target.value['flowElement']['Id'];
                            diagramElement = new inspur.gsp.pmf.bpmn.model.BPMNEdge(bpmnModel);
                            diagramElement.BpmnElementId = flowElement.Id;
                            diagramElement.SourceShapeElementId = flowElement.SourceRef;
                            diagramElement.TargetShapeElementId = flowElement.TargetRef;
                        }
                        bpmnModel.DefaultProcess.AddFlowElement(flowElement);
                        bpmnModel.DefaultDiagram.BpmnPlane.AddDiagramElement(diagramElement);
                        graph.getModel().remove(cell);
                        cell.id = flowElement.Id;
                        graph.addCell(cell, cell.getParent());
                        cell.value['flowElement'] = flowElement;
                        cell.value['diagramElement'] = diagramElement;
                        graph.getModel().endUpdate();
                        graph.refresh();
                        console.log(cell);
                    };
                    BpmnMxGraphAdaper.removeMxCell = function (graph, cells) {
                        if (!graph) {
                            console.error("graph 不存在");
                            return;
                        }
                        var bpmnModel = null;
                        try {
                            bpmnModel = graph['bpmnModel'];
                        }
                        catch (err) {
                            console.error("graph 不存在 bpmnModel属性");
                            throw err;
                        }
                        console.log(bpmnModel);
                        for (var i = 0; i < cells.length; i++) {
                            bpmnModel.DefaultProcess.RemoveFlowElement(cells[i].value['flowElement']['Id']);
                            bpmnModel.DefaultDiagram.BpmnPlane.RemoveDiagramElement(cells[i].value['diagramElement']['Id']);
                        }
                        console.log(bpmnModel);
                    };
                    BpmnMxGraphAdaper.setExtensionElements = function (graph, bpmnElment, extensionElementsStr) {
                        bpmnElment['extensionElements'] = [];
                        var extensionElements = JSON.parse(extensionElementsStr);
                        console.log(extensionElements);
                        for (var i = 0; i < extensionElements.length; i++) {
                            var temp = new inspur.gsp.aif.model.WritebackProcessElement(graph['bpmnModel']);
                            temp.LoadFromJsonObject(extensionElements[i]);
                            bpmnElment['extensionElements'].push(temp);
                        }
                    };
                    BpmnMxGraphAdaper.saveIntoMetadata = function (graph) {
                        if (graph['bpmnModel'] == undefined) {
                            throw "graph['bpmnModel']未定义";
                        }
                        console.log("发送元数据保存消息");
                        top.postMessage("#save#" + graph['bpmnModel'].ConvertToJson(), grapheditor.POST_MESSAGE_URL);
                    };
                    BpmnMxGraphAdaper.publishMetadata = function (graph) {
                        try {
                            console.log("发送元数据发布消息");
                            top.postMessage("#publish#" + graph['bpmnModel'].ConvertToJson(), grapheditor.POST_MESSAGE_URL);
                        }
                        catch (err) {
                            console.error(err);
                            console.error("消息发送失败");
                        }
                    };
                    BpmnMxGraphAdaper.unpublishMetadata = function (graph) {
                        try {
                            console.log("发送元数据撤销发布消息");
                            top.postMessage("#unpublish#" + graph['bpmnModel'].ConvertToJson(), grapheditor.POST_MESSAGE_URL);
                        }
                        catch (err) {
                            console.error("消息发送失败");
                            console.error(err);
                        }
                    };
                    return BpmnMxGraphAdaper;
                }());
                grapheditor.BpmnMxGraphAdaper = BpmnMxGraphAdaper;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var ModalBox = (function () {
                    function ModalBox(option) {
                        this.isShow = false;
                        this.option = option || {};
                        this.init();
                    }
                    ModalBox.prototype.init = function () {
                        this.isShow = this.option['isShow'];
                        var html = '<div class="model-container">'
                            + '<h1 class="model-title">title</h1>'
                            + '<div class="model-content"></div>'
                            + '<div class="controls">'
                            + '<a class="confirm">确定</a>'
                            + '<a class="cancel">取消</a>'
                            + '</div>'
                            + '</div>';
                        var ModalBoxCon = document.createElement("div");
                        ModalBoxCon.setAttribute("class", "mask-layer");
                        ModalBoxCon.innerHTML = html;
                        ModalBoxCon.querySelector(".model-title").innerHTML = this.option['title'];
                        ModalBoxCon.querySelector(".model-content").innerHTML = this.option['content'];
                        document.getElementsByTagName("body")[0].appendChild(ModalBoxCon);
                        if (this.isShow) {
                            ModalBoxCon.style.display = "none";
                        }
                        ModalBoxCon.querySelector(".cancel").onclick = ModalBoxCon.querySelector(".confirm").click = this.eventsFn.bind("", this, ModalBoxCon);
                    };
                    ModalBox.prototype.eventsFn = function (e, doc, target) {
                        var _thisEvent = target.target;
                        if (_thisEvent.classList.contains("confirm")) {
                            e.option.confirmCallBack();
                        }
                        doc.style.display = "none";
                        e.isShow = false;
                        return false;
                    };
                    ModalBox.prototype.show = function () {
                        document.querySelector(".mask-layer").style.display = "block";
                        this.isShow = true;
                    };
                    ModalBox.prototype.hide = function () {
                        document.querySelector(".mask-layer").style.display = "none";
                        this.isShow = false;
                    };
                    return ModalBox;
                }());
                grapheditor.ModalBox = ModalBox;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                window.onload = function () {
                    var resourcesUrl = "grapheditor/resources/grapheditor_cn.txt";
                    $.get(resourcesUrl, function (data) {
                        mxResources.parse(data);
                        var editor = new grapheditor.EditorUi();
                        editor.show();
                    });
                };
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Actions = (function () {
                    function Actions(editorUi) {
                        this.editorUi = editorUi;
                        this.actionDic = new grapheditor.Dictionary();
                        this.init();
                    }
                    Actions.prototype.addAction = function (action) {
                        this.actionDic.add(action.key, action);
                        if (action.shortcutKeyCode != null) {
                            this.addShortcut(action.key, action.shortcutKeyCode, action.shortcutControlKey, action.shortcutShiftKey, action.shortcutAltKey);
                        }
                    };
                    Actions.prototype.getAction = function (key) {
                        return this.actionDic.getValue(key);
                    };
                    ;
                    Actions.prototype.addShortcut = function (actionKey, shortcutKeyCode, controlKey, shiftKey, altKey) {
                        var action = this.getAction(actionKey);
                        if (action == null)
                            return;
                        var ui = this.editorUi;
                        var funct = function (evt) {
                            if (action.isEnabled()) {
                                action.execute(ui, evt);
                            }
                        };
                        if (controlKey) {
                            if (shiftKey) {
                                if (altKey) {
                                    this.editorUi.keyHandler.bindCtrlShiftAltKey(shortcutKeyCode, funct);
                                }
                                else {
                                    this.editorUi.keyHandler.bindControlShiftKey(shortcutKeyCode, funct);
                                }
                            }
                            else {
                                if (altKey) {
                                    this.editorUi.keyHandler.bindCtrlAltKey(shortcutKeyCode, funct);
                                }
                                else {
                                    this.editorUi.keyHandler.bindControlKey(shortcutKeyCode, funct);
                                }
                            }
                        }
                        else {
                            if (shiftKey) {
                                if (altKey) {
                                    this.editorUi.keyHandler.bindShiftAltKey(shortcutKeyCode, funct);
                                }
                                else {
                                    this.editorUi.keyHandler.bindShiftKey(shortcutKeyCode, funct);
                                }
                            }
                            else {
                                this.editorUi.keyHandler.bindKey(shortcutKeyCode, funct);
                            }
                        }
                    };
                    Actions.prototype.init = function () {
                        {
                            this.addAction(new grapheditor.SaveAction());
                            this.addAction(new grapheditor.PublishAction());
                            this.addAction(new grapheditor.UnpublishAction());
                        }
                        {
                            this.addAction(new grapheditor.UndoAction());
                            this.addAction(new grapheditor.RedoAction());
                            this.addCutAction();
                            this.addCopyAction();
                            this.addPasteAction();
                            this.addDeleteAction();
                            this.addDuplicateAction();
                            this.addSelectVerticesAction();
                            this.addSelectEdgesAction();
                            this.addSelectAllAction();
                            this.addSelectNoneAction();
                            this.addLockUnlockAction();
                        }
                        {
                            this.addAction(new grapheditor.FormatPanelAction());
                            this.addAction(new grapheditor.OutlineAction());
                            this.addAction(new grapheditor.ZoomInAction());
                            this.addAction(new grapheditor.ZoomOutAction());
                            this.addAction(new grapheditor.ResetViewAction());
                            this.addAction(new grapheditor.View_25_Action());
                            this.addAction(new grapheditor.View_50_Action());
                            this.addAction(new grapheditor.View_75_Action());
                            this.addAction(new grapheditor.View_100_Action());
                            this.addAction(new grapheditor.View_125_Action());
                            this.addAction(new grapheditor.View_150_Action());
                            this.addAction(new grapheditor.View_200_Action());
                            this.addAction(new grapheditor.View_300_Action());
                            this.addAction(new grapheditor.View_400_Action());
                            this.addAction(new grapheditor.FitWindowAction());
                            this.addAction(new grapheditor.ViewGridAction());
                            this.addAction(new grapheditor.ConnectionArrowAction());
                            this.addAction(new grapheditor.LockedAction());
                        }
                        {
                            this.addToFrontAction();
                            this.addToBackAction();
                            this.addAlignLeftAction();
                            this.addAlignCenterAction();
                            this.addAlignRightAction();
                            this.addAlignTopAction();
                            this.addAlignMiddleAction();
                            this.addAlignBottomAction();
                            this.addDistributeHorizontalAction();
                            this.addDistributeVerticalAction();
                            this.addClearWaypointsAction();
                            this.addAutosizeAction();
                        }
                        {
                            this.addAction(new grapheditor.HelpAction());
                            this.addAction(new grapheditor.AboutAction());
                            this.addAction(new grapheditor.ViewModelXmlAction());
                        }
                    };
                    Actions.prototype.addCutAction = function () {
                        var that = this;
                        var action = new grapheditor.CutAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addCopyAction = function () {
                        var that = this;
                        var action = new grapheditor.CopyAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addPasteAction = function () {
                        var that = this;
                        var action = new grapheditor.PasteAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var graph = that.editorUi.graph;
                            action.setEnabled(graph.cellEditor.isContentEditing() ||
                                (!mxClipboard.isEmpty() && graph.isEnabled() && !graph.isCellLocked(graph.getDefaultParent())));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addDeleteAction = function () {
                        var that = this;
                        var action = new grapheditor.DeleteAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addDuplicateAction = function () {
                        var that = this;
                        var action = new grapheditor.DuplicateAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addSelectVerticesAction = function () {
                        var that = this;
                        var action = new grapheditor.SelectVerticesAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            var graph = that.editorUi.graph;
                            var unlocked = graph.isEnabled() && !graph.isCellLocked(graph.getDefaultParent());
                            action.setEnabled(unlocked);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addSelectEdgesAction = function () {
                        var that = this;
                        var action = new grapheditor.SelectEdgesAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            var graph = that.editorUi.graph;
                            var unlocked = graph.isEnabled() && !graph.isCellLocked(graph.getDefaultParent());
                            action.setEnabled(unlocked);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addSelectAllAction = function () {
                        var that = this;
                        var action = new grapheditor.SelectAllAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            var graph = that.editorUi.graph;
                            var unlocked = graph.isEnabled() && !graph.isCellLocked(graph.getDefaultParent());
                            action.setEnabled(unlocked);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addSelectNoneAction = function () {
                        var that = this;
                        var action = new grapheditor.SelectNoneAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            var graph = that.editorUi.graph;
                            var unlocked = graph.isEnabled() && !graph.isCellLocked(graph.getDefaultParent());
                            action.setEnabled(unlocked);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addLockUnlockAction = function () {
                        var that = this;
                        var action = new grapheditor.LockUnlockAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addToFrontAction = function () {
                        var that = this;
                        var action = new grapheditor.ToFrontAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addToBackAction = function () {
                        var that = this;
                        var action = new grapheditor.ToBackAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addAlignLeftAction = function () {
                        var that = this;
                        var action = new grapheditor.AlignLeftAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addAlignCenterAction = function () {
                        var that = this;
                        var action = new grapheditor.AlignCenterAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addAlignRightAction = function () {
                        var that = this;
                        var action = new grapheditor.AlignRightAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addAlignTopAction = function () {
                        var that = this;
                        var action = new grapheditor.AlignTopAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addAlignMiddleAction = function () {
                        var that = this;
                        var action = new grapheditor.AlignMiddleAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addAlignBottomAction = function () {
                        var that = this;
                        var action = new grapheditor.AlignBottomAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addDistributeHorizontalAction = function () {
                        var that = this;
                        var action = new grapheditor.DistributeHorizontalAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addDistributeVerticalAction = function () {
                        var that = this;
                        var action = new grapheditor.DistributeVerticalAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.LockedChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isAlignActionEnabled(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addClearWaypointsAction = function () {
                        var that = this;
                        var action = new grapheditor.ClearWaypointsAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            var selected = !that.editorUi.graph.isSelectionEmpty();
                            action.setEnabled(selected);
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.addAutosizeAction = function () {
                        var that = this;
                        var action = new grapheditor.AutosizeAction();
                        this.editorUi.addListener(grapheditor.PmfEvents.SelectionModelChanged, function () {
                            action.setEnabled(that.isVertexSelected(that.editorUi.graph));
                        });
                        this.addAction(action);
                    };
                    Actions.prototype.isUnlocked = function (graph) {
                        var unlocked = graph.isEnabled() && !graph.isCellLocked(graph.getDefaultParent());
                        return unlocked;
                    };
                    Actions.prototype.isVertexSelected = function (graph) {
                        var vertexSelected = false;
                        var cells = graph.getSelectionCells();
                        if (cells != null) {
                            for (var i = 0; i < cells.length; i++) {
                                var cell = cells[i];
                                if (graph.getModel().isVertex(cell)) {
                                    vertexSelected = true;
                                }
                                if (vertexSelected) {
                                    break;
                                }
                            }
                        }
                        return vertexSelected;
                    };
                    Actions.prototype.isEdgeSelected = function (graph) {
                        var edgeSelected = false;
                        var cells = graph.getSelectionCells();
                        if (cells != null) {
                            for (var i = 0; i < cells.length; i++) {
                                var cell = cells[i];
                                if (graph.getModel().isEdge(cell)) {
                                    edgeSelected = true;
                                }
                                if (edgeSelected) {
                                    break;
                                }
                            }
                        }
                        return edgeSelected;
                    };
                    Actions.prototype.isAlignActionEnabled = function (graph) {
                        return this.isUnlocked(graph) && this.isVertexSelected(graph) && graph.getSelectionCount() > 1;
                    };
                    return Actions;
                }());
                grapheditor.Actions = Actions;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Init = (function () {
                    function Init() {
                    }
                    Init.IMAGE_PATH = "grapheditor/images";
                    Init.STYLE_PATH = "grapheditor/styles";
                    Init.MAX_REQUEST_SIZE = 10485760;
                    Init.SAVE_URL = '/save';
                    return Init;
                }());
                grapheditor.Init = Init;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var EditorUi = (function (_super) {
                    __extends(EditorUi, _super);
                    function EditorUi(defaultToolStrip, defaultToolBox) {
                        var _this = _super.call(this) || this;
                        _this.menubarEnabled = false;
                        _this.footerEnabled = false;
                        _this.formatEnabled = false;
                        _this.splitSize = (mxClient.IS_TOUCH || mxClient.IS_POINTER) ? 12 : 8;
                        _this.menubarHeight = 30;
                        _this.toolbarHeight = 34;
                        _this.footerHeight = 28;
                        _this.formatWidth = 240;
                        _this.sidebarSplitPosition = (screen.width <= 640) ? 118 : 208;
                        _this.sidebarSplitSize = (mxClient.IS_TOUCH || mxClient.IS_POINTER) ? 12 : 8;
                        _this.destroyFunctions = [];
                        _this.defaultToolStrip = defaultToolStrip || new grapheditor.DefaultToolStrip();
                        _this.defaultToolBox = defaultToolBox || new grapheditor.DefaultToolBox();
                        _this.container = document.body;
                        return _this;
                    }
                    EditorUi.prototype.show = function () {
                        this.createDivs();
                        this.refresh(false);
                        this.graph = this.createGraph();
                        this.keyHandler = new grapheditor.KeyHandler(this.graph);
                        this.actions = new grapheditor.Actions(this);
                        this.createUi();
                        this.resetToolbar(this.defaultToolStrip);
                        this.resetToolBox(this.defaultToolBox);
                        mxEvent.disableContextMenu(this.container);
                        var that = this;
                        this.gestureHandler = function (evt) {
                            if (that.currentMenu != null && mxEvent.getSource(evt) != that.currentMenu.div) {
                                that.hideCurrentMenu();
                            }
                        };
                        mxEvent.addGestureListeners(document, this.gestureHandler);
                        this.addListener('resetGraphView', this.resetScrollbars);
                        this.fireEvent(new mxEventObject('resetGraphView'));
                        this.addBeforeUnloadListener();
                    };
                    EditorUi.prototype.resetToolbar = function (toolStrip) {
                        this.toolbar.reset(toolStrip);
                    };
                    EditorUi.prototype.resetToolBox = function (toolBox) {
                        this.sidebar.reset(toolBox);
                    };
                    EditorUi.prototype.setCurrentMenu = function (menu, elt) {
                        this.currentMenuElt = elt;
                        this.currentMenu = menu;
                    };
                    EditorUi.prototype.resetCurrentMenu = function () {
                        this.currentMenuElt = null;
                        this.currentMenu = null;
                    };
                    EditorUi.prototype.hideCurrentMenu = function () {
                        if (this.currentMenu != null) {
                            this.currentMenu.hideMenu();
                            this.resetCurrentMenu();
                        }
                    };
                    EditorUi.prototype.refresh = function (sizeDidChange) {
                        sizeDidChange = (sizeDidChange != null) ? sizeDidChange : true;
                        var quirks = mxClient.IS_QUIRKS;
                        var w = this.container.clientWidth;
                        var h = this.container.clientHeight;
                        if (this.container == document.body) {
                            w = document.body.clientWidth || document.documentElement.clientWidth;
                            h = (quirks) ? document.body.clientHeight || document.documentElement.clientHeight : document.documentElement.clientHeight;
                        }
                        var off = 0;
                        if (mxClient.IS_IOS && !window.navigator["standalone"]) {
                            if (window.innerHeight != document.documentElement.clientHeight) {
                                off = document.documentElement.clientHeight - window.innerHeight;
                                window.scrollTo(0, 0);
                            }
                        }
                        var menubarContainerHeight = this.menubarEnabled ? this.menubarHeight : 0;
                        var formatContainerWidth = this.formatEnabled ? this.formatWidth : 0;
                        var footerContainerHeight = this.footerEnabled ? this.footerHeight : 0;
                        var tmp = 0;
                        this.menubarContainer.style.height = menubarContainerHeight + 'px';
                        tmp += menubarContainerHeight;
                        this.toolbarContainer.style.top = menubarContainerHeight + 'px';
                        this.toolbarContainer.style.height = this.toolbarHeight + 'px';
                        tmp += this.toolbarHeight;
                        if (tmp > 0 && !mxClient.IS_QUIRKS) {
                            tmp += 1;
                        }
                        var effectSidebarSplitPosition = Math.max(0, Math.min(this.sidebarSplitPosition, w - this.sidebarSplitSize - 20));
                        this.sidebarContainer.style.top = tmp + 'px';
                        this.sidebarContainer.style.width = effectSidebarSplitPosition + 'px';
                        this.sidebarSplit.style.top = this.sidebarContainer.style.top;
                        this.sidebarSplit.style.bottom = (footerContainerHeight + off) + 'px';
                        this.sidebarSplit.style.left = effectSidebarSplitPosition + 'px';
                        this.diagramContainer.style.left = (this.sidebarSplit.parentNode != null) ? (effectSidebarSplitPosition + this.sidebarSplitSize) + 'px' : '0px';
                        this.diagramContainer.style.top = this.sidebarContainer.style.top;
                        this.formatContainer.style.top = tmp + 'px';
                        this.formatContainer.style.width = formatContainerWidth + 'px';
                        this.footerContainer.style.height = footerContainerHeight + "px";
                        if (quirks) {
                            this.menubarContainer.style.width = w + 'px';
                            this.toolbarContainer.style.width = this.menubarContainer.style.width;
                            var sidebarHeight = Math.max(0, h - footerContainerHeight - menubarContainerHeight - this.toolbarHeight);
                            this.sidebarContainer.style.height = sidebarHeight + 'px';
                            this.formatContainer.style.height = sidebarHeight + 'px';
                            this.diagramContainer.style.width = (this.sidebarSplit.parentNode != null) ? Math.max(0, w - effectSidebarSplitPosition - this.sidebarSplitSize - formatContainerWidth) + 'px' : w + 'px';
                            this.footerContainer.style.width = this.menubarContainer.style.width;
                            var diagramHeight = Math.max(0, h - footerContainerHeight - menubarContainerHeight - this.toolbarHeight);
                            this.diagramContainer.style.height = diagramHeight + 'px';
                            this.sidebarSplit.style.height = diagramHeight + 'px';
                        }
                        else {
                            if (footerContainerHeight > 0) {
                                this.footerContainer.style.bottom = off + 'px';
                            }
                            this.diagramContainer.style.right = formatContainerWidth + 'px';
                            this.sidebarContainer.style.bottom = (footerContainerHeight + off) + 'px';
                            this.formatContainer.style.bottom = (footerContainerHeight + off) + 'px';
                            this.diagramContainer.style.bottom = (footerContainerHeight + off) + 'px';
                        }
                        if (sizeDidChange && this.graph != null) {
                            this.graph.sizeDidChange();
                            this.fireEvent(new mxEventObject(grapheditor.PmfEvents.ResizeGraphView));
                        }
                    };
                    EditorUi.prototype.resetScrollbars = function () {
                        var graph = this.graph;
                        var bounds = graph.getGraphBounds();
                        var width = Math.max(bounds.width, graph.getScrollTileSize().width * graph.view.scale);
                        var height = Math.max(bounds.height, graph.getScrollTileSize().height * graph.view.scale);
                        graph.container.scrollTop = Math.floor(Math.max(0, bounds.y - Math.max(20, (graph.container.clientHeight - height) / 4)));
                        graph.container.scrollLeft = Math.floor(Math.max(0, bounds.x - Math.max(0, (graph.container.clientWidth - width) / 2)));
                    };
                    EditorUi.prototype.createGraph = function () {
                        var that = this;
                        var graph = new grapheditor.Graph(this.diagramContainer);
                        new mxRubberband(graph);
                        graph.setConnectable(true);
                        graph.getStylesheet().getDefaultEdgeStyle()['edgeStyle'] = 'straightEdgeStyle';
                        graph.setAllowDanglingEdges(false);
                        graph.autoScroll = false;
                        graph.autoExtend = false;
                        graph.setCellsEditable(false);
                        return graph;
                    };
                    EditorUi.prototype.setConnectionPorts = function (graph) {
                        graph.setPortsEnabled(false);
                        var ports = new Array();
                        var ports2 = new Array();
                        ports2['in1'] = { x: 0, y: 0, perimeter: true, constraint: 'west' };
                        ports2['in2'] = { x: 0, y: 0.25, perimeter: true, constraint: 'west' };
                        ports2['in3'] = { x: 0, y: 0.5, perimeter: true, constraint: 'west' };
                        ports2['in4'] = { x: 0, y: 0.75, perimeter: true, constraint: 'west' };
                        ports2['in5'] = { x: 0, y: 1, perimeter: true, constraint: 'west' };
                        ports2['out1'] = { x: 0.5, y: 0, perimeter: true, constraint: 'north east' };
                        ports2['out2'] = { x: 1, y: 0.5, perimeter: true, constraint: 'east' };
                        ports2['out3'] = { x: 0.5, y: 1, perimeter: true, constraint: 'south east' };
                        ports['w'] = { x: 0, y: 0.5, perimeter: true, constraint: 'west' };
                        ports['e'] = { x: 1, y: 0.5, perimeter: true, constraint: 'east' };
                        ports['n'] = { x: 0.5, y: 0, perimeter: true, constraint: 'north' };
                        ports['s'] = { x: 0.5, y: 1, perimeter: true, constraint: 'south' };
                        ports['nw'] = { x: 0, y: 0, perimeter: true, constraint: 'north west' };
                        ports['ne'] = { x: 1, y: 0, perimeter: true, constraint: 'north east' };
                        ports['sw'] = { x: 0, y: 1, perimeter: true, constraint: 'south west' };
                        ports['se'] = { x: 1, y: 1, perimeter: true, constraint: 'south east' };
                        mxShape.prototype.getPorts = function () {
                            return ports;
                        };
                        mxTriangle.prototype.getPorts = function () {
                            return ports2;
                        };
                        graph.connectionHandler.isConnectableCell = function (cell) {
                            return false;
                        };
                        mxEdgeHandler.prototype.isConnectableCell = function (cell) {
                            return graph.connectionHandler.isConnectableCell(cell);
                        };
                        graph.view.getTerminalPort = function (state, terminal, source) {
                            return terminal;
                        };
                        graph.getAllConnectionConstraints = function (terminal, source) {
                            if (terminal != null && terminal.shape != null &&
                                terminal.shape.stencil != null) {
                                if (terminal.shape.stencil != null) {
                                    return terminal.shape.stencil.constraints;
                                }
                            }
                            else if (terminal != null && this.model.isVertex(terminal.cell)) {
                                if (terminal.shape != null) {
                                    var ports = terminal.shape.getPorts();
                                    var cstrs = new Array();
                                    for (var id in ports) {
                                        var port = ports[id];
                                        var cstr = new mxConnectionConstraint(new mxPoint(port.x, port.y), port.perimeter);
                                        cstr['id'] = id;
                                        cstrs.push(cstr);
                                    }
                                    return cstrs;
                                }
                            }
                            return null;
                        };
                        graph.setConnectionConstraint = function (edge, terminal, source, constraint) {
                            if (constraint != null) {
                                var key = (source) ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT;
                                if (constraint == null || constraint.id == null) {
                                    this.setCellStyles(key, null, [edge]);
                                }
                                else if (constraint.id != null) {
                                    this.setCellStyles(key, constraint.id, [edge]);
                                }
                            }
                        };
                        graph.getConnectionConstraint = function (edge, terminal, source) {
                            var key = (source) ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT;
                            var id = edge.style[key];
                            if (id != null) {
                                var c = new mxConnectionConstraint(null, null);
                                c.id = id;
                                return c;
                            }
                            return null;
                        };
                        var graphGetConnectionPoint = graph.getConnectionPoint;
                        graph.getConnectionPoint = function (vertex, constraint) {
                            if (constraint.id != null && vertex != null && vertex.shape != null) {
                                var port = vertex.shape.getPorts()[constraint.id];
                                if (port != null) {
                                    constraint = new mxConnectionConstraint(new mxPoint(port.x, port.y), port.perimeter);
                                }
                            }
                            return graphGetConnectionPoint.apply(this, arguments);
                        };
                    };
                    EditorUi.prototype.createDivs = function () {
                        this.menubarContainer = this.createDiv('geMenubarContainer');
                        this.menubarContainer.style.top = '0px';
                        this.menubarContainer.style.left = '0px';
                        this.menubarContainer.style.right = '0px';
                        this.container.appendChild(this.menubarContainer);
                        this.toolbarContainer = this.createDiv('geToolbarContainer');
                        this.toolbarContainer.style.left = '0px';
                        this.toolbarContainer.style.right = '0px';
                        this.container.appendChild(this.toolbarContainer);
                        this.sidebarContainer = this.createDiv('geSidebarContainer');
                        this.sidebarContainer.style.left = '0px';
                        this.container.appendChild(this.sidebarContainer);
                        this.sidebarSplit = this.createDiv('geHsplit');
                        this.sidebarSplit.setAttribute('title', mxResources.get('collapseExpand'));
                        this.sidebarSplit.style.width = this.sidebarSplitSize + 'px';
                        this.addSplitHandler(this.sidebarSplit, true, 0, this.sidebarSplitOnChange);
                        this.container.appendChild(this.sidebarSplit);
                        this.diagramContainer = this.createDiv('geDiagramContainer');
                        this.diagramContainer.style.right = ((this.format != null) ? this.formatWidth : 0) + 'px';
                        this.diagramContainer.style.overflow = "auto";
                        this.container.appendChild(this.diagramContainer);
                        this.formatContainer = this.createDiv('geSidebarContainer');
                        this.formatContainer.style.right = '0px';
                        this.formatContainer.style.zIndex = '1';
                        this.formatContainer.style.backgroundColor = 'whiteSmoke';
                        this.formatContainer.style.overflowX = 'hidden';
                        this.formatContainer.style.overflowY = 'auto';
                        this.formatContainer.style.fontSize = '12px';
                        this.container.appendChild(this.formatContainer);
                        this.footerContainer = this.createDiv('geFooterContainer');
                        this.footerContainer.style.left = '0px';
                        this.footerContainer.style.right = '0px';
                        this.footerContainer.style.bottom = '0px';
                        this.footerContainer.style.zIndex = (mxPopupMenu.prototype.zIndex - 2).toString();
                        this.container.appendChild(this.footerContainer);
                    };
                    EditorUi.prototype.createUi = function () {
                        this.toolbar = this.createToolbar(this.createDiv('geToolbar'));
                        if (this.toolbar != null) {
                            this.toolbarContainer.appendChild(this.toolbar.container);
                        }
                        this.sidebar = this.createSidebar(this.sidebarContainer);
                        this.format = this.createFormat(this.formatContainer);
                        var footer = this.createFooter();
                        if (footer != null) {
                            this.footerContainer.appendChild(footer);
                        }
                    };
                    EditorUi.prototype.createFormat = function (container) {
                        return new grapheditor.Format(this, container);
                    };
                    ;
                    EditorUi.prototype.createDiv = function (classname) {
                        var elt = document.createElement('div');
                        elt.className = classname;
                        return elt;
                    };
                    EditorUi.prototype.sidebarSplitOnChange = function (value) {
                        this.sidebarSplitPosition = value;
                        this.refresh();
                    };
                    EditorUi.prototype.addSplitHandler = function (elt, horizontal, dx, onChange) {
                        onChange = mxUtils.bind(this, onChange);
                        var that = this;
                        var start = null;
                        var initial = null;
                        var ignoreClick = true;
                        var last = null;
                        if (mxClient.IS_POINTER) {
                            elt.style.touchAction = 'none';
                        }
                        var getValue = function () {
                            var result = parseInt(((horizontal) ? elt.style.left : elt.style.bottom));
                            if (!horizontal) {
                                result = result + dx - that.footerHeight;
                            }
                            return result;
                        };
                        var clickHandler = function (evt) {
                            if (!ignoreClick) {
                                var next = (last != null) ? last - dx : 0;
                                last = getValue();
                                onChange(next);
                                mxEvent.consume(evt);
                            }
                        };
                        var startHandler = function (evt) {
                            start = new mxPoint(mxEvent.getClientX(evt), mxEvent.getClientY(evt));
                            initial = getValue();
                            ignoreClick = false;
                            mxEvent.consume(evt);
                        };
                        var moveHandler = function (evt) {
                            if (start != null) {
                                var pt = new mxPoint(mxEvent.getClientX(evt), mxEvent.getClientY(evt));
                                onChange(Math.max(0, initial + ((horizontal) ? (pt.x - start.x) : (start.y - pt.y)) - dx));
                                mxEvent.consume(evt);
                                if (initial != getValue()) {
                                    ignoreClick = true;
                                    last = null;
                                }
                            }
                        };
                        var dropHandler = function (evt) {
                            moveHandler(evt);
                            initial = null;
                            start = null;
                        };
                        mxEvent.addListener(elt, 'click', clickHandler);
                        mxEvent.addGestureListeners(elt, startHandler, null, null);
                        mxEvent.addGestureListeners(document, null, moveHandler, dropHandler);
                        this.destroyFunctions.push(function () {
                            mxEvent.removeGestureListeners(document, null, moveHandler, dropHandler);
                        });
                    };
                    EditorUi.prototype.createFooter = function () {
                        return this.createDiv('geFooter');
                    };
                    EditorUi.prototype.createSidebar = function (container) {
                        return new grapheditor.Sidebar(this, container);
                    };
                    EditorUi.prototype.createToolbar = function (container) {
                        return new grapheditor.Toolbar(this, container);
                    };
                    EditorUi.prototype.addBeforeUnloadListener = function () {
                        var _this = this;
                        window.onbeforeunload = function () {
                            _this.onBeforeUnload();
                        };
                    };
                    EditorUi.prototype.onBeforeUnload = function () {
                        console.log(this.graph);
                        return mxResources.get('allChangesLost');
                    };
                    EditorUi.prototype.createHoverIcons = function () {
                        return new grapheditor.HoverIcons(this.graph);
                    };
                    EditorUi.prototype.destroy = function () {
                        if (this.graph != null) {
                            this.graph.destroy();
                        }
                        if (this.toolbar != null) {
                            this.toolbar.destroy();
                            this.toolbar = null;
                        }
                        if (this.sidebar != null) {
                            this.sidebar.destroy();
                            this.sidebar = null;
                        }
                        if (this.keyHandler != null) {
                            this.keyHandler.destroy();
                            this.keyHandler = null;
                        }
                        if (this.gestureHandler != null) {
                            mxEvent.removeGestureListeners(document, this.gestureHandler);
                            this.gestureHandler = null;
                        }
                        if (this.destroyFunctions != null) {
                            for (var i = 0; i < this.destroyFunctions.length; i++) {
                                this.destroyFunctions[i]();
                            }
                            this.destroyFunctions = null;
                        }
                        var c = [this.menubarContainer, this.toolbarContainer, this.sidebarContainer,
                            this.formatContainer, this.diagramContainer, this.footerContainer, this.sidebarSplit, this.layersDialog];
                        for (var i = 0; i < c.length; i++) {
                            if (c[i] != null && c[i].parentNode != null) {
                                c[i].parentNode.removeChild(c[i]);
                            }
                        }
                    };
                    EditorUi.originalNoForeignObject = mxClient.NO_FO;
                    EditorUi.ctrlKey = (mxClient.IS_MAC) ? 'Cmd' : 'Ctrl';
                    EditorUi.checkmarkImage = grapheditor.Init.IMAGE_PATH + '/checkmark.gif';
                    EditorUi.transparentImage = grapheditor.Init.IMAGE_PATH + '/transparent.gif';
                    EditorUi.pageCounter = 0;
                    return EditorUi;
                }(mxEventSource));
                grapheditor.EditorUi = EditorUi;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                grapheditor.POST_MESSAGE_URL = window.location.href;
                var Format = (function () {
                    function Format(editorUi, container) {
                        this.panels = [];
                        this.editorUi = editorUi;
                        this.container = container;
                        this.graph = editorUi.graph;
                        this.init();
                        this.graph.addListener(mxEvent.EDITING_STARTED, this.update);
                        this.graph.addListener(mxEvent.EDITING_STOPPED, this.update);
                        this.graph.addListener(mxEvent.CHANGE, mxUtils.bind(this, this.update));
                        this.graph.getModel().addListener(mxEvent.CHANGE, mxUtils.bind(this, this.update));
                        this.graph.getSelectionModel().addListener(mxEvent.CHANGE, mxUtils.bind(this, this.select));
                        this.graph.addListener(mxEvent.CELLS_REMOVED, mxUtils.bind(this, this.remove));
                        this.graph.connectionHandler.addListener(mxEvent.CONNECT, mxUtils.bind(this, this.connect));
                        this.addMessageListener();
                    }
                    Format.prototype.select = function (sender, evt) {
                        console.log("select");
                        console.log(sender);
                        console.log(evt);
                        if (!(sender instanceof mxGraphSelectionModel)) {
                            return;
                        }
                        var selectionModel = sender;
                        var selectedCell = selectionModel.cells[0];
                        this.editorUi.fireEvent(new mxEventObject(grapheditor.PmfEvents.SelectionModelChanged));
                        focus();
                        if (!selectionModel.isEmpty()) {
                            console.log("子页面发送选中元素消息至" + grapheditor.POST_MESSAGE_URL);
                            top.postMessage("#show#" + grapheditor.PropertyAdapter.getCellPropertyConfigAndData(this.graph, selectedCell), grapheditor.POST_MESSAGE_URL);
                        }
                        else {
                            console.log("子页面发送选中画布消息至" + grapheditor.POST_MESSAGE_URL);
                            top.postMessage("#show#" + grapheditor.PropertyAdapter.getGraphPropertyConfigAndData(this.graph), grapheditor.POST_MESSAGE_URL);
                        }
                    };
                    Format.prototype.myClick = function (sender, evt) {
                        console.log("click");
                        console.log(sender);
                        console.log(evt);
                    };
                    Format.prototype.update = function (sender, evt) {
                        console.log("update");
                        console.log(sender);
                        console.log(evt);
                        var changes = evt.getProperty("changes");
                        if (changes == null)
                            return;
                        var flag = true;
                        for (var i = 0; i < changes.length; i++) {
                            if (changes[i] instanceof mxGeometryChange) {
                                var cell = changes[i].cell;
                                if (cell.isVertex() == false || !cell.value['flowElement']) {
                                    continue;
                                }
                                grapheditor.PropertyAdapter.updateVertexGeometry(this.graph, cell);
                                if (flag && cell != null) {
                                    console.log("子页面发送修改元素消息至" + grapheditor.POST_MESSAGE_URL);
                                    top.postMessage("#show#" + grapheditor.PropertyAdapter.getCellPropertyConfigAndData(this.graph, cell), grapheditor.POST_MESSAGE_URL);
                                    flag = false;
                                }
                            }
                            if (changes[i] instanceof mxTerminalChange) {
                                var cell = changes[i].cell;
                                if (cell.isEdge() == false) {
                                    continue;
                                }
                                grapheditor.PropertyAdapter.updateEdgeGeometry(this.graph, cell);
                                if (flag && cell != null) {
                                    console.log("子页面发送修改元素消息至" + grapheditor.POST_MESSAGE_URL);
                                    top.postMessage("#show#" + grapheditor.PropertyAdapter.getCellPropertyConfigAndData(this.graph, cell), grapheditor.POST_MESSAGE_URL);
                                    flag = false;
                                }
                            }
                        }
                    };
                    Format.prototype.connect = function (sender, evt) {
                        console.log("connect");
                        console.log(sender);
                        console.log(evt);
                        var cell = evt.getProperty("cell");
                        cell.edge = true;
                        cell.vertex = false;
                        if (cell != null) {
                            console.log("连线添加自定义属性......");
                            grapheditor.BpmnMxGraphAdaper.setBpmnElementIntoMxEdge(this.graph, [cell]);
                        }
                        return false;
                    };
                    Format.prototype.remove = function (sender, evt) {
                        console.log("remove");
                        console.log(sender);
                        console.log(evt);
                        var cells = evt.getProperty("cells");
                        if (cells != null) {
                            console.log("删除元素");
                            grapheditor.BpmnMxGraphAdaper.removeMxCell(this.graph, cells);
                            if (this.graph.isSelectionEmpty()) {
                                console.log("子页面发送点击画布消息至" + grapheditor.POST_MESSAGE_URL);
                                top.postMessage("#show#" + grapheditor.PropertyAdapter.getGraphPropertyConfigAndData(this.graph), grapheditor.POST_MESSAGE_URL);
                            }
                        }
                    };
                    Format.prototype.addMessageListener = function () {
                        var _this = this;
                        if (typeof window.addEventListener != "undefined") {
                            if (window['myChildPageMessageFunct']) {
                                console.log("删除子页面已有消息监听器");
                                window.removeEventListener("message", window['myChildPageMessageFunct'], false);
                            }
                            var funct = function (event) {
                                console.log("子页面收到父页面" + event.origin + "消息......");
                                console.log(event.data);
                                if (typeof event.data == 'string') {
                                    if (event.data.substr(0, 6) == '#open#') {
                                        console.log("元数据打开操作");
                                        grapheditor.BpmnMxGraphAdaper.setBpmnModelIntoGraph(_this.graph, event.data.substr(6));
                                        top.postMessage("#show#" + grapheditor.PropertyAdapter.getGraphPropertyConfigAndData(_this.graph), grapheditor.POST_MESSAGE_URL);
                                    }
                                    else if (event.data.substr(0, 14) == '#save_request#') {
                                        console.log("自动保存操作");
                                    }
                                    else {
                                        console.log("属性更新操作");
                                        var obj = JSON.parse(event.data);
                                        if (!obj['id']) {
                                            grapheditor.PropertyAdapter.updateGraph(_this.graph, obj);
                                        }
                                        else {
                                            var cell = _this.graph.getModel().getCell(obj['id']);
                                            grapheditor.PropertyAdapter.updateCell(_this.graph, obj, cell);
                                        }
                                    }
                                }
                                else {
                                }
                            };
                            window['myChildPageMessageFunct'] = funct;
                            window.addEventListener('message', funct, false);
                        }
                        else {
                        }
                    };
                    Format.prototype.refresh = function () {
                    };
                    Format.prototype.init = function () {
                        var _this = this;
                        var bpmnModelStr = '{"TargetNamespace": "http://www.inspur.com/gsp/aif/bizflowchart"}';
                        grapheditor.BpmnMxGraphAdaper.setBpmnModelIntoGraph(this.graph, bpmnModelStr);
                        window['aifAutoSave'] = function () {
                            grapheditor.BpmnMxGraphAdaper.saveIntoMetadata(_this.graph);
                        };
                        window['aifGetBpmnModel'] = function () {
                            return _this.graph['bpmnModel'].ConvertToJson();
                        };
                    };
                    Format.prototype.testEvent = function (sender, evt) {
                        console.log(sender);
                        console.dir(evt);
                    };
                    return Format;
                }());
                grapheditor.Format = Format;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Graph = (function (_super) {
                    __extends(Graph, _super);
                    function Graph(container, model, renderHint, stylesheet, themes) {
                        var _this = _super.call(this, container, model, renderHint, stylesheet) || this;
                        _this.background = '#ffffff';
                        _this.currentEdgeStyle = {};
                        _this.themes = themes;
                        if (stylesheet == null) {
                            _this.loadStylesheet();
                        }
                        return _this;
                    }
                    Graph.prototype.createGraphView = function () {
                        return new grapheditor.GraphView(this);
                    };
                    Graph.prototype.createCellEditor = function () {
                        return new grapheditor.CellEditor(this);
                    };
                    Graph.prototype.sizeDidChange = function () {
                        if (this.container != null && mxUtils.hasScrollbars(this.container)) {
                            var pages = this.getPageLayout();
                            var pad = this.getPagePadding();
                            var size = this.getPageSize();
                            var minw = Math.ceil(2 * pad.x / this.view.scale + pages.width * size.width);
                            var minh = Math.ceil(2 * pad.y / this.view.scale + pages.height * size.height);
                            var min = this.minimumGraphSize;
                            if (min == null || min.width != minw || min.height != minh) {
                                this.minimumGraphSize = new mxRectangle(0, 0, minw, minh);
                            }
                            var dx = pad.x / this.view.scale - pages.x * size.width;
                            var dy = pad.y / this.view.scale - pages.y * size.height;
                            if (!this.autoTranslate && (this.view.translate.x != dx || this.view.translate.y != dy)) {
                                this.autoTranslate = true;
                                this.view.x0 = pages.x;
                                this.view.y0 = pages.y;
                                var tx = this.view.translate.x;
                                var ty = this.view.translate.y;
                                this.view.setTranslate(dx, dy);
                                this.container.scrollLeft += (dx - tx) * this.view.scale;
                                this.container.scrollTop += (dy - ty) * this.view.scale;
                                this.autoTranslate = false;
                                return;
                            }
                            _super.prototype.sizeDidChange.call(this);
                        }
                    };
                    Graph.prototype.getPreferredPageSize = function (bounds, width, height) {
                        var pages = this.getPageLayout();
                        var size = this.getPageSize();
                        return new mxRectangle(0, 0, pages.width * size.width, pages.height * size.height);
                    };
                    Graph.prototype.loadStylesheet = function () {
                        var node = this.themes || mxUtils.load(grapheditor.Init.STYLE_PATH + '/default.xml').getDocumentElement();
                        if (node != null) {
                            var dec = new mxCodec(node.ownerDocument);
                            dec.decode(node, this.getStylesheet());
                        }
                    };
                    Graph.prototype.getPagePadding = function () {
                        return new mxPoint(Math.max(0, Math.round(this.container.offsetWidth - 34)), Math.max(0, Math.round(this.container.offsetHeight - 34)));
                    };
                    Graph.prototype.getPageSize = function () {
                        return (this.pageVisible) ? new mxRectangle(0, 0, this.pageFormat.width * this.pageScale, this.pageFormat.height * this.pageScale) : this.getScrollTileSize();
                    };
                    Graph.prototype.getPageLayout = function () {
                        var size = (this.pageVisible) ? this.getPageSize() : this.getScrollTileSize();
                        var bounds = this.getGraphBounds();
                        if (bounds.width == 0 || bounds.height == 0) {
                            return new mxRectangle(0, 0, 1, 1);
                        }
                        else {
                            var x = Math.ceil(bounds.x / this.view.scale - this.view.translate.x);
                            var y = Math.ceil(bounds.y / this.view.scale - this.view.translate.y);
                            var w = Math.floor(bounds.width / this.view.scale);
                            var h = Math.floor(bounds.height / this.view.scale);
                            var x0 = Math.floor(x / size.width);
                            var y0 = Math.floor(y / size.height);
                            var w0 = Math.ceil((x + w) / size.width) - x0;
                            var h0 = Math.ceil((y + h) / size.height) - y0;
                            return new mxRectangle(x0, y0, w0, h0);
                        }
                    };
                    Graph.prototype.getScrollTileSize = function () {
                        if (this.scrollTileSize == null) {
                            this.scrollTileSize = new mxRectangle(0, 0, 400, 600);
                        }
                        return this.scrollTileSize;
                    };
                    Graph.prototype.distributeCells = function (horizontal, cells) {
                        if (cells == null) {
                            cells = this.getSelectionCells();
                        }
                        if (cells != null && cells.length > 1) {
                            var vertices = [];
                            var max = null;
                            var min = null;
                            for (var i = 0; i < cells.length; i++) {
                                if (this.getModel().isVertex(cells[i])) {
                                    var state = this.view.getState(cells[i]);
                                    if (state != null) {
                                        var tmp = (horizontal) ? state.getCenterX() : state.getCenterY();
                                        max = (max != null) ? Math.max(max, tmp) : tmp;
                                        min = (min != null) ? Math.min(min, tmp) : tmp;
                                        vertices.push(state);
                                    }
                                }
                            }
                            if (vertices.length > 2) {
                                vertices.sort(function (a, b) {
                                    return (horizontal) ? a.x - b.x : a.y - b.y;
                                });
                                var t = this.view.translate;
                                var s = this.view.scale;
                                min = min / s - ((horizontal) ? t.x : t.y);
                                max = max / s - ((horizontal) ? t.x : t.y);
                                this.getModel().beginUpdate();
                                try {
                                    var dt = (max - min) / (vertices.length - 1);
                                    var t0 = min;
                                    for (var i = 1; i < vertices.length - 1; i++) {
                                        var pstate = this.view.getState(this.model.getParent(vertices[i].cell));
                                        var geo = this.getCellGeometry(vertices[i].cell);
                                        t0 += dt;
                                        if (geo != null && pstate != null) {
                                            geo = geo.clone();
                                            if (horizontal) {
                                                geo.x = Math.round(t0 - geo.width / 2) - pstate.origin.x;
                                            }
                                            else {
                                                geo.y = Math.round(t0 - geo.height / 2) - pstate.origin.y;
                                            }
                                            this.getModel().setGeometry(vertices[i].cell, geo);
                                        }
                                    }
                                }
                                finally {
                                    this.getModel().endUpdate();
                                }
                            }
                        }
                        return cells;
                    };
                    Graph.prototype.zapGremlins = function (text) {
                        var checked = [];
                        for (var i = 0; i < text.length; i++) {
                            var code = text.charCodeAt(i);
                            if (code >= 32 || code == 9 || code == 10 || code == 13) {
                                checked.push(text.charAt(i));
                            }
                        }
                        return checked.join('');
                    };
                    Graph.prototype.convertValueToString = function (cell) {
                        if (cell.isEdge() == true) {
                            return "";
                        }
                        if (cell.isVertex() == true) {
                            if (cell.value != null && typeof (cell.value) == 'object') {
                                if (!cell.value['flowElement'] && cell.value['flowElement']['Name'] != undefined) {
                                    return cell.value.getAttribute('label') || cell.getId();
                                }
                                return cell.value['flowElement']['Name'];
                            }
                        }
                    };
                    return Graph;
                }(mxGraph));
                grapheditor.Graph = Graph;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Sidebar = (function () {
                    function Sidebar(editorUi, container) {
                        this.sidebarTitleSize = 9;
                        this.sidebarTitles = true;
                        this.enableTooltips = true;
                        this.showTooltips = true;
                        this.tooltipDelay = 300;
                        this.tooltipImageSrc = grapheditor.Init.IMAGE_PATH + '/tooltip.png';
                        this.tooltipBorder = 16;
                        this.maxTooltipWidth = 400;
                        this.maxTooltipHeight = 400;
                        this.tooltipTitles = true;
                        this.palettes = new Object();
                        this.taglist = new Object();
                        this.collapsedImage = grapheditor.Init.IMAGE_PATH + '/collapsed.gif';
                        this.expandedImage = grapheditor.Init.IMAGE_PATH + '/expanded.gif';
                        this.thumbWidth = 50;
                        this.thumbHeight = 50;
                        this.thumbPadding = (document["documentMode"] >= 5) ? 0 : 1;
                        this.thumbBorder = 2;
                        this.defaultImageHeight = 40;
                        this.defaultImageWidth = 40;
                        this.editorUi = editorUi;
                        this.container = container;
                        this.graph = this.createTemporaryGraph(this.editorUi.graph.getStylesheet());
                        this.graph.cellRenderer.antiAlias = false;
                        this.graph.foldingEnabled = false;
                        if (!mxClient.IS_IE && !mxClient.IS_IE11) {
                            this.graph.container.style.display = 'none';
                        }
                    }
                    Sidebar.prototype.reset = function (toolBox) {
                        this.addBpmnPalette(toolBox, true);
                    };
                    Sidebar.prototype.destroy = function () {
                        if (this.graph != null) {
                            if (this.graph.container != null && this.graph.container.parentNode != null) {
                                this.graph.container.parentNode.removeChild(this.graph.container);
                            }
                            this.graph.destroy();
                            this.graph = null;
                        }
                    };
                    Sidebar.prototype.addGeneralPalette = function (expand) {
                        var that = this;
                        var lineTags = 'line lines connector connectors connection connections arrow arrows ';
                        var list = new grapheditor.List();
                        list.add(this.createVertexTemplateEntry('shape=rectangle;rounded=0;whiteSpace=wrap;', 120, 60, '', 'Rectangle', null, null, 'rect rectangle box'));
                        list.add(this.createEdgeTemplateEntry('shape=flexArrow;endArrow=classic;startArrow=classic;fillColor=#ffffff;', 50, 50, '', 'Bidirectional Arrow', null, lineTags + 'bidirectional'));
                        list.add(this.addEntry('curve', function () {
                            var cell = new mxCell('', new mxGeometry(0, 0, 50, 50), 'curved=1;endArrow=classic;html=1;');
                            cell.geometry.setTerminalPoint(new mxPoint(0, 50), true);
                            cell.geometry.setTerminalPoint(new mxPoint(50, 0), false);
                            cell.geometry.points = [new mxPoint(50, 50), new mxPoint(0, 0)];
                            cell.geometry.relative = true;
                            cell.edge = true;
                            return that.createEdgeTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Curve');
                        }));
                        list.add(this.createVertexTemplateEntry('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/icon-box.png", this.defaultImageWidth, this.defaultImageHeight, '', "icon-box", null, null, ""));
                        list.add(this.createVertexTemplateEntry('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/icon-app.png", this.defaultImageWidth, this.defaultImageHeight, '', "icon-app", null, null, ""));
                        this.addPaletteFunctions('general', mxResources.get('general'), (expand != null) ? expand : true, list.array);
                    };
                    Sidebar.prototype.addBpmnPalette = function (toolBox, expand) {
                        var that = this;
                        var lineTags = 'line lines connector connectors connection connections arrow arrows ';
                        var list = new grapheditor.List();
                        list.add(this.createVertexTemplateEntry('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/StartEvent.png;verticalLabelPosition=bottom;verticalAlign=top", this.defaultImageWidth, this.defaultImageHeight, 'bpmn.StartEvent', "开始事件", true, true, ""));
                        list.add(this.createVertexTemplateEntry('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/EndEvent.png;verticalLabelPosition=bottom;verticalAlign=top", this.defaultImageWidth, this.defaultImageHeight, 'bpmn.EndEvent', "结束事件", true, true, ""));
                        list.add(this.createVertexTemplateEntry('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/BeCreationRuleNode.png;verticalLabelPosition=bottom;verticalAlign=top", this.defaultImageWidth, this.defaultImageHeight, 'aif.Flowchart.BeCreationRuleNode', "生单规则", true, true, ""));
                        list.add(this.createVertexTemplateEntry('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/BeCreationProcessNode.png;verticalLabelPosition=bottom;verticalAlign=top", this.defaultImageWidth, this.defaultImageHeight, 'aif.Flowchart.BeCreationProcessNode', "生单流程", true, true, ""));
                        list.add(this.createVertexTemplateEntry('shape=image;image=' + grapheditor.Init.IMAGE_PATH + "/bpmn/BeNode.png;verticalLabelPosition=bottom;verticalAlign=top", this.defaultImageWidth, this.defaultImageHeight, 'aif.Flowchart.BeNode', "业务实体", true, true, ""));
                        this.addPaletteFunctions('sidebar_bpmn2.0', "BPMN 2.0", (expand != null) ? expand : true, list.array);
                    };
                    Sidebar.prototype.hideTooltip = function () {
                        if (this.thread != null) {
                            window.clearTimeout(this.thread);
                            this.thread = null;
                        }
                        if (this.tooltip != null) {
                            this.tooltip.style.display = 'none';
                            this.tooltipImage.style.visibility = 'hidden';
                            this.currentElt = null;
                        }
                    };
                    Sidebar.prototype.createTemporaryGraph = function (stylesheet) {
                        var graph = new mxGraph(document.createElement('div'), null, null, stylesheet);
                        graph.resetViewOnRootChange = false;
                        graph.setConnectable(false);
                        graph.gridEnabled = false;
                        graph.autoScroll = false;
                        graph.setTooltips(false);
                        graph.setEnabled(false);
                        graph.container.style.visibility = 'hidden';
                        graph.container.style.position = 'absolute';
                        graph.container.style.overflow = 'hidden';
                        graph.container.style.height = '1px';
                        graph.container.style.width = '1px';
                        return graph;
                    };
                    Sidebar.prototype.addPaletteFunctions = function (id, title, expanded, fns) {
                        var a;
                        var onInit = function (content) {
                            for (var i = 0; i < fns.length; i++) {
                                content.appendChild(fns[i]());
                            }
                        };
                        this.addPalette(id, title, expanded, onInit);
                    };
                    Sidebar.prototype.addPalette = function (id, title, expanded, onInit) {
                        var elt = this.createPaletteTitle(title);
                        this.container.appendChild(elt);
                        var div = document.createElement('div');
                        div.className = 'geSidebar';
                        if (mxClient.IS_POINTER) {
                            div.style.touchAction = 'none';
                        }
                        if (expanded) {
                            onInit(div);
                            onInit = null;
                        }
                        else {
                            div.style.display = 'none';
                        }
                        this.addFoldingHandler(elt, div, onInit);
                        var outer = document.createElement('div');
                        outer.appendChild(div);
                        this.container.appendChild(outer);
                        if (id != null) {
                            this.palettes[id] = [elt, outer];
                        }
                    };
                    Sidebar.prototype.createPaletteTitle = function (label) {
                        var elt = document.createElement('a');
                        elt.setAttribute('href', 'javascript:void(0);');
                        elt.setAttribute('title', mxResources.get('sidebarTooltip'));
                        elt.className = 'geTitle';
                        mxUtils.write(elt, label);
                        return elt;
                    };
                    Sidebar.prototype.addFoldingHandler = function (title, content, onInit) {
                        var that = this;
                        var initialized = false;
                        if (!mxClient.IS_IE || document["documentMode"] >= 8) {
                            title.style.backgroundImage = (content.style.display == 'none') ?
                                'url(\'' + this.collapsedImage + '\')' : 'url(\'' + this.expandedImage + '\')';
                        }
                        title.style.backgroundRepeat = 'no-repeat';
                        title.style.backgroundPosition = '0% 50%';
                        mxEvent.addListener(title, 'click', function (evt) {
                            if (content.style.display == 'none') {
                                if (!initialized) {
                                    initialized = true;
                                    if (onInit != null) {
                                        title.style.cursor = 'wait';
                                        var prev_1 = title.innerHTML;
                                        title.innerHTML = mxResources.get('loading') + '...';
                                        window.setTimeout(function () {
                                            var fo = mxClient.NO_FO;
                                            mxClient.NO_FO = grapheditor.EditorUi.originalNoForeignObject;
                                            onInit(content);
                                            mxClient.NO_FO = fo;
                                            content.style.display = 'block';
                                            title.style.cursor = '';
                                            title.innerHTML = prev_1;
                                        }, 0);
                                    }
                                    else {
                                        content.style.display = 'block';
                                    }
                                }
                                else {
                                    content.style.display = 'block';
                                }
                                title.style.backgroundImage = 'url(\'' + that.expandedImage + '\')';
                            }
                            else {
                                title.style.backgroundImage = 'url(\'' + that.collapsedImage + '\')';
                                content.style.display = 'none';
                            }
                            mxEvent.consume(evt);
                        });
                    };
                    Sidebar.prototype.createVertexTemplateEntry = function (style, width, height, value, title, showLabel, showTitle, tags) {
                        tags = (tags != null && tags.length > 0) ? tags : title.toLowerCase();
                        var that = this;
                        var funct = function () {
                            return that.createVertexTemplate(style, width, height, value, title, showLabel, showTitle);
                        };
                        return this.addEntry(tags, funct);
                    };
                    Sidebar.prototype.createVertexTemplate = function (style, width, height, value, title, showLabel, showTitle, allowCellsInserted) {
                        var cells = [new mxCell((value != null) ? value : '', new mxGeometry(0, 0, width, height), style)];
                        cells[0].vertex = true;
                        return this.createVertexTemplateFromCells(cells, width, height, title, showLabel, showTitle, allowCellsInserted);
                    };
                    Sidebar.prototype.createVertexTemplateFromCells = function (cells, width, height, title, showLabel, showTitle, allowCellsInserted) {
                        return this.createItem(cells, title, showLabel, showTitle, width, height, allowCellsInserted);
                    };
                    Sidebar.prototype.createEdgeTemplateEntry = function (style, width, height, value, title, showLabel, tags, allowCellsInserted) {
                        tags = (tags != null && tags.length > 0) ? tags : title.toLowerCase();
                        var that = this;
                        var funct = function () {
                            return that.createEdgeTemplate(style, width, height, value, title, showLabel, allowCellsInserted);
                        };
                        return this.addEntry(tags, funct);
                    };
                    Sidebar.prototype.createEdgeTemplate = function (style, width, height, value, title, showLabel, allowCellsInserted) {
                        var cell = new mxCell((value != null) ? value : '', new mxGeometry(0, 0, width, height), style);
                        cell.geometry.setTerminalPoint(new mxPoint(0, height), true);
                        cell.geometry.setTerminalPoint(new mxPoint(width, 0), false);
                        cell.geometry.relative = true;
                        cell.edge = true;
                        return this.createEdgeTemplateFromCells([cell], width, height, title, showLabel, allowCellsInserted);
                    };
                    ;
                    Sidebar.prototype.createEdgeTemplateFromCells = function (cells, width, height, title, showLabel, allowCellsInserted) {
                        return this.createItem(cells, title, showLabel, true, width, height, allowCellsInserted);
                    };
                    Sidebar.prototype.addEntry = function (tags, fn) {
                        if (this.taglist != null && tags != null && tags.length > 0) {
                            var that_1 = this;
                            var tmp = tags.toLowerCase().replace(/[\/\,\(\)]/g, ' ').split(' ');
                            var doAddEntry = function (tag) {
                                if (tag.length > 1) {
                                    var entry = that_1.taglist[tag];
                                    if (typeof entry !== 'object') {
                                        entry = { entries: [], dict: new mxDictionary() };
                                        that_1.taglist[tag] = entry;
                                    }
                                    if (entry.dict.get(fn) == null) {
                                        entry.dict.put(fn, fn);
                                        entry.entries.push(fn);
                                    }
                                }
                            };
                            for (var i = 0; i < tmp.length; i++) {
                                doAddEntry(tmp[i]);
                                var normalized = tmp[i].replace(/\.*\d*$/, '');
                                if (normalized != tmp[i]) {
                                    doAddEntry(normalized);
                                }
                            }
                        }
                        return fn;
                    };
                    Sidebar.prototype.createItem = function (cells, title, showLabel, showTitle, width, height, allowCellsInserted) {
                        var that = this;
                        var elt = document.createElement('a');
                        elt.setAttribute('href', 'javascript:void(0);');
                        elt.className = 'geItem';
                        elt.style.overflow = 'hidden';
                        var border = (mxClient.IS_QUIRKS) ? 8 + 2 * this.thumbPadding : 2 * this.thumbBorder;
                        elt.style.width = (this.thumbWidth + border) + 'px';
                        elt.style.height = (this.thumbHeight + border) + 'px';
                        elt.style.padding = this.thumbPadding + 'px';
                        if (mxClient.IS_IE6) {
                            elt.style.border = 'none';
                        }
                        mxEvent.addListener(elt, 'click', function (evt) {
                            mxEvent.consume(evt);
                        });
                        this.createThumb(cells, this.thumbWidth, this.thumbHeight, elt, title, showLabel, showTitle, width, height);
                        var bounds = new mxRectangle(0, 0, width, height);
                        if (cells.length > 0) {
                            var ds = this.createDragSource(elt, this.createDragPreview(width, height), cells, bounds);
                        }
                        if (!mxClient.IS_IOS) {
                            mxEvent.addGestureListeners(elt, null, function (evt) {
                                if (mxEvent.isMouseEvent(evt)) {
                                    that.showTooltip(elt, cells, bounds.width, bounds.height, title, showLabel);
                                }
                            });
                            mxEvent.addListener(elt, (mxClient.IS_POINTER) ? 'pointerdown' : 'mousedown', function () {
                                that.hideTooltip();
                                that.showTooltips = false;
                            });
                            mxEvent.addListener(elt, (mxClient.IS_POINTER) ? 'pointerup' : 'mouseup', function () {
                                that.showTooltips = true;
                            });
                            mxEvent.addListener(elt, (mxClient.IS_POINTER) ? 'pointerleave' : 'mouseleave', function (evt) {
                                that.hideTooltip();
                                that.showTooltips = true;
                            });
                        }
                        return elt;
                    };
                    Sidebar.prototype.createThumb = function (cells, width, height, parent, title, showLabel, showTitle, realWidth, realHeight) {
                        this.graph.labelsVisible = (showLabel == null || showLabel);
                        var fo = mxClient.NO_FO;
                        mxClient.NO_FO = grapheditor.EditorUi.originalNoForeignObject;
                        this.graph.view.scaleAndTranslate(1, 0, 0);
                        this.graph.addCells(cells);
                        var bounds = this.graph.getGraphBounds();
                        var s = Math.floor(Math.min((width - 2 * this.thumbBorder) / bounds.width, (height - 2 * this.thumbBorder) / bounds.height) * 100) / 100;
                        this.graph.view.scaleAndTranslate(s, Math.floor((width - bounds.width * s) / 2 / s - bounds.x), Math.floor((height - bounds.height * s) / 2 / s - bounds.y));
                        var node = null;
                        if (this.graph.dialect == mxConstants.DIALECT_SVG && !mxClient.NO_FO) {
                            node = this.graph.view.getCanvas().ownerSVGElement.cloneNode(true);
                        }
                        else {
                            node = this.graph.container.cloneNode(false);
                            node.innerHTML = this.graph.container.innerHTML;
                        }
                        this.graph.getModel().clear();
                        mxClient.NO_FO = fo;
                        if (mxClient.IS_IE6) {
                            parent.style.backgroundImage = 'url(' + grapheditor.EditorUi.transparentImage + ')';
                        }
                        node.style.position = 'relative';
                        node.style.overflow = 'hidden';
                        node.style.cursor = 'move';
                        node.style.left = this.thumbBorder + 'px';
                        node.style.top = this.thumbBorder + 'px';
                        node.style.width = width + 'px';
                        node.style.height = height + 'px';
                        node.style.visibility = '';
                        node.style.minWidth = '';
                        node.style.minHeight = '';
                        parent.appendChild(node);
                        if (this.sidebarTitles && title != null && showTitle != false) {
                            var border = (mxClient.IS_QUIRKS) ? 2 * this.thumbPadding + 2 : 0;
                            parent.style.height = (this.thumbHeight + border + this.sidebarTitleSize + 8) + 'px';
                            var div = document.createElement('div');
                            div.style.fontSize = this.sidebarTitleSize + 'px';
                            div.style.color = '#303030';
                            div.style.textAlign = 'center';
                            div.style.whiteSpace = 'nowrap';
                            if (mxClient.IS_IE) {
                                div.style.height = (this.sidebarTitleSize + 12) + 'px';
                            }
                            div.style.paddingTop = '4px';
                            mxUtils.write(div, title);
                            parent.appendChild(div);
                        }
                    };
                    Sidebar.prototype.showTooltip = function (elt, cells, w, h, title, showLabel) {
                        if (this.enableTooltips && this.showTooltips) {
                            if (this.currentElt != elt) {
                                var that_2 = this;
                                if (this.thread != null) {
                                    window.clearTimeout(this.thread);
                                    this.thread = null;
                                }
                                var show = function () {
                                    if (that_2.tooltip == null) {
                                        that_2.tooltip = document.createElement('div');
                                        that_2.tooltip.className = 'geSidebarTooltip';
                                        that_2.tooltip.style.zIndex = (mxPopupMenu.prototype.zIndex - 1).toString();
                                        document.body.appendChild(that_2.tooltip);
                                        that_2.graph2 = new mxGraph(that_2.tooltip, null, null, that_2.editorUi.graph.getStylesheet());
                                        that_2.graph2.resetViewOnRootChange = false;
                                        that_2.graph2.foldingEnabled = false;
                                        that_2.graph2.gridEnabled = false;
                                        that_2.graph2.autoScroll = false;
                                        that_2.graph2.setTooltips(false);
                                        that_2.graph2.setConnectable(false);
                                        that_2.graph2.setEnabled(false);
                                        if (!mxClient.IS_SVG) {
                                            that_2.graph2.view.canvas.style.position = 'relative';
                                        }
                                        that_2.tooltipImage = mxUtils.createImage(that_2.tooltipImageSrc);
                                        that_2.tooltipImage.className = 'geSidebarTooltipImage';
                                        that_2.tooltipImage.style.zIndex = (mxPopupMenu.prototype.zIndex - 1).toString();
                                        that_2.tooltipImage.style.position = 'absolute';
                                        that_2.tooltipImage.style.width = '14px';
                                        that_2.tooltipImage.style.height = '27px';
                                        document.body.appendChild(that_2.tooltipImage);
                                    }
                                    that_2.graph2.model.clear();
                                    that_2.graph2.view.setTranslate(that_2.tooltipBorder, that_2.tooltipBorder);
                                    if (w > that_2.maxTooltipWidth || h > that_2.maxTooltipHeight) {
                                        that_2.graph2.view.scale = Math.round(Math.min(that_2.maxTooltipWidth / w, that_2.maxTooltipHeight / h) * 100) / 100;
                                    }
                                    else {
                                        that_2.graph2.view.scale = 1;
                                    }
                                    that_2.tooltip.style.display = 'block';
                                    that_2.graph2.labelsVisible = (showLabel == null || showLabel);
                                    var fo = mxClient.NO_FO;
                                    mxClient.NO_FO = grapheditor.EditorUi.originalNoForeignObject;
                                    that_2.graph2.addCells(cells);
                                    mxClient.NO_FO = fo;
                                    var bounds = that_2.graph2.getGraphBounds();
                                    var width = bounds.width + 2 * that_2.tooltipBorder + 4;
                                    var height = bounds.height + 2 * that_2.tooltipBorder;
                                    if (mxClient.IS_QUIRKS) {
                                        height += 4;
                                        that_2.tooltip.style.overflow = 'hidden';
                                    }
                                    else {
                                        that_2.tooltip.style.overflow = 'visible';
                                    }
                                    that_2.tooltipImage.style.visibility = 'visible';
                                    that_2.tooltip.style.width = width + 'px';
                                    if (that_2.tooltipTitles && title != null && title.length > 0) {
                                        if (that_2.tooltipTitle == null) {
                                            that_2.tooltipTitle = document.createElement('div');
                                            that_2.tooltipTitle.style.borderTop = '1px solid gray';
                                            that_2.tooltipTitle.style.textAlign = 'center';
                                            that_2.tooltipTitle.style.width = '100%';
                                            that_2.tooltipTitle.style.overflow = 'hidden';
                                            if (mxClient.IS_SVG) {
                                                that_2.tooltipTitle.style.paddingTop = '6px';
                                            }
                                            else {
                                                that_2.tooltipTitle.style.position = 'absolute';
                                                that_2.tooltipTitle.style.paddingTop = '6px';
                                            }
                                            that_2.tooltip.appendChild(that_2.tooltipTitle);
                                        }
                                        else {
                                            that_2.tooltipTitle.innerHTML = '';
                                        }
                                        that_2.tooltipTitle.style.display = '';
                                        mxUtils.write(that_2.tooltipTitle, title);
                                        var ddy = that_2.tooltipTitle.offsetHeight + 10;
                                        height += ddy;
                                        if (mxClient.IS_SVG) {
                                            that_2.tooltipTitle.style.marginTop = (2 - ddy) + 'px';
                                        }
                                        else {
                                            height -= 6;
                                            that_2.tooltipTitle.style.top = (height - ddy) + 'px';
                                        }
                                    }
                                    else if (that_2.tooltipTitle != null && that_2.tooltipTitle.parentNode != null) {
                                        that_2.tooltipTitle.style.display = 'none';
                                    }
                                    that_2.tooltip.style.height = height + 'px';
                                    var x0 = -Math.round(bounds.x - that_2.tooltipBorder);
                                    var y0 = -Math.round(bounds.y - that_2.tooltipBorder);
                                    var b = document.body;
                                    var d = document.documentElement;
                                    var off = new mxPoint(0, 0);
                                    var bottom = Math.max(b.clientHeight || 0, d.clientHeight);
                                    var left = that_2.container.clientWidth + that_2.editorUi.splitSize + 3 + that_2.editorUi.container.offsetLeft + off.x;
                                    var top = Math.min(bottom - height - 20, Math.max(0, (that_2.editorUi.container.offsetTop +
                                        that_2.container.offsetTop + elt.offsetTop - that_2.container.scrollTop - height / 2 + 16))) + off.y;
                                    if (mxClient.IS_SVG) {
                                        if (x0 != 0 || y0 != 0) {
                                            that_2.graph2.view.canvas.setAttribute('transform', 'translate(' + x0 + ',' + y0 + ')');
                                        }
                                        else {
                                            that_2.graph2.view.canvas.removeAttribute('transform');
                                        }
                                    }
                                    else {
                                        that_2.graph2.view.drawPane.style.left = x0 + 'px';
                                        that_2.graph2.view.drawPane.style.top = y0 + 'px';
                                    }
                                    that_2.tooltip.style.position = 'absolute';
                                    that_2.tooltip.style.left = left + 'px';
                                    that_2.tooltip.style.top = top + 'px';
                                    that_2.tooltipImage.style.left = (left - 13) + 'px';
                                    that_2.tooltipImage.style.top = (top + height / 2 - 13) + 'px';
                                };
                                if (this.tooltip != null && this.tooltip.style.display != 'none') {
                                    show();
                                }
                                else {
                                    this.thread = window.setTimeout(show, this.tooltipDelay);
                                }
                                this.currentElt = elt;
                            }
                        }
                    };
                    Sidebar.prototype.createDragPreview = function (width, height) {
                        var elt = document.createElement('div');
                        elt.style.border = '1px dashed black';
                        elt.style.width = width + 'px';
                        elt.style.height = height + 'px';
                        return elt;
                    };
                    Sidebar.prototype.createDragSource = function (elt, preview, cells, bounds) {
                        var dragSource = mxUtils.makeDraggable(elt, this.editorUi.graph, function (graph, evt, target, x, y) {
                            var cloneCells = graph.getModel().cloneCells(cells, true);
                            var tempCells = graph.importCells(cloneCells, x, y, target);
                            console.log("开始添加bpmn属性");
                            grapheditor.BpmnMxGraphAdaper.setBpmnElementIntoMxCell(graph, tempCells);
                            console.log("添加bpmn属性成功");
                            graph.refresh();
                            graph.setSelectionCells(tempCells);
                        }, preview, 0, 0, null, true, true);
                        return dragSource;
                    };
                    return Sidebar;
                }());
                grapheditor.Sidebar = Sidebar;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
var inspur;
(function (inspur) {
    var gsp;
    (function (gsp) {
        var aif;
        (function (aif) {
            var grapheditor;
            (function (grapheditor) {
                var Toolbar = (function () {
                    function Toolbar(editorUi, container) {
                        this.editorUi = editorUi;
                        this.container = container;
                        this.dropdownImage = grapheditor.Init.IMAGE_PATH + '/dropdown.gif';
                    }
                    Toolbar.prototype.reset = function (toolStrip) {
                        while (this.container.hasChildNodes()) {
                            this.container.removeChild(this.container.firstChild);
                        }
                        if (toolStrip == null)
                            return;
                        for (var _i = 0, _a = toolStrip.items.array; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item instanceof grapheditor.ToolStripButton) {
                                this.container.appendChild(this.buildToolbarButton(item));
                            }
                            if (item instanceof grapheditor.ToolStripDropDownButton) {
                                this.container.appendChild(this.buildToolbarButton(item));
                            }
                            if (item instanceof grapheditor.ToolStripSeparator) {
                                this.addToolStripSeparator();
                            }
                        }
                    };
                    Toolbar.prototype.destroy = function () {
                    };
                    Toolbar.prototype.buildToolbarButton = function (item) {
                        var that = this;
                        var tooltip = item.toolTipText || mxResources.get(item.resourceKey);
                        if (item instanceof grapheditor.ToolStripButton) {
                            var action = this.editorUi.actions.getAction(item.actionKey);
                            if (action != null && action.getShortcut() != null) {
                                tooltip += " (" + action.getShortcut() + ")";
                            }
                        }
                        var btn = this.createToolbarButton(tooltip);
                        if (item.displayStyle == grapheditor.ToolStripItemDisplayStyle.ImageAndText || item.displayStyle == grapheditor.ToolStripItemDisplayStyle.Image) {
                            var btnImage = this.createToolbarButtonImage(item.imageSrc, item.imageClassName);
                            btn.appendChild(btnImage);
                        }
                        if (item.displayStyle == grapheditor.ToolStripItemDisplayStyle.ImageAndText || item.displayStyle == grapheditor.ToolStripItemDisplayStyle.Text) {
                            var btnText_1 = this.createToolbarButtonText(item.text || mxResources.get(item.resourceKey));
                            btn.appendChild(btnText_1);
                            if (item.text == "100%" && item.resourceKey == grapheditor.ResourceKeys.pmf_zoom) {
                                this.editorUi.graph.view.addListener(mxEvent.EVENT_SCALE, function () {
                                    btnText_1.innerText = Math.round(that.editorUi.graph.view.scale * 100) + '%';
                                });
                            }
                        }
                        if (item instanceof grapheditor.ToolStripButton) {
                            this.addToolStripButtonHandler(btn, item);
                        }
                        if (item instanceof grapheditor.ToolStripDropDownButton) {
                            var btnDropdownImage = this.createToolbarButtonDropdownImage();
                            btn.appendChild(btnDropdownImage);
                            this.addToolStripDropDownButtonHandler(btn, item);
                        }
                        return btn;
                    };
                    Toolbar.prototype.addPopupMenuItems = function (popupMenu, items, parent) {
                        var that = this;
                        var _loop_2 = function (item) {
                            if (item instanceof grapheditor.ToolStripMenuItem) {
                                var action_1 = this_1.editorUi.actions.getAction(item.actionKey);
                                var row = popupMenu.addItem(item.text || mxResources.get(item.resourceKey), null, function (evt) {
                                    if (action_1 != null && action_1.isEnabled()) {
                                        action_1.execute(that.editorUi, evt);
                                    }
                                }, parent, null, action_1 == null ? false : action_1.isEnabled());
                                if (action_1 != null && action_1.isToggleAction() && action_1.isSelected(that.editorUi)) {
                                    popupMenu.addCheckmark(row, grapheditor.EditorUi.checkmarkImage);
                                }
                                this_1.addShortcut(row, action_1);
                            }
                            if (item instanceof grapheditor.ToolStripSeparator) {
                                popupMenu.addSeparator(parent);
                            }
                            if (item instanceof grapheditor.ToolStripDropDownMenuItem) {
                                var row = popupMenu.addItem(mxResources.get(item.resourceKey), null, null, parent);
                                this_1.addPopupMenuItems(popupMenu, item.items, row);
                            }
                        };
                        var this_1 = this;
                        for (var _i = 0, _a = items.array; _i < _a.length; _i++) {
                            var item = _a[_i];
                            _loop_2(item);
                        }
                    };
                    Toolbar.prototype.createToolbarButton = function (tooltip) {
                        var elt = document.createElement('a');
                        elt.setAttribute('href', 'javascript:void(0);');
                        elt.className = 'geLabel';
                        if (tooltip != null)
                            elt.title = tooltip;
                        return elt;
                    };
                    Toolbar.prototype.createToolbarButtonImage = function (src, className) {
                        var elt = document.createElement('img');
                        elt.src = src;
                        if (className != null)
                            elt.className = className;
                        elt.style.display = "inline-block";
                        elt.style.verticalAlign = "middle";
                        return elt;
                    };
                    Toolbar.prototype.createToolbarButtonText = function (text, className) {
                        var elt = document.createElement('div');
                        mxUtils.write(elt, text);
                        if (className != null)
                            elt.className = className;
                        elt.style.display = "inline-block";
                        elt.style.verticalAlign = "middle";
                        elt.style.paddingLeft = "2px";
                        return elt;
                    };
                    Toolbar.prototype.createToolbarButtonDropdownImage = function () {
                        var elt = document.createElement('img');
                        elt.src = this.dropdownImage;
                        elt.style.display = "inline-block";
                        elt.style.verticalAlign = "middle";
                        elt.style.paddingLeft = "2px";
                        return elt;
                    };
                    Toolbar.prototype.addToolStripSeparator = function (c) {
                        c = (c != null) ? c : this.container;
                        var elt = document.createElement('div');
                        elt.className = 'geSeparator';
                        c.appendChild(elt);
                        return elt;
                    };
                    Toolbar.prototype.appendSeparator = function (c) {
                        return this.addToolStripSeparator(c);
                    };
                    Toolbar.prototype.addShortcut = function (item, action) {
                        if (action != null && action.getShortcut() != null) {
                            var td = item.firstChild.nextSibling.nextSibling;
                            var span = document.createElement('span');
                            span.style.color = 'gray';
                            mxUtils.write(span, action.getShortcut());
                            td.appendChild(span);
                        }
                    };
                    Toolbar.prototype.addToolStripButtonHandler = function (elt, item) {
                        var action = this.editorUi.actions.getAction(item.actionKey);
                        if (action == null)
                            return;
                        var that = this;
                        mxEvent.addListener(elt, 'click', function (evt) {
                            if (action != null && action.isEnabled()) {
                                action.execute(that.editorUi, evt);
                            }
                            mxEvent.consume(evt);
                        });
                        if (document["documentMode"] != null && document["documentMode"] >= 9) {
                            mxEvent.addListener(elt, 'mousedown', function (evt) {
                                evt.preventDefault();
                            });
                        }
                        var classname = elt.className;
                        elt["setEnabled"] = function (value) {
                            if (value) {
                                elt.className = classname;
                            }
                            else {
                                elt.className = classname + ' mxDisabled';
                            }
                        };
                        elt["setEnabled"](action.isEnabled());
                        action.addListener('stateChanged', function () {
                            elt["setEnabled"](action.isEnabled());
                        });
                    };
                    Toolbar.prototype.addToolStripDropDownButtonHandler = function (elt, item, showLabels, showDisabled) {
                        showLabels = showLabels || true;
                        showDisabled = showDisabled || true;
                        var that = this;
                        var show = true;
                        var funct = function (popupMenu, cell, evt) {
                            that.addPopupMenuItems(popupMenu, item.items, popupMenu);
                        };
                        mxEvent.addListener(elt, 'click', mxUtils.bind(this, function (evt) {
                            if (show && (elt["enabled"] == null || elt["enabled"])) {
                                that.editorUi.graph.popupMenuHandler.hideMenu();
                                var popupMenu_1 = new mxPopupMenu(funct);
                                popupMenu_1.div.className += ' geToolbarMenu';
                                popupMenu_1.showDisabled = showDisabled;
                                popupMenu_1.labels = showLabels;
                                popupMenu_1.autoExpand = true;
                                var offset = mxUtils.getOffset(elt);
                                popupMenu_1.popup(offset.x, offset.y + elt.offsetHeight, null, evt);
                                that.editorUi.setCurrentMenu(popupMenu_1, elt);
                                if (!showLabels && popupMenu_1.div.scrollHeight > popupMenu_1.div.clientHeight) {
                                    popupMenu_1.div.style.width = '40px';
                                }
                                popupMenu_1.hideMenu = mxUtils.bind(that, function () {
                                    mxPopupMenu.prototype.hideMenu.apply(popupMenu_1, arguments);
                                    that.editorUi.resetCurrentMenu();
                                    popupMenu_1.destroy();
                                });
                            }
                            show = true;
                            mxEvent.consume(evt);
                        }));
                        mxEvent.addListener(elt, 'mousedown', mxUtils.bind(this, function (evt) {
                            show = this.currentElt != elt;
                            if (document["documentMode"] != null && document["documentMode"] >= 9) {
                                evt.preventDefault();
                            }
                        }));
                    };
                    Toolbar.prototype.addMenuFunction = function (label, tooltip, showLabels, funct, c, showAll) {
                        return this.addMenuFunctionInContainer((c != null) ? c : this.container, label, tooltip, showLabels, funct, showAll);
                    };
                    Toolbar.prototype.addMenuFunctionInContainer = function (container, label, tooltip, showLabels, funct, showAll) {
                        var elt = (showLabels) ? this.createLabel(label) : this.createButton(label);
                        this.initElement(elt, tooltip);
                        this.addMenuHandler(elt, showLabels, funct, showAll);
                        container.appendChild(elt);
                        return elt;
                    };
                    Toolbar.prototype.createLabel = function (label) {
                        var elt = document.createElement('a');
                        elt.setAttribute('href', 'javascript:void(0);');
                        elt.className = 'geLabel';
                        mxUtils.write(elt, label);
                        return elt;
                    };
                    Toolbar.prototype.createButton = function (className) {
                        var elt = document.createElement('a');
                        elt.setAttribute('href', 'javascript:void(0);');
                        elt.className = 'geButton';
                        var inner = document.createElement('div');
                        if (className != null) {
                            inner.className = 'geSprite ' + className;
                        }
                        elt.appendChild(inner);
                        return elt;
                    };
                    Toolbar.prototype.initElement = function (elt, tooltip) {
                        if (tooltip != null) {
                            elt.setAttribute('title', tooltip);
                        }
                        this.addEnabledState(elt);
                    };
                    Toolbar.prototype.addEnabledState = function (elt) {
                        var className = elt.className;
                        var setEnable = function (elt, enabled) {
                            elt.setAttribute("enabled", String(enabled ? enabled : true));
                            if (enabled) {
                                elt.className = className;
                            }
                            else {
                                elt.className = className + " mxDisabled";
                            }
                        };
                    };
                    Toolbar.prototype.addMenuHandler = function (elt, showLabels, funct, showAll) {
                        if (funct != null) {
                        }
                    };
                    return Toolbar;
                }());
                grapheditor.Toolbar = Toolbar;
            })(grapheditor = aif.grapheditor || (aif.grapheditor = {}));
        })(aif = gsp.aif || (gsp.aif = {}));
    })(gsp = inspur.gsp || (inspur.gsp = {}));
})(inspur || (inspur = {}));
//# sourceMappingURL=inspur.gsp.aif.grapheditor.js.map