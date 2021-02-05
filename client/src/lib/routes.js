
const listBeans = (callback) => {
  const path = `http://localhost:3008/beans`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

const listAcceptanceBeans = (callback) => {
  const path =`http://localhost:3008/beans/Acceptance`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { console.log('trying'); callback(null, data); })
    .catch((error) => { callback(error, null); });
};

const listGrowthBeans = (callback) => {
  const path =`http://localhost:3008/beans/Growth`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

const listConfidenceBeans = (callback) => {
  const path =`http://localhost:3008/beans/Confidence`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

const listSelfLoveBeans = (callback) => {
  const path =`http://localhost:3008/beans/Self-Love`;
  fetch(path)
    .then((result) => result.json())
    .then((data) => { callback(null, data); })
    .catch((error) => { callback(error, null); });
};

const theLists = {
  listBeans : listBeans,
  listAcceptanceBeans : listAcceptanceBeans,
  listGrowthBeans : listGrowthBeans,
  listConfidenceBeans : listConfidenceBeans,
  listSelfLoveBeans : listSelfLoveBeans,
};

export default theLists;