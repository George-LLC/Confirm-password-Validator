import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

/** The password and the confirm password must match */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('user_pass');
  const confirmPassword = control.get('check_pass');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({'incorrect': true});
    return { identityRevealed: true };
  }
  confirmPassword.setErrors(null);
  return null
}

/**  add this "{validators: confirmPasswordValidator}" in the end of the Form Group after controls as in the following example:
     "new Form Group ( {controls...}, {validators: confirmPasswordValidator} )"
 */
