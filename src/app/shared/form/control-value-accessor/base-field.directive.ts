import { OnInit, Directive, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { filter, map, pairwise, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive()
export class BaseFieldDirective implements OnDestroy, OnInit, ControlValueAccessor {
  public destroy$ = new Subject();
  public valueControl: FormControl = new FormControl('');

  propagateChange = (_: unknown) => {
    // This is intentional. Required for default initialization
  };
  propagateBlur = (_: unknown) => {
    // This is intentional. Required for default initialization
  };

  ngOnInit() {
    this.valueControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        pairwise(),
        filter(([oldValue, newValue]) => oldValue !== newValue),
        map(([_, newValue]) => newValue),
      )
      .subscribe(newValue => this.propagateChange(newValue));
  }

  writeValue(value: unknown): void {
    if (!value) {
      this.valueControl.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateBlur = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.valueControl.disable() : this.valueControl.enable();
  }

  onBlurEvent() {
    this.propagateBlur(this.valueControl.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
