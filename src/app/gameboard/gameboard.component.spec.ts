/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { GameboardComponent } from './gameboard.component';

describe('Component: Gameboard', () => {
  it('should create an instance', () => {
    let component = new GameboardComponent();
    expect(component).toBeTruthy();
  });
});
