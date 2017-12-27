import { Component, OnInit  } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  model: any = { jsdate: new Date() };
  placa: any;
  hora: any;
  constructor() { }

  ngOnInit() {
    var time = new Date();
    var horaactual = {
        h: time.getHours(),
        m: time.getMinutes()
    }
    if(horaactual.m < 10) {
      this.hora = horaactual.h +":0"+ horaactual.m ;
    }
    else {
      this.hora = horaactual.h +":"+ horaactual.m ;
    }
    console.log(this.hora);
  }


  picoplaca(model, placa, hora) {
      document.getElementById("mensaje").innerText = "";
      if( placa != undefined){
          var splitPlaca = placa.split("");
          var num = splitPlaca.length;
          var numPlaca  = splitPlaca[num-1];

          var fecha = model.jsdate;
          var splitFecha = fecha.toDateString().split(" ");
          var dia = splitFecha[0];

          var splitHora = hora.split(":");
          var horas = splitHora[0];
          var minutos = splitHora[1];

          switch (dia) {
            case "Mon":{
              if (numPlaca == 1 || numPlaca == 2){
                this.horarios(horas, minutos);
              }
              else {
                document.getElementById("mensaje").innerText = "Your car can be in the streets";
              }
              break;
            }
            case "Tue":{
              if (numPlaca == 3 || numPlaca == 4){
                this.horarios(horas, minutos);
              }
              else {
                document.getElementById("mensaje").innerText = "Your car can be in the streets";
              }
              break;
            }
            case "Wed":{
              if (numPlaca == 5 || numPlaca == 6){
                this.horarios(horas, minutos);
              }
              else {
                document.getElementById("mensaje").innerText = "Your car can be in the streets";
              }
              break;
            }
            case "Thu":{
              if (numPlaca == 7 || numPlaca == 8){
                this.horarios(horas, minutos);
              }
              else {
                document.getElementById("mensaje").innerText = "Your car can be in the streets";
              }
              break;
            }
            case "Fri":{
              if (numPlaca == 9 || numPlaca == 0){
                this.horarios(horas, minutos);
              }
              else {
                document.getElementById("mensaje").innerText = "Your car can be in the streets";
              }
              break;
            }
            default : {
              console.log("este día no existe pico y placa");
              document.getElementById("mensaje").innerText = "This day there is no restriction, your car can be in the streets";
            }
          }
      }else {
        document.getElementById("mensaje").innerText = "Fill all the fields";
      }
  }

  horarios (horas, minutos){
      if (horas >= "07" && horas <= "09" || horas >= "16" && horas <= "19") {
          if ((horas == "09" || horas == "19") && minutos <= "30") {
              console.log("Your car can not be in the streets");
              document.getElementById("mensaje").innerText = "Your car can not be in the streets";
          }
          else {
              if (horas == "07" || horas == "08" || (horas >= "16" && horas < "19")) {
                  if (minutos >= "00") {
                    console.log("Your car can not be in the streets");
                    document.getElementById("mensaje").innerText = "Your car can not be in the streets";
                  }
              } else {
                  console.log("Your car can be in the streets");
                  document.getElementById("mensaje").innerText = "Your car can be in the streets";
              }
          }
      }
      else {
          console.log("Your car can be in the streets");
          document.getElementById("mensaje").innerText = "Your car can be in the streets";

      }
  }
}

