import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorsPageService } from 'src/app/servises/modules/visitors-page/visitors-page.service';

@Component({
  selector: 'new-visitor-form',
  templateUrl: './new-visitor-form.component.html',
  styleUrls: ['./new-visitor-form.component.scss'],
})
export class NewVisitorFormComponent {
  @HostListener('click', ['$event'])
  onClick(event: PointerEvent): void {
    if (event.target instanceof Element) {
      if (event.target.className === 'container-form__close') {
        this.visitorsService.closeFormNewVisitor();
      }

      if (event.target.className === 'container-form__save') {
        if (this.validate) {
          this.visitorsService.addVisitor({
            visitorId: this.visitorsService.idNewVisitor,
            visitorFullName: this.newVisitorForm.controls['visitorName'].value,
            visitorPhone: this.newVisitorForm.controls['visitorPhone'].value,
          });

          this.visitorsService.closeFormNewVisitor();
        }
      }
    }
  }

  public newVisitorForm: FormGroup;

  constructor(private visitorsService: VisitorsPageService) {
    this.newVisitorForm = new FormGroup({
      visitorName: new FormControl(''),
      visitorPhone: new FormControl(''),
    });
  }

  get validateNumber(): boolean {
    const phone: string = this.newVisitorForm.controls['visitorPhone'].value;
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
      this.newVisitorForm.controls['visitorName'].value
    ) {
      return true;
    }
    return false;
  }
}
