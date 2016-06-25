System.register(['@angular/common', '@angular/core', '@angular/src/facade/lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var common_1, core_1, core_2, common_2, lang_1, core_3;
    var ChosenComponent, CHOSEN_VALUE_ACCESSOR, ChosenControlValueAccessor, Chosen;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            ChosenComponent = (function () {
                function ChosenComponent(elementRef) {
                    this.chosenConfig = {};
                    this.value = null;
                    this.elementRef = elementRef;
                    this.change = new core_1.EventEmitter();
                }
                ChosenComponent.prototype.ngOnInit = function () {
                    if (this.allowSingleDeselect != null) {
                        this.chosenConfig.allow_single_deselect = this.allowSingleDeselect;
                    }
                    if (this.disableSearch != null) {
                        this.chosenConfig.disable_search = this.disableSearch;
                    }
                    if (this.disableSearchThreshold != null) {
                        this.chosenConfig.disable_search_threshold = this.disableSearchThreshold;
                    }
                    if (this.enableSplitWordSearch != null) {
                        this.chosenConfig.enable_split_word_search = this.enableSplitWordSearch;
                    }
                    /*if (this.inheritSelectClasses != null) {
                     this.chosenConfig.inherit_select_classes = this.inheritSelectClasses;
                     }*/
                    if (this.maxSelectedOptions != null) {
                        this.chosenConfig.max_selected_options = this.maxSelectedOptions;
                    }
                    if (this.noResultsText != null) {
                        this.chosenConfig.no_results_text = this.noResultsText;
                    }
                    if (this.placeholderTextMultiple != null) {
                        this.chosenConfig.placeholder_text_multiple = this.placeholderTextMultiple;
                    }
                    if (this.placeholderTextSingle != null) {
                        this.chosenConfig.placeholder_text_single = this.placeholderTextSingle;
                    }
                    if (this.searchContains != null) {
                        this.chosenConfig.search_contains = this.searchContains;
                    }
                    if (this.singleBackstrokeDelete != null) {
                        this.chosenConfig.single_backstroke_delete = this.singleBackstrokeDelete;
                    }
                    if (this.width != null) {
                        this.chosenConfig.width = this.width;
                    }
                    if (this.displayDisabledOptions != null) {
                        this.chosenConfig.display_disabled_options = this.displayDisabledOptions;
                    }
                    if (this.displaySelectedOptions != null) {
                        this.chosenConfig.display_selected_options = this.displaySelectedOptions;
                    }
                };
                ChosenComponent.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    if (this.selectElement != null) {
                        // if ref data comes before data -> reset data and update
                        if (this.value != null && changes["options"] != null) {
                            setTimeout(function () {
                                _this.selectElement.val(_this.value);
                                _this.selectElement.trigger("chosen:updated");
                                _this.value = null;
                            });
                        }
                    }
                };
                ChosenComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    var el = this.elementRef.nativeElement;
                    this.selectElement = $(el).find("select");
                    this.selectElement.chosen(this.chosenConfig);
                    this.selectElement.on('change', function (ev, e) {
                        var values = _this.selectElement.val();
                        _this.change.emit(values);
                    });
                    this.selectElement.trigger("chosen:updated");
                };
                ChosenComponent.prototype.ngOnDestroy = function () {
                    this.selectElement.chosen('destroy');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ChosenComponent.prototype, "change", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "multiple", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "allowSingleDeselect", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "disableSearch", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChosenComponent.prototype, "disableSearchThreshold", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "enableSplitWordSearch", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChosenComponent.prototype, "maxSelectedOptions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChosenComponent.prototype, "noResultsText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChosenComponent.prototype, "placeholderTextMultiple", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ChosenComponent.prototype, "placeholderTextSingle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "searchContains", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "singleBackstrokeDelete", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChosenComponent.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "displayDisabledOptions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ChosenComponent.prototype, "displaySelectedOptions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ChosenComponent.prototype, "options", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ChosenComponent.prototype, "optionsGroups", void 0);
                ChosenComponent = __decorate([
                    core_1.Component({
                        selector: 'chosen',
                        template: "\n<select [multiple]=\"multiple\">\n\n\t<template [ngIf]=\"options != null\">\n\n\t    <option *ngIf=\"allowSingleDeselect\"></option>\n\n\t\t<template [ngIf]=\"optionsGroups == null\">\n\n\t\t\t<option *ngFor=\"#option of options\" [value]=\"option.value\">{{option.label}}</option>\n\n\t    </template>\n\n\t\t<template [ngIf]=\"optionsGroups != null\">\n\n            <template ngFor #option [ngForOf]=\"options\" #i=\"index\">\n\n                <template [ngIf]=\"option.group == null\">\n\n        \t\t\t<option [value]=\"option.value\">{{option.label}}</option>\n\n\t\t\t    </template>\n\n\t\t\t</template>\n\n\t\t\t<optgroup *ngFor=\"#group of optionsGroups\" label=\"{{group.label}}\">\n\n            <template ngFor #option [ngForOf]=\"options\" #i=\"index\">\n\n                <template [ngIf]=\"option.group == group.value\">\n\n\t\t\t        <option [value]=\"option.value\">{{option.label}}</option>\n\n\t\t\t    </template>\n\n\t\t\t</template>\n\n\t\t    </optgroup>\n\n\t</template>\n\n\t</template>\n\n</select>\n    ",
                        directives: [common_1.CORE_DIRECTIVES]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ChosenComponent);
                return ChosenComponent;
            }());
            CHOSEN_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_2.Provider(common_2.NG_VALUE_ACCESSOR, { useExisting: core_2.forwardRef(function () { return ChosenControlValueAccessor; }), multi: true }));
            ChosenControlValueAccessor = (function () {
                function ChosenControlValueAccessor(_renderer, _elementRef, chosenComponent) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this.chosenComponent = chosenComponent;
                    this.onChange = function (_) {
                    };
                    this.onTouched = function () {
                    };
                    this.el = this._elementRef.nativeElement;
                }
                ChosenControlValueAccessor.prototype.writeValue = function (value) {
                    var _this = this;
                    setTimeout(function () {
                        var selectElement = $(_this.el).find("select");
                        selectElement.val(value);
                        _this.chosenComponent.value = value;
                        selectElement.trigger('chosen:updated');
                    });
                };
                ChosenControlValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = fn;
                };
                ChosenControlValueAccessor.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                ChosenControlValueAccessor = __decorate([
                    core_2.Directive({
                        selector: 'chosen[ngControl],chosen[ngFormControl],chosen[ngModel]',
                        host: { '(change)': 'onChange($event)', '(blur)': 'onTouched()' },
                        bindings: [CHOSEN_VALUE_ACCESSOR]
                    }),
                    __param(2, core_3.Host()), 
                    __metadata('design:paramtypes', [core_2.Renderer, core_1.ElementRef, ChosenComponent])
                ], ChosenControlValueAccessor);
                return ChosenControlValueAccessor;
            }());
            exports_1("Chosen", Chosen = [
                ChosenComponent,
                ChosenControlValueAccessor
            ]);
        }
    }
});
