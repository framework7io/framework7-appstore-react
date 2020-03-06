const fs = require('fs');
const apps = require('./games-data');

const newApps = apps.map((app) => {
  const {
    versions,
    icon,
    title,
    slug,
    description,
    price,
    screenshots,
    release_date,
    size,
    subtitle,
    promotionalText,
    rating,
    id,
    developer,
  } = app.content;

  const screens = (screenshots.iphone_6_5.length ? screenshots.iphone_6_5 : screenshots.iphone_5_8).map((screen, index) => {
    return `${slug}-${index + 1}.${screen.url.slice(-3)}`;
  });
  return {
    id,
    title,
    slug,
    subtitle,
    icon: `${slug}-icon.${icon.slice(-3)}`,
    description,
    price,
    release_date,
    size,
    promotionalText,
    rating: rating.average,
    developer,
    screenshots: screens,
    versions,
  }
});

fs.writeFileSync('./games-final.json', JSON.stringify(newApps, '', 2));

