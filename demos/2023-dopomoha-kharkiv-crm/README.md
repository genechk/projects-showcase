# Appeals for Humanitarian Aid CRM

The app is an interface for managing and editing an overwhelming amount of appeals for aid coming from people in areas affected by war, specifically Kharkiv and Kharkiv region, Ukraine.

This is a simplified demo of a larger app which I’ve built in the late 2022 and was improving throughout 2023.

Technologies used in demo: `Typescript`, `Vite`, `Vue3`, `Pinia`, `Tailwind`, `HeadlessUI` and `zod`.

Additional technologies used in production apps: `Nuxt3`, `Passport`, `Node.js`, `Express`, `Helmet`, `Grammy`, `Ramda`, `Mocha + Chai`, `Sinon`, `Supertest`, `Leaflet`, `JWT`, `Iron session`, `IoRedis`, `Google APIs`

## History and motivation
After Russia has invaded Ukraine in 2024, a lot of people in regions nearing the front line were suddenly left without means of survival. They’ve started to seek aid, and local volunteers have joined their efforts to help those people in their hour of need.

However, that brought up a number of challenges. Incoming appeals and requests had to be stored in a single database. They had to be checked for duplicates, verified and updated. 

Moreover, it was necessary to group those appeals by proximity (i. e., same city district), by type of necessity (food, medicine and / or hygiene). And while the appeal was processed, it’s status had to be updated as well, since it came through different phases, and had multiple volunteers attached to it.

All that information initially was managed manually in the single Google Spreadsheet, which we used as a database. Even though it was obvious that this wasn’t an efficient solution, it was a solution nonetheless. At least until we developed common workflow patterns, which allowed to start bringing in some much needed automation.

## Demo app details

This demo shows a simplified UI created for that automation. The part of the app which it represents was designed to separate workflows and volunteer’s responsibilities at the different stages of appeal processing.

Simply put, it shows only the data which you need at the moment.

An app is accessible from both mobile and desktop, and allows to instantly navigate to any appeal using its id.

(The `appealId` is the only parameter needed, because it is the singular piece of data used to synchronize knowledge about current processing details between multiple volunteers)

## Production CRM details

Currently production launch includes a full-stack app and a telegram bot that both provide access to the main DB of appeals.

Telegram bot is written with `Node.js`, `Grammy` and `Google Sheets API`. It also has an additional CRUD API for database access (`Node.js` + `Express`)

Full-stack CRM is pretty close to this demo, although it is restricted and requires an OAuth2 authentication (`Nuxt3` + `Passport`)

## Contact

If you are interested in learning more about this app’s development, or possibly in hiring me to develop another automation workflow for you project, feel free to contact me:

_Email:_ [genek.tomashko@gmail.com](genek.tomashko@gmail.com)

_Phone:_ [+38 098 677-46-20](tel:+380986774620)

_Telegram:_ [genechk](https://t.me/gehecnk)

_LinkedIn:_ [genechk](https://www.linkedin.com/in/genechk/)
