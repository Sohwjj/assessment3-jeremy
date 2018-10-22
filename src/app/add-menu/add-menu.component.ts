import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { StallService } from '../stall.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  foodGroup: FormArray;
  createStallGroup: FormGroup;

  constructor(private fb: FormBuilder, private stallSvc: StallService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.foodGroup = this.fb.array([]);
    this.createStallGroup = this.fb.group({
      stallName: this.fb.control('', Validators.required),
      stallLocation: this.fb.control('', Validators.required),
      stallDescription: this.fb.control(''),
      foods: this.foodGroup
    });
  }

  addFood() {
    const fl = this.fb.group({
      foodname: this.fb.control('', Validators.required),
      calories: this.fb.control('', Validators.required),
      foodtype: this.fb.control('', Validators.required),
      fooddescription: this.fb.control('')
    })
    this.foodGroup.push(fl);
  }

  deleteFood(i: number){
    this.foodGroup.removeAt(i);
  }

  processStall() {
    console.log(this.createStallGroup.value);
    this.stallSvc.createStall(this.createStallGroup.value)
      .then(() => this.initForm())
      .catch(err => console.error('Error: ', err));
  }
}