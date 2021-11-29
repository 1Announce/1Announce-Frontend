
const convertBase64 = async (file) => {
  // add check for file type
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (() => {
      resolve(fileReader.result);
    });

    fileReader.onerror = ((error) => {
      reject(error);
    })
  })
}

module.exports = {convertBase64}
