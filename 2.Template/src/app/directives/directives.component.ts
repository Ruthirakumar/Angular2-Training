import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
flightList = [{name : "Air India", status : "Arrived",
 classType:"Business"},
{name : "Jet Airways", status : "Departured"},
{name : "Indigo", classType:"Economic"}]

}
