import { Component } from '@angular/core';
import { EmpService } from 'app/services/emp.service';
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
  providers: [EmpService]
})
export class RootComponent {

  }
