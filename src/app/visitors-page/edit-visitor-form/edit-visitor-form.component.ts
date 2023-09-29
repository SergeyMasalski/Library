import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorsPageService } from 'src/app/servises/modules/visitors-page/visitors-page.service';

@Component({
  selector: 'edit-visitor-form',
  templateUrl: './edit-visitor-form.component.html',
  styleUrls: ['./edit-visitor-form.component.scss'],
})
export class EditVisitorFormComponent {
  public editVisitorsForm: FormGroup;

  constructor(private visitorService: VisitorsPageService) {
    this.editVisitorsForm = new FormGroup({
      visitorName: new FormControl(
        this.visitorService.editVisitorInForm.visitorFullName
      ),
      visitorPhone: new FormControl(
        this.visitorService.editVisitorInForm.visitorPhone
      ),
    });
  }

  get validateNumber(): boolean {
    const phone: string = this.editVisitorsForm.controls['visitorPhone'].value;
    if (phone) {
      const lenghtFilterArray = phone
        .split('')
        .filter((item) => !Number.isNaN(+item)).length;
      if (lenghtFilterArray) {
        return lenghtFilterArray === phone.length;
      }
    }
    return false;
  }

  get validate(): boolean {
    if (
      this.validateNumber &&
      this.editVisitorsForm.controls['visitorName'].value
    ) {
      return true;
    }
    return false;
  }

  public closeForm(): void {
    this.visitorService.closeFormEditVisitor();
  }

  public saveVisitor(): void {
    if (this.validate) {
      this.visitorService.editVisitor(`${this.visitorService.editVisitorId}`, {
        visitorId: this.visitorService.editVisitorId,
        visitorFullName: this.editVisitorsForm.controls['visitorName'].value,
        visitorPhone: this.editVisitorsForm.controls['visitorPhone'].value,
      });
      console.log(this.validate);

      this.visitorService.closeFormEditVisitor();
    }
  }
}
