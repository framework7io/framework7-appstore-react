/* eslint-disable */
const fs = require('fs');
const request = require('request');

function download(uri, filename, callback) {
  request.head(uri, (err, res, body) => {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(`./games-images/${filename}`)).on('close', callback);
  });
}

const apps = require('./games');

const toDownload = {};
apps.forEach((app) => {
  const iconExt = app.icon.slice(-3);
  toDownload[app.icon] = `${app.slug}-icon.${iconExt}`;
  app.screenshots.forEach((screenUrl, index) => {
    const ext = screenUrl.slice(-3);
    toDownload[screenUrl] = `${app.slug}-${index + 1}.${ext}`;
  });
});

Object.keys(toDownload).forEach((url) => {
  const fileName = toDownload[url];
  download(url, fileName, () => {});
});
