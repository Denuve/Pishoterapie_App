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
  MatMenuModule,
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
    MatMenuModule,
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
    MatMenuModule,
    MatProgressBarModule
  ],
  providers: [
  ],
})
export class AngularMaterialModule { }
