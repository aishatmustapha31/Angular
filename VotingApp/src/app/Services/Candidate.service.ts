import { Injectable } from "@angular/core";


@Injectable({
 providedIn:'root'
})
export class CandidateService{

    init_candidates: { Id:number,Name:string, Score:number}[]=[
        { Id:1,Name:"James Bond", Score:0},
        {Id:2,Name:"King Fred",Score:0},
        {Id:3,Name:"Ben Alex",Score:0},
        {Id:4,Name:"Mary Path",Score:0},
        {Id:5,Name:"Tony King",Score:0}
       ];

       getCandidates(){


        let key= "candidate-key";

        // Get all candidate from local strorage 
        let candidates = localStorage.getItem(key);

         // If localstorage is empty
        if(candidates === null){

            // Populate the local storage with init_candidate list 
            let string_object = JSON.stringify(this.init_candidates);
            localStorage.setItem(key,string_object);
            return this.init_candidates;

        }else{

            let string_object = localStorage.getItem(key);
            let string_object2 = String(string_object);

            let candidate_object = JSON.parse(string_object2);

            return candidate_object;

        }

       }
}