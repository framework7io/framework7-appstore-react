/* eslint-disable */
const games = require('../games-data.json');
const apps = require('../apps-data.json');

[apps, games].flat().forEach((app) => {
  if (app.icon) app.icon = `static/apps-images/${app.icon}`;
  app.screenshots = app.screenshots.map((fileName) => `static/apps-images/${fileName}`);
});

export { games, apps };
