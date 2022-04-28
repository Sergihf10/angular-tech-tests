import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ResetPasswordPage } from "./reset-password.page";
import { ResetPasswordPageRoutingModule } from "./resset-password-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ResetPasswordPageRoutingModule],
  declarations: [ResetPasswordPage],
})
export class ResetPasswordModule {}
