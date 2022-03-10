import { RoleServiceService } from './../../services/role-service.service';
import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/model/User';
import { Role } from 'src/app/model/Role';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userDialog: boolean = false;
  public users: User[] = [];
  public user: User = {"id": 0,"addedDate": new Date(),"firstname": "","lastname": "","sid": "","password": "",
                          "role": {"id": 0,"role": ""},
                        "status": "",
                          "permision": {"admin": false,"talent": false,"report": false}
                        };
  public selectedUsers: User[] = [];
  public submitted: boolean = false;
  public statuses: any[] = [];
  public roles: Role[] = [];


  constructor(
    private userService: UserServiceService,
    private roleService: RoleServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();

    this.statuses = [
      {label: 'ACTIVE', value: 'Active'},
      {label: 'DE_ACTIVE', value: 'De-Active'},
      {label: 'SUSPENDED', value: 'Suspended'}
    ];

    this.roleService.getAllRoles().subscribe(
      data => {
        this.roles = data;
      }
    )

  }

  openNew() {
    this.user = {"id": 0,"addedDate": new Date(),"firstname": "","lastname": "","sid": "","password": "",
                      "role": {"id": 0,"role": ""},
                  "status": "",
                      "permision": {"admin": false,"talent": false,"report": false}
                };
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedUsers(){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.users = this.users.filter(val => !this.selectedUsers.includes(val));
          if(this.selectedUsers.length > 0){
            for(let i = 0; i < this.selectedUsers.length; i++){
              this.userService.deleteUser(this.selectedUsers[i].id).subscribe(
                data => {
                  console.log('Selected Users have been deleted')
                },
                err => {
                  console.log('Http Error ' + err.error.message)
                }
              );
            }
            this.selectedUsers = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Users Deleted', life: 3000});
          }
      }
    });
  }

  saveUser(){
    this.submitted = true;
    if (this.user.sid.trim()) {
      if (this.user.id) {
        this.userService.updateUser(this.user).subscribe(
          data => {
            //this.users[this.findIndexById(this.user.id)] = this.user;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
            this.getAllUsers();
          },
          err => {
            console.log('Http Error ' + err.error.message)
          }
        );

      }
      else {
        this.userService.addUser(this.user).subscribe(
          data => {
            //this.users.push(this.user);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Created', life: 3000});
            this.getAllUsers();
          },
          err => {
            console.log('Http Error ' + err.error.message)
          }
        );
      }

      this.users = [...this.users];
      this.userDialog = false;
      this.user = {"id": 0,"addedDate": new Date(),"firstname": "","lastname": "","sid": "","password": "",
                        "role": {"id": 0,"role": ""},
                    "status": "",
                        "permision":{"admin": false,"talent": false,"report": false}
                  };
    }
  }


  hideDialog(){
    this.userDialog = false;
    this.submitted = false;
  }

  userEdit(user: User){
    this.user = {...user};
    this.userDialog = true;
  }

  deleteUser(user: User){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.firstname + " " + user.lastname + "(" + user.sid + ")" + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.userService.deleteUser(user.id).subscribe(
            data => {
              this.users = this.users.filter(val => val.id !== user.id);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
            },
            err => {
              console.log('Http Error ' + err.error.message)
            }
          );
          this.user = {"id": 0,"addedDate": new Date(),"firstname": "","lastname": "","sid": "","password": "",
                            "role": {"id": 0,"role": ""},
                        "status": "",
                            "permision": {"admin": false,"talent": false,"report": false}
                      };
      }
    });
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
  }

  createId(): number {
    let id = this.users.length + 1;
    return id;
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = [];
        this.users = data;
      },
      err => {
        console.log('Http Error ' + err.error.message)
      }
    );
  }

}
