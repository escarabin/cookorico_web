"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var UNITYTinyMCE = (function () {
    function UNITYTinyMCE(elementRef) {
        this.newContentInput = new core_1.EventEmitter();
        this.elementRef = elementRef;
        var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        var uniqid = randLetter + Date.now();
        this.elementID = 'tinymce' + uniqid;
        this.htmlContent = this.mceContent;
        // this.contentChanged = new EventEmitter();
    }
    UNITYTinyMCE.prototype.ngAfterViewInit = function () {
        var __this = this;
        // Clone base textarea
        var baseTextArea = this.elementRef.nativeElement.querySelector("#baseTextArea");
        var clonedTextArea = baseTextArea.cloneNode(true);
        clonedTextArea.id = this.elementID;
        var formGroup = this.elementRef.nativeElement.querySelector("#tinyFormGroup");
        formGroup.appendChild(clonedTextArea);
        if (this.readOnly > 0) {
            this.readOnly = 1;
        }
        this.htmlContent = this.mceContent;
        //Attach tinyMCE to cloned textarea
        tinymce.init({
            language: 'fr_FR',
            mode: 'exact',
            height: 300,
            readonly: __this.readOnly,
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table contextmenu paste code'
            ],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            elements: this.elementID,
            setup: this.tinyMCESetup.bind(this)
        });
    };
    UNITYTinyMCE.prototype.ngOnDestroy = function () {
        // TODO: destroy tinymce element on view destroy
        //destroy cloned elements
        // tinymce.get(this.elementID).remove();
        /* var elem = document.getElementById(this.elementID);
        elem.parentElement.removeChild(elem); */
    };
    UNITYTinyMCE.prototype.tinyMCESetup = function (ed) {
        ed.on('keyup', this.tinyMCEOnKeyup.bind(this));
    };
    UNITYTinyMCE.prototype.tinyMCEOnKeyup = function (e) {
        this.newContentInput.emit(tinymce.get(this.elementID).getContent());
    };
    Object.defineProperty(UNITYTinyMCE.prototype, "mceContent", {
        set: function (content) {
            this.htmlContent = content;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output()
    ], UNITYTinyMCE.prototype, "newContentInput");
    __decorate([
        core_1.Input()
    ], UNITYTinyMCE.prototype, "readOnly");
    __decorate([
        core_1.Input()
    ], UNITYTinyMCE.prototype, "mceContent");
    UNITYTinyMCE = __decorate([
        core_1.Component({
            selector: 'unity-tinymce',
            template: '<div id="tinyFormGroup" class="form-group">' +
                '<div class="hidden"> ' +
                '<textarea id="baseTextArea">{{htmlContent}}</textarea> ' +
                '</div> ' +
                '</div>'
        }),
        __param(0, core_1.Inject(core_1.ElementRef))
    ], UNITYTinyMCE);
    return UNITYTinyMCE;
}());
exports.UNITYTinyMCE = UNITYTinyMCE;
