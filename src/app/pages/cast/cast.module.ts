import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CastComponent } from './cast/cast.component';

const routes: Routes = [{ path: '', component: CastComponent }];

@NgModule({
  declarations: [CastComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CastModule {}
