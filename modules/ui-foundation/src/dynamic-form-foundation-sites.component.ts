import {Component, Input, ContentChild, TemplateRef} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup} from "@angular/forms";
import {DynamicFormControlComponent, DynamicFormControlModel} from "@ng2-dynamic-forms/core";

export const DYNAMIC_FORM_UI_FOUNDATION_SITES = "FOUNDATION_SITES";

@Component({

    directives: [REACTIVE_FORM_DIRECTIVES],
    moduleId: module.id,
    selector: "dynamic-form-foundation-sites-control",
    templateUrl: "./dynamic-form-foundation-sites.component.html"
})

export class DynamicFormFoundationSitesComponent extends DynamicFormControlComponent {

    @Input() controlGroup: FormGroup;
    @Input() model: DynamicFormControlModel<any>;

    @ContentChild(TemplateRef) contentTemplate;

    type: string = DYNAMIC_FORM_UI_FOUNDATION_SITES;

    constructor() {
        super();
    }
}
