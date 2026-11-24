import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent
      ],
      imports: [CommonModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render one card per magical moment', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const authors = fixture.nativeElement.querySelectorAll('.card-item-author');
    expect(Array.from(authors, (author: Element) => author.textContent)).toEqual(
      fixture.componentInstance.magicalMoments.map(moment => moment.author)
    );
  });
});
