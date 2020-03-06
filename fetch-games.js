const path = require('path');
const fs = require('fs');
const axios = require('axios');

const instance = axios.create({
  headers: { 'X-Apptweak-Key': 'u_zbcrCnNQSwyCSKq28xZ3oby5A' },
});

async function request() {
  const appsResponse = await instance.get('https://api.apptweak.com/ios/categories/6014/top.json?country=us&language=en&device=iphone&num=20');
  const appsData = appsResponse.data;

  const toFetch = appsData.content.slice(0, 20);

  const requests = toFetch.map((appData) => {
    return instance.get(`https://api.apptweak.com/ios/applications/${appData.id}/metadata.json?country=us&language=en&device=iphone&max-age=86400`);
  });

  Promise.all(requests).then((items) => {
    const data = items.map((item) => item.data);
    fs.writeFileSync('games-data.json', JSON.stringify(data, '', 2));
  });
}

request();
