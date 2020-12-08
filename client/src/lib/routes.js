const Path = 'http://localhost:3008';

const listBeans = (callback) => {
  const path = `${Path}/beans`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

const getSelfLove = (categorySL = 'Self Love', callback) => {
  console.log('love');
  const path = `${Path}/beans/?category=${categorySL}`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
}

export { listBeans as default, getSelfLove }
