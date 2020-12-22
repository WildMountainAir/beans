// const Path = 'http://localhost:3008'

const listBeans = (callback) => {
  const path = `http://localhost:3008/beans`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

export const listAcceptanceBeans = (callback) => {
  const path =`http://localhost:3008/beans/Acceptance`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

export const listGrowthBeans = (callback) => {
  const path =`http://localhost:3008/beans/Growth`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

export const listConfidenceBeans = (callback) => {
  const path =`http://localhost:3008/beans/Confidence`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

export const listSelfLoveBeans = (callback) => {
  const path =`http://localhost:3008/beans/Self-Love`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};
export default listBeans;
