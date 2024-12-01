const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

let notes = [
  {
    id: '1',
    content: 'HTML is easy',
    important: true,
  },
  {
    id: '2',
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: '3',
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
];

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
