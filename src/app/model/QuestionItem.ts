
export class QuestionItem {

  question: Array<string>;
  career: string;
  statesTmp: Array<boolean>;


  constructor(question: Array<string>, career: string, statesTmp: Array<boolean>) {
    this.question = question;
    this.career = career;
    this.statesTmp = statesTmp;
  }
}
