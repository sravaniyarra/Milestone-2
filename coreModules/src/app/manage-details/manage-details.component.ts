import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, NgForm, FormControl } from '@angular/forms';
import { AddnewService } from '../shared/addnew.service';
import { DetailsModel } from './details-dashbord.model';
@Component({
  selector: 'app-manage-details',
  templateUrl: './manage-details.component.html',
  styleUrls: ['./manage-details.component.css']
})
export class ManageDetailsComponent implements OnInit {
   isedit=false;
  formdata = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    email: new FormControl(''),
    age : new FormControl(''),
    dateOfBirth : new FormControl(''),
    place: new FormControl(''),
    mobilenumber : new FormControl(''),
    gender : new FormControl('')
 });
 indexselectedtoEdit;
   listOfData = []
  constructor(public formservice:AddnewService) { }


  ngOnInit(): void { this.loadData() }
  loadData(){
    this.formservice.getData().subscribe(res=>{
       Object.values(res).forEach(datafromdb=>{
        this.listOfData.push(datafromdb)
       })  
    })
  }
  onCancel(){ 
      this.formdata.reset()
    }
  onSubmit(){
      this.listOfData.push(this.formdata.value)
      this.formservice.postData(this.formdata.value).subscribe(res=>{
        console.log('post response',res)
        this.formdata.reset()
      })
    }
  onEdit(index){
    this.isedit = true
    this.formdata.patchValue(this.listOfData[index])
    this.indexselectedtoEdit=index

    }
  onDelete(data,index)
  {
  this.formservice.deleteData(data._id).subscribe(res=>{
    console.log('delete',res)
  })
   this.listOfData.splice(index)
}

onUpdate(){
   this.formservice.modifyData(this.formdata.value,this.listOfData[this.indexselectedtoEdit]['_id']).subscribe(res=>{
    console.log('modify res',res)
    this.formdata.value['_id'] = res ['_id']
    this.listOfData.push(this.formdata.value)
    this.listOfData.splice(this.indexselectedtoEdit,1)
    this.isedit = false;
    this.formdata.reset();
   })
 
}
 


}
 
     
    
  