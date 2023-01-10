import { Component,Input, Output,EventEmitter } from "@angular/core";
import { CandidateService } from "src/app/Services/Candidate.service";

@Component({
    selector: 'app-vote-body',
  templateUrl: './VoteBody.component.html',
  styleUrls: ['./VoteBody.component.css']
})
export class VoteBodyComponent{


  @Output('voteMethod') onVoteEmitter: EventEmitter<number> = new EventEmitter<number>();


  constructor( private candidateService: CandidateService){
   
  }


  onVote(id:number){
      this.onVoteEmitter.emit(id);
  }
  
  getAllCandidates(){
    return this.candidateService.getCandidates();
  }

}