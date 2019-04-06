import { NgModule } from '@angular/core';

import {
  MatSlideToggleModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatSliderModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  exports: [
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  providers: [
  ],
})
export class AngularMaterialModule { }
