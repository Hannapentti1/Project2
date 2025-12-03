import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Snippet API running. Use /api/getall" });
});

// Mongo schema
const snippetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String },
  tags: { type: [String], default: [] }
}, { timestamps: true });

const Snippet = mongoose.model("Snippet", snippetSchema);

// Routes
app.get("/api/getall", async (req, res) => {
  try {
    const { lang, limit } = req.query;
    const filter = lang ? { language: lang } : {};

    const data = await Snippet
      .find(filter)
      .sort({ createdAt: -1 })
      .limit(limit ? parseInt(limit) : 0);

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) return res.status(404).json({ error: "Snippet not found" });
    res.json(snippet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/add", async (req, res) => {
  try {
    const snippet = new Snippet(req.body);
    await snippet.save();
    res.status(201).json(snippet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.patch("/api/update/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!snippet) return res.status(404).json({ error: "Snippet not found" });
    res.json(snippet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/api/delete/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findByIdAndDelete(req.params.id);
    if (!snippet) return res.status(404).json({ error: "Snippet not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log("DB connection error:", err));


