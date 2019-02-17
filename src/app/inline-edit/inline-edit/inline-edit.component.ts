import { Component, OnInit, Input, EventEmitter,
  HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export const InlineTypes = { 
  EDIT_TEXT: "text",
  EDIT_AREA: "textarea",
  EDIT_NUMBER: "number",
  EDIT_DATE: "date",
  EDIT_TIME: "time",
  EDIT_SELECT: "select"
};

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
  outputs: ['onSave:onSave']
})
export class InlineEditComponent implements OnInit {
  onSave = new EventEmitter;
  private InlineTypes = InlineTypes;
  private editMode: boolean = false;
  @Input() type  = InlineTypes.EDIT_TEXT; 
  @Input() label: string;
  @Input() inlineLabel: boolean = false;
  @Input() options = [];
  @Input() pattern;
  @Input() min: any;
  @Input() max: any;
  @Input() value = '';
  @Input() placeholder = '';
  @Input() invalid = '';
  @Input() required: boolean = false;
  @Input() permission:boolean = true;

  form:FormGroup = this._fb.group({
  	field: [this.value, []] 
  });
  get field() { return this.form.get('field'); }

  constructor(private _fb: FormBuilder, private _elRef: ElementRef) { }

  ngOnInit() {
  	let validators = [];

  	if(this.pattern)
  	  validators.push(Validators.pattern(this.pattern));
  	if(this.required)
  	  validators.push(Validators.required);
	
  	this.form.controls['field'].setValidators(validators)
  	this.form.controls['field'].setValue(this.value);
  	this.form.controls['field'].updateValueAndValidity()
  }

  switchToEditMode() {
  	if(this.permission)
  	 this.editMode = true;
  }

  switchToNormalMode() {
  	this.editMode = false;
  }

  save() {
  	if(this.form.valid) {
  	  let value = this.form.value.field;
  	  this.value = value;
  	  this.switchToNormalMode();
  	  this.onSave.emit(value);
  	}
  }

  cancel() {
  	this.switchToNormalMode();
  }

  @HostListener('document:click', ['$event']) public onClick(event) {
  	// check if click was made outside the element
  	if(!this._elRef.nativeElement.contains(event.target)) {
  	  if(this.editMode)
  	  	this.switchToNormalMode();
  	}
  	else if(!this.editMode)
  	  this.switchToEditMode();
  }

}
