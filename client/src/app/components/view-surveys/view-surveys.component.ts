import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/models/survey';
import { TakeSurveyComponent } from '../take-survey/take-survey.component';


@Component({
  selector: 'app-view-surveys',
  templateUrl: './view-surveys.component.html',
  styleUrls: ['./view-surveys.component.css']
})
export class ViewSurveysComponent implements OnInit {

  surveys: Array<Survey> = []
  surveyName: string;


  constructor(private surveyService: SurveyService, private router: Router, private route: ActivatedRoute) { }





  ngOnInit(): void {
    this.surveyService.fetchAllSurveys()
      .subscribe((res: Array<Survey>) => {
        console.log(res);
        this.surveys = res;
        console.log(this.surveys);

      })

  }

  takeSurvey(id: any, text: string) {
    console.log("id :", id);
    this.router.navigate(["takeSurvey", { id, text }]);
  }



}










