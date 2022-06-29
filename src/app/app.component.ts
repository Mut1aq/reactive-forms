import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Permissions } from './models/permission.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  permission: Permissions[];
  title = 'reactive-forms';
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.permission = [
      {
        id: 1,
        pageDescAr: 'هيكل الأدوار',
        pageDescEn: 'Roles Definition',
        pageFunctions: [
          {
            pageID: 1,
            pageDescAr: 'هيكل الأدوار',
            pageDescEn: 'Roles Definition',
            functionID: 1,
            pageFuncDescAr: 'إضافة دور',
            pageFuncDescEn: 'Add Role',
          },
          {
            createDate: '2022-01-12',
            pageID: 1,
            pageDescAr: 'هيكل الأدوار',
            pageDescEn: 'Roles Definition',
            functionID: 2,
            pageFuncDescAr: 'تعديل دور',
            pageFuncDescEn: 'Update Role',
          },
          {
            createDate: '2022-01-12',
            pageID: 1,
            pageDescAr: 'هيكل الأدوار',
            pageDescEn: 'Roles Definition',
            functionID: 3,
            pageFuncDescAr: 'حذف دور',
            pageFuncDescEn: 'Delete Role',
          },
        ],
      },
      {
        createDate: '2022-01-12',
        id: 2,
        pageDescAr: 'إدارة المستخدمين',
        pageDescEn: 'User management',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 2,
            pageDescAr: 'إدارة المستخدمين',
            pageDescEn: 'User management',
            functionID: 4,
            pageFuncDescAr: 'اضافة مستخدم',
            pageFuncDescEn: 'Add User',
          },
          {
            createDate: '2022-01-12',
            pageID: 2,
            pageDescAr: 'إدارة المستخدمين',
            pageDescEn: 'User management',
            functionID: 5,
            pageFuncDescAr: 'تعديل مستخدم',
            pageFuncDescEn: 'Update User',
          },
          {
            createDate: '2022-01-12',
            pageID: 2,
            pageDescAr: 'إدارة المستخدمين',
            pageDescEn: 'User management',
            functionID: 6,
            pageFuncDescAr: 'حذف مستخدم',
            pageFuncDescEn: 'Delete User',
          },
        ],
      },
      {
        createDate: '2022-01-12',
        id: 3,
        pageDescAr: 'المراكز الإشرافية',
        pageDescEn: 'Regional office',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 3,
            pageDescAr: 'المراكز الإشرافية',
            pageDescEn: 'Regional office',
            functionID: 7,
            pageFuncDescAr: 'إضافة مركز إشرافي',
            pageFuncDescEn: 'Add Regional office',
          },
          {
            createDate: '2022-01-12',
            pageID: 3,
            pageDescAr: 'المراكز الإشرافية',
            pageDescEn: 'Regional office',
            functionID: 8,
            pageFuncDescAr: 'حذف مركز إشرافي',
            pageFuncDescEn: 'Delete Regional office',
          },
        ],
      },
      {
        createDate: '2022-01-12',
        id: 4,
        pageDescAr: 'الإسناد',
        pageDescEn: 'Assign tasks',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 4,
            pageDescAr: 'الإسناد',
            pageDescEn: 'Assign tasks',
            functionID: 9,
            pageFuncDescAr: 'الإسناد',
            pageFuncDescEn: 'Assign tasks',
          },
        ],
      },
      {
        createDate: '2022-01-12',
        id: 5,
        pageDescAr: 'الإنجاز',
        pageDescEn: 'Progress',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 5,
            pageDescAr: 'الإنجاز',
            pageDescEn: 'Progress',
            functionID: 10,
            pageFuncDescAr: 'الإنجاز',
            pageFuncDescEn: 'Progress',
          },
        ],
      },
      {
        createDate: '2022-01-12',
        id: 6,
        pageDescAr: 'مراجعة البيانات',
        pageDescEn: 'Data revision',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 6,
            pageDescAr: 'مراجعة البيانات',
            pageDescEn: 'Data revision',
            functionID: 11,
            pageFuncDescAr: 'مراجعة البيانات',
            pageFuncDescEn: 'Data revision',
          },
        ],
      },
      {
        createDate: '2022-01-12',
        id: 7,
        pageDescAr: 'سجل تناقل البيانات',
        pageDescEn: 'Data sync log',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 7,
            pageDescAr: 'سجل تناقل البيانات',
            pageDescEn: 'Data sync log',
            functionID: 12,
            pageFuncDescAr: 'سجل تناقل البيانات',
            pageFuncDescEn: 'Data sync log',
          },
        ],
      },
      {
        createDate: '2022-01-12',
        id: 8,
        pageDescAr: 'تتبع',
        pageDescEn: 'Tracking',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 8,
            pageDescAr: 'تتبع',
            pageDescEn: 'Tracking',
            functionID: 13,
            pageFuncDescAr: 'تتبع',
            pageFuncDescEn: 'Tracking',
          },
        ],
      },
      {
        id: 9,
        pageDescAr: 'كلمة المرور للباحث',
        pageDescEn: 'Password Config',
        pageFunctions: [
          {
            createDate: '2022-01-12',
            pageID: 9,
            pageDescAr: 'كلمة المرور للباحث',
            pageDescEn: 'Password Config',
            functionID: 14,
            pageFuncDescAr: 'كلمة المرور للباحث',
            pageFuncDescEn: 'Password Config',
          },
        ],
      },
      {
        id: 21,
        pageDescAr: 'فحص اضافة جديدة',
        pageDescEn: 'Add new page',
        pageFunctions: [
          {
            pageID: 21,
            pageDescAr: 'فحص اضافة جديدة',
            pageDescEn: 'Add new page',
            functionID: 21,
            pageFuncDescAr: 'اضافة',
            pageFuncDescEn: 'Add',
          },
          {
            pageID: 21,
            pageDescAr: 'فحص اضافة جديدة',
            pageDescEn: 'Add new page',
            functionID: 22,
            pageFuncDescAr: 'تعديل',
            pageFuncDescEn: 'update',
          },
        ],
      },
    ];
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      permissions: new FormControl([]),
      options: new FormControl(),
    });
    // for (let i = 0; i < this.permission.length; i++) {
    //   console.log(i, this.reactiveForm.get('permissions'));
    //   const control = new FormControl();
    //   (<FormArray>this.reactiveForm.get('permissions')).push(control);
    // }
  }
  // onAddHobby() {}
  // getControls() {
  //   return (<FormArray>this.signupForm.get('hobbies')).controls;
  // }
  onSubmit() {
    console.log(this.reactiveForm);
  }
}
