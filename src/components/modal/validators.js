export const required = value => (value ? undefined: 'Required!');

export const passwordLength = value => {
  if(value){
    return value.length >= 6 ? undefined : '6 character minimum';
  }
}
