const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (hasil) => {
  return new Promise((resolve,reject) => {
    let data = 0;
    promiseTheaterIXX()
      .then((reaksi) => {
        reaksi.forEach((item) => {
          
          if (item.hasil === null) {
            reject("janji tinggal janji")
          }
          if (item.hasil === hasil) {
            data += 1;
          }
        });
      })
      .then(
        promiseTheaterVGC()
        .then((reaksi) => {
          reaksi.forEach((item) => {
            
            if (item.hasil === null) {
              reject("janji tinggal janji")
            }
            if (item.hasil === hasil) {
              data += 1;
            }
          });
          resolve(data);
        })
      );
  });
};

module.exports = {
  promiseOutput,
};
