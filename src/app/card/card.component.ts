import {Component, Input} from '@angular/core';
import {MagicalMoments} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  magicalMoment: MagicalMoments | undefined;
}
