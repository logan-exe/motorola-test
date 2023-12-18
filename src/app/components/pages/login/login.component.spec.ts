import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ButtonOutlineComponent } from '../../resuables/button-outline/button-outline.component';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent, ButtonOutlineComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind input fields to component properties', () => {
    const compiled = fixture.debugElement.nativeElement;
    const usernameInput = compiled.querySelector('input[name=username]');
    const passwordInput = compiled.querySelector('input[name=password]');

    usernameInput.value = 'sample';
    passwordInput.value = 'sample123';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.username).toBe('sample');
    expect(component.password).toBe('sample123');
  });

  it('should store userToken and navigate to home on login', () => {
    // Mock input for username and password
    component.username = 'testuser';
    component.password = 'testpass';

    // Simulate clicking the login button
    const loginButton = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    loginButton.click();

    // Check if the userToken is stored in local storage
    expect(localStorage.getItem('userToken')).toBe('your-token-value');

    // Check if navigation to home page was triggered
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
});
