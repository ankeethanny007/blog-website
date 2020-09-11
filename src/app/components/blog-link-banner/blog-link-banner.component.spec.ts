import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLinkBannerComponent } from './blog-link-banner.component';

describe('BlogLinkBannerComponent', () => {
  let component: BlogLinkBannerComponent;
  let fixture: ComponentFixture<BlogLinkBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLinkBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLinkBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
