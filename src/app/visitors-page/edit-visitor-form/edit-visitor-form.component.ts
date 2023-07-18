import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorsPageService } from 'src/app/servises/modules/visitors-page/visitors-page.service';

@Component({
  selector: 'edit-visitor-form',
  templateUrl: './edit-visitor-form.component.html',
  styleUrls: ['./edit-visitor-form.component.scss'],
})
export class EditVisitorFormComponent {
  @HostListener('click', ['$event'])
  onClick(event: PointerEvent): void {
    if (event.target instanceof Element) {
      if (event.target.className === 'container-form__close') {
        this.visitorService.closeFormEditVisitor();
      }

      if (event.target.className === 'container-form__save') {
        if (this.validate) {
          this.visitorService.editVisitor(
            `${this.visitorService.editVisitorId}`,
            {
              visitorId: this.visitorService.editVisitorId,
              visitorFullName:
                this.editVisitorsForm.controls['visitorName'].value,
              visitorPhone:
                this.editVisitorsForm.controls['visitorPhone'].value,
            }
          );
          this.visitorService.closeFormEditVisitor();
        }
      }
    }
  }

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
}
