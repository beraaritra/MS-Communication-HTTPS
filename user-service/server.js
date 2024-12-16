const colors = require ('colors');
const app = require('./app');

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`.bgBlue);
  console.log(`User Service Swagger Docs API running on http://localhost:${PORT}/api-docs `.bgMagenta);
});
