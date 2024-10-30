import {
  Component,
  computed,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Decorator
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  // Signal
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'users/' + this.avatar());
  //select = output<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
