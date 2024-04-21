import { Component, OnInit } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgFor, ItemComponent]
})
export class AppComponent {
  coursename = "My To Do Tracker"; 

  getItemCount():number{
    return this.itemList.length;
  }

  itemList = [
    {
      _id: 1,
      title:'Homework 5',
      description:'RESTful APIs',
      priority:'High',
      duedate:'2024-04-08',
      status:'Finished',
      done: true
    },
    {
      _id: 2,
      title:'File Taxes',
      description:'State and Federal Taxes for FY2023',
      priority:'Highest',
      duedate:'2024-04-15',
      status:'Active',
      done: false
    },
    {
      _id: 3,
      title:'Homework 6',
      description:'Angular',
      priority:'Medium',
      duedate:'2024-04-26',
      status:'Active',
      done: false
    },
    {
      _id: 4,
      title:'Homework 7',
      description:'Angular data connect',
      priority:'Medium',
      duedate:'2024-05-09',
      status:'Not Started',
      done: false
    }
  ];

}
