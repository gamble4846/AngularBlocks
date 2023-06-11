import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ab-modal',
  templateUrl: './ab-modal.component.html',
  styleUrls: ['./ab-modal.component.css']
})
export class AbModalComponent {
  constructor() {}

  //------------------- INPUTS ---------------------------
  @Input() ModalWidth:string = "95vw";
  @Input() ModalHeight:string = "95vh";
  @Input() ModalBorderRadius:string = "5px";
  @Input() HeaderHeight:number = 10;
  @Input() FooterHeight:number = 10;
  @Input() ShowModal:boolean = false;
  @Input() ModalBackgroundColor:string = "transparent";
  @Input() ShowHeader:boolean = true;
  @Input() ShowFooter:boolean = true;
  @Input() TransitionTime:number = 0.2;
  @Input() ModalZIndex:number = 20;
  @Input() HeaderBackgroundColor:string = "transparent";
  @Input() ContentBackgroundColor:string = "transparent";
  @Input() FooterBackgroundColor:string = "transparent";
  //-----------------------------------------------------

  //------------------- GLOBALS ---------------------------
  ContentHeight:number = 0;
  MainWidth:string = "0px";
  MainHeight:string = "0px";
  ModalBackTransition:string = "";
  ModalTransition:string = "";
  //-------------------------------------------------------

  //------------------- OUTPUTS ---------------------------
  @Output() OnModalClosed = new EventEmitter<any>();
  //-------------------------------------------------------

  ngOnInit(): void {
    this.setContentHeight();
    this.setTransitions();
  }

  ngOnChanges() {
    this.showHideModal();
  }

  setTransitions(){
    this.ModalBackTransition = "opacity " + this.TransitionTime + "s ease-in-out";
    this.ModalTransition = this.TransitionTime + "s ease-in-out";
  }

  showHideModal(){
    if(this.ShowModal){
      this.MainWidth = this.ModalWidth;
      this.MainHeight = this.ModalHeight
    }
    else{
      this.MainWidth = "0px";
      this.MainHeight = "0px";
    }
  }

  setContentHeight(){
    if(this.ShowHeader && this.ShowFooter){
      this.ContentHeight = 100 - (this.HeaderHeight + this.FooterHeight);
    }
    else if(this.ShowHeader && !this.ShowFooter){
      this.ContentHeight = 100 - this.HeaderHeight;
    }
    else if(!this.ShowHeader && this.ShowFooter){
      this.ContentHeight = 100 - this.FooterHeight;
    }
  }

  closeModalFUN(closedFrom:string){
    let closeModal = {
      "closedFromClickingOutside": false,
      "closedFromXButton": false,
      "closedFromCode": false
    }

    switch(closedFrom){
      case "closedFromClickingOutside":
        closeModal.closedFromClickingOutside = true;
        break;
      case "closedFromXButton":
        closeModal.closedFromXButton = true;
        break;
      case "closedFromCode":
        closeModal.closedFromCode = true;
        break;
    }

    this.ShowModal = false;
    this.showHideModal();
    this.OnModalClosed.emit(closeModal);
  }
}
