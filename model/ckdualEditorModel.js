const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApiDocsSchema = new Schema(
  {
    sections: { type: String, required: true },
    subsections: { type: Object },
    fields: { type: Object },
    createdAt: { type: String, default: () => new Date().toISOString() },
    isVisible: { type: Boolean, default: true },
    type: { type: String, default: "1", required: true },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ApiDocs = mongoose.model("ApiDocs", ApiDocsSchema);
module.exports = ApiDocs;
