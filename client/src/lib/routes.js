const Path = 'us-cdbr-east-02.cleardb.com'

const listBeans = (callback) => {
  const path = `${Path}/beans`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

export { listBeans as default }
