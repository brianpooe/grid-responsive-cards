import {Component, OnInit} from '@angular/core';

export interface MagicalMoments {
  author: string;
  background_image: string;
  publish_date: string;
  backstory: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  magicalMoments : MagicalMoments[] = [
    {
      author:"Ben Mathekga",
      background_image:"https://via.placeholder.com/150",
      publish_date:"2021-06-29T07:54:36Z",
      backstory:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      author:"Anathi Maka-Mlibo Mase",
      background_image:"https://via.placeholder.com/150",
      publish_date:"2021-06-29T07:54:36Z",
      backstory:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      author:"Phumeza Ntantiso",
      background_image:"https://via.placeholder.com/150",
      publish_date:"2021-06-29T07:54:36Z",
      backstory:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  ngOnInit() {
  }
}
