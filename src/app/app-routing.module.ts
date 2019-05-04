import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {QuizComponent} from "./quiz/quiz.component";
import {ModeratorComponent} from "./moderator/moderator.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'moderator', component: ModeratorComponent},
  {path: 'chat', component: ChatComponent},
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
