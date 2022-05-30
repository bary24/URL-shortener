const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const linksSchema = mongoose.Schema({
  webFull: {
    type: String

  },
  androidFull: {
    type: String

  },
  iosFull: {
    type: String

  },
  short: {
    type: String,
    required: true,
    default: () => nanoid(5)

  }

});

linksSchema.index({ short: 1 });

const linkModel = mongoose.model('Link', linksSchema);

module.exports = linkModel;
