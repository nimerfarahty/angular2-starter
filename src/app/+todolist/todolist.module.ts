import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodolistRoutes } from './todolist.routes';
import { CompletedFilterPipe, TodolistComponent } from './index';

@NgModule({
    declarations: [
        CompletedFilterPipe,
        TodolistComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forChild(TodolistRoutes)
    ],
    exports: [
        CompletedFilterPipe,
        TodolistComponent
    ]
})
export default class TodolistModule {
}
