import mongoose from "mongoose";
import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
let MONGODB_URI;

try {
    const envData = fs.readFileSync(envPath, "utf-8");
    const match = envData.match(/MONGODB_URI=(.*)/);
    if (match) MONGODB_URI = match[1].trim();
} catch (e) {
    console.error("Could not read .env.local file");
    process.exit(1);
}

if (!MONGODB_URI) {
    console.error("No MONGODB_URI in .env.local");
    process.exit(1);
}

const masked = MONGODB_URI.replace(/:([^@]+)@/, ":****@");
console.log("Found URI in .env.local:", masked);

if (!MONGODB_URI.startsWith("mongodb+srv://")) {
    console.warn("⚠️ URI does not start with mongodb+srv://. Current prefix:", MONGODB_URI.substring(0, 15));
}

console.log("Testing connection to Atlas Cluster...");

try {
    const hiddenUri = MONGODB_URI.replace(/:([^@]+)@/, ":****@");
    console.log("Using URI:", hiddenUri);

    const conn = await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 5000, // 5 seconds timeout
    });

    console.log("✅ Connection Success!");
    console.log("Database name:", conn.connection.name);
    await mongoose.disconnect();
} catch (error) {
    console.error("❌ Connection Error Details:");
    console.error(error);
}
