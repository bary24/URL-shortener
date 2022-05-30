const app = require('./app');
const { connectMongo } = require('./services/mongo');
const port = process.env.PORT || 8000;
const Link = require('./models/links.model');
const DeviceDetector = require('device-detector-js');
const deviceDetector = new DeviceDetector();

const startingServerPromise = startServer();

async function startServer () {
  await connectMongo();
  await Link.syncIndexes();

  app.listen(port, function () {
    console.log(`Server has started on port ${port}`);
  });
}

app.get('/shortlinks', async function (req, res) {
  const shortLinks = await Link.find({});
  if (!shortLinks) {
    res.status(404).json({
      error: 'No records available'
    });
  }

  res.json(shortLinks);
  console.log(shortLinks);
});

app.post('/shortlinks', async function (req, res) {
  console.log(req.body);
  const link = await Link.create({
    webFull: req.body.webUrl,
    androidFull: req.body.androidUrl,
    iosFull: req.body.iosUrl
  });

  res.status(201);
  res.json(link.short);
});

app.get('/shortlinks/:shortlink', async function (req, res) {
  const shortLink = req.params.shortlink;
  const data = await Link.findOne({ short: shortLink });
  if (!data) {
    res.status(404);
  }

  const userAgent = req.headers['user-agent'];
  const device = deviceDetector.parse(userAgent);
  console.log(device.os.name);

  if (device.os.name === 'Android') {
    res.redirect(data.androidFull);
  }

  if (!device.os.name || device.os.name === 'Windows') {
    res.redirect(data.webFull);
  }

  if (device.os.name === 'iOS') {
    res.redirect(data.iosFull);
  }
});

app.put('/shortlinks/:shortlink', async function (req, res) {
  const shortlink = req.params.shortlink;
  if (!shortlink) {
    res.status(400).json({
      error: 'invalid request'
    });
  }
  await Link.findOneAndUpdate({ short: shortlink }, { short: req.body.updatedLink });
  res.json('updated successfully ! ');
});

module.exports = {
  startServer,
  startingServerPromise
};
