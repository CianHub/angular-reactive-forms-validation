import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectForm = new FormGroup({
    projectName: new FormControl(
      '',
      [Validators.required],
      this.forbiddenNames
    ),
    email: new FormControl('', [Validators.required, Validators.email]),
    projectStatus: new FormControl('')
  });

  constructor() {}

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { forbiddenName: true };
    }
  }
  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ forbiddenName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
