export const loadAuthToken = () => localStorage.getItem('authToken');

export const saveAuthToken = authToken => {
  try { localStorage.setItem('authToken', authToken); } catch(e) { return undefined; }
};

export const clearAuthToken = () => {
  try { localStorage.removeItem('authToken'); } catch(e) { return undefined; }
};