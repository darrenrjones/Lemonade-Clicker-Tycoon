export const required = value => (value ? undefined: 'Required!');

export const passwordLength = value => {
  if(value){
    return value.length >= 6 ? undefined : 'Password must be 6 or more characters';
  }
}
