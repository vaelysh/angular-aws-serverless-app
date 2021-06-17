import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatComponent} from "./chat/chat.component";
import {ReactiveFormsModule} from "@angular/forms";
import {
  NbAutocompleteModule,
  NbCardModule,
  NbChatModule,
  NbInputModule, NbLayoutModule,
  NbListModule,
  NbUserModule
} from "@nebular/theme";
import { ContactListComponent } from './contact-list/contact-list.component';


@NgModule({
  declarations: [ChatComponent, ContactListComponent],
  exports: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbChatModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbInputModule,
    NbAutocompleteModule,
    NbLayoutModule
  ]
})
export class MessagingModule {
}
