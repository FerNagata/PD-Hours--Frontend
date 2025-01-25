import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadDataComponent } from './squad-data.component';

describe('SquadDataComponent', () => {
  let component: SquadDataComponent;
  let fixture: ComponentFixture<SquadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquadDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
