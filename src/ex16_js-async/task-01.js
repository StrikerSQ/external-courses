/* eslint-disable no-unused-vars */
function fetchData(url, method, data) {
  return (
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      xhr.onload = function () {
        return resolve(new Response(xhr.response));
      };

      xhr.onerror = function () {
        return reject(new Error('Server error occured: response failed'));
      };

      xhr.send(data);
    })
  );
}
