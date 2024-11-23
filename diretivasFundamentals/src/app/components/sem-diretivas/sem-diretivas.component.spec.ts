import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemDiretivasComponent } from './sem-diretivas.component';

describe('SemDiretivasComponent', () => {
  let component: SemDiretivasComponent;
  let fixture: ComponentFixture<SemDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemDiretivasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
