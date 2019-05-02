import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-resume',
  templateUrl: './static-resume.component.html',
  styleUrls: ['./static-resume.component.css']
})
export class StaticResumeComponent implements OnInit {
  public pdfSrc:string='/assets/resume.pdf';
  public transferText:string="Download Resume";
  constructor() { }

  ngOnInit() {
  }
  onLanguageChange(value:any) : void{
    if(value=="slo"){
      this.pdfSrc="/assets/resume-sl.pdf";
      this.transferText="Prenesi življenjepis"
    }else{
      this.pdfSrc="/assets/resume.pdf";
      this.transferText="Download Resume"
    }
  }
  transferFile():void{
    window.open(this.pdfSrc);
  }
}
