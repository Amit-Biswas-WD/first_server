import { Server } from "http";
import { app } from "./app";
import mongoose from "mongoose";

let server: Server;

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mongoose:ZUXUZ67JMOeV2vZ9@cluster0.lqaskcd.mongodb.net/mongoose_app?appName=Cluster0",
    );
    console.log("Connecting to mongodb using mongoose");
    server = app.listen(PORT, () =>
      console.log(`App is listen is port ${PORT}`),
    );
  } catch (error) {
    console.log(error);
  }
}

main();
