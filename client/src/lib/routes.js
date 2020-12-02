const Path = 'http://localhost:3008';

export const listBeans = (callback) => {
  const path = `${Path}/beans/`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};
