import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f',{static:true}) signupForm:NgForm;
  defaultQuestion='teacher';
  answer='';
  genders=['male','female']  ;
  submitted = false;
  user={
    name:'',
    email:''
  }
  onSubmit(){
    console.log(this.signupForm)
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    
    this.signupForm.form.reset();
  }

  suggestUserName(){
    const suggestedName ='vijay';
    console.log("suggested name")
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'viajy@gmail.com',

    //   },
    //   secret:'pet',
    //   questionAnswer:'hello viajy how are you',
    //   gender:'female'
    // });

    this.signupForm.form.patchValue({
         userData:{
        username:suggestedName,
        email:'viajy@gmail.com',

      },
      secret:'pet',
    })
  }
}
