import { bind, Input, Component, View, ElementRef, OnInit, EventEmitter, Output, Inject, ComponentRef } from '@angular/core';
import { RouteConfig } from '@angular/router';

declare var tinymce: any;

@Component({
    selector: 'unity-tinymce',
    template: '<div id="tinyFormGroup" class="form-group">' +
                '<div class="hidden"> ' +
                    '<textarea id="baseTextArea">{{htmlContent}}</textarea> ' +
                '</div> ' +
              '</div>'
})

export class UNITYTinyMCE {
    private elementRef: ElementRef;
    private elementID: string;
    public htmlContent: string;

    @Output() newContentInput: EventEmitter = new EventEmitter();
    @Input() readOnly: number;
    @Input() mceContent: string;

    constructor(@Inject(ElementRef) elementRef: ElementRef)
    {
        this.elementRef = elementRef;

        var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        var uniqid = randLetter + Date.now();

        this.elementID = 'tinymce' + uniqid;

        this.htmlContent = this.mceContent;

        this.htmlContent = "TESTING";

        // this.contentChanged = new EventEmitter();
    }

    ngAfterViewInit()
    {
        let __this = this;

        //Clone base textarea
        var baseTextArea = this.elementRef.nativeElement.querySelector("#baseTextArea");
        var clonedTextArea = baseTextArea.cloneNode(true);
        clonedTextArea.id = this.elementID;

        var formGroup = this.elementRef.nativeElement.querySelector("#tinyFormGroup");
        formGroup.appendChild(clonedTextArea);

        if (this.readOnly > 0) {
            this.readOnly = 1;
        }

        //Attach tinyMCE to cloned textarea
        tinymce.init(
            {
                language: 'fr_FR',
                mode: 'exact',
                height: 500,
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
            }
        );
    }

    ngOnDestroy() {
        //destroy cloned elements
        tinymce.get(this.elementID).remove();

        /* var elem = document.getElementById(this.elementID);
        elem.parentElement.removeChild(elem); */
    }


    tinyMCESetup(ed) {
        ed.on('keyup', this.tinyMCEOnKeyup.bind(this));
    }

    tinyMCEOnKeyup(e) {
        this.newContentInput.emit(tinymce.get(this.elementID).getContent());
    }

    set mceContent(content) {
        this.htmlContent = content;
    }
}