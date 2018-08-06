export const normalizeResponseErrors = res => !res.ok ?
  res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json') ?
    res.json().then(err => Promise.reject(err)) : Promise.reject({
      code: res.status,
      message: res.statusText
    }) : res;