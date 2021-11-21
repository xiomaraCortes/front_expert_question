import {Component, Input, OnInit} from '@angular/core';
import {QuestionItem} from './model/QuestionItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  model = new Array<QuestionItem>();
  form: string;
  selectItem: boolean;
  indexQuestion = 0;
  indexCareer = 0;
  career = '';
  constructor() {
    this.model.push(new QuestionItem(

      new Array<string>(
        '¿Consideras que las energías renovables son el futuro\'',
      '¿Te interesa todo lo relacionado con la alimentación?\n',
      'Trabajar controlando la calidad de los alimentos...\n',
        ), 'INGENIERIA DE ALIMENTOS\n', new Array<boolean>() ));
    this.model.push(new QuestionItem(
      new Array<string>(
        '¿Consideras que las energías renovables son el futuro',
        '¿Has obtenido buenas calificaciones en química?\n\n',
        '¿Disfrutas de hacer experimentos con distintas substancias?\n',
      ), 'INGENIERIA QUIMICA\n', new Array<boolean>() ));
    this.model.push(new QuestionItem(
      new Array<string>(
        '¿Sientes que estás capacitado para contribuir a un mejor rendimiento de una empresa?',
        '¿Tienes la habilidad de adaptarte a distintos lenguajes de programación?\n',
        '¿Tienes liderazgo al trabajar en grupo?\n',
        '¿Te gustaría colaborar implantando y evaluando sistemas integrados?\n',
      ), 'INGENIERIA ELECTRICA\n', new Array<boolean>() ));
    this.form = this.model[this.indexCareer].question[this.indexQuestion];
  }

  ngOnInit(): void {
  }

  continuesQuestion(): void {

    if (this.indexQuestion + 1 < this.model.length &&  this.indexQuestion + 1  < this.model[this.indexCareer].question.length) {
      this.form = this.model[this.indexCareer].question[this.indexQuestion];
      this.indexQuestion++;
      const state = this.model[this.indexCareer].statesTmp;
      state.push(this.selectItem);
      this.model[this.indexCareer].statesTmp = state;
      return;
    }

    if (this.indexCareer + 1 <  this.model.length) {
      this.indexQuestion = 0;
      this.indexCareer++;
      this.form = this.model[this.indexCareer].question[this.indexQuestion];
      return;
    }

    this.getCareer();


  }

  getCareer(): void {

    let index = -1;
    let count = 0;

    console.log('model' +  JSON.stringify(this.model));
    this.model.forEach((value, indice) => {
      const tmp = this.model[indice].statesTmp.filter(x => x === true).length;
      if (tmp > count) {
        index = indice;
        count = tmp;
      }
    });
    console.log('index' + index);
    console.log('count' + count);

    if (index === -1) {
      this.career =  'No tuvimos las suficiente informacion para pronosticar tu carrera ';
    } else {
      this.career = 'Le recomendamos estudiar ' +  this.model[index].career;
    }
  }

  enabledOrNot(state: boolean): void {
    this.selectItem = state;
  }
}
