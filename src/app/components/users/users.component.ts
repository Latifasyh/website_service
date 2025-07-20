import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  // ajoute d'autres propriétés si besoin
}


@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit{

   users: User[] = [];
  constructor(private usersService: UserserviceService) { }

   ngOnInit(): void {
    this.getUsersNow();

  }

  getUsersNow() {
     this.usersService.getUsers().subscribe(res => {
      this.users = res;              
      console.log(this.users);
    });
  }


}
