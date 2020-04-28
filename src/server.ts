import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ ok: 1 }));

app.listen(3333, () => console.log("🚀 Started Api"));
