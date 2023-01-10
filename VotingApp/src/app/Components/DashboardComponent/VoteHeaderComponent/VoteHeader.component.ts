import { Component } from "@angular/core";
import { CandidateService } from "src/app/Services/Candidate.service";


@Component({
    selector: 'app-vote-header',
  templateUrl: './VoteHeader.component.html',
  styleUrls: ['./VoteHeader.component.css']
})
export class VoteHeaderComponent{

   candidates: { Id:number,Name:string, Score:number}[];
    key= "candidate-key";

  constructor( private candidateService: CandidateService){
     this.candidates = candidateService.getCandidates();
  }

  vote(id:number){

    this.candidates.forEach(c=>{
      if(c.Id === id){
        let oldScore = c.Score;
        let   newScore  = oldScore + 1; 
        c.Score = newScore;

          let string_object = JSON.stringify(this.candidates);
          localStorage.setItem(this.key,string_object);
          return;
      }
    });

  }



}





