const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const path = require("path");

const mongoose = require("mongoose");
const app = express();

app.use("*", cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../react-ui/build/index.html"));
  });
}

const appointmentSchema = require("../docappp/server/graphql/schema").appointmentSchema;
app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema: appointmentSchema,
    graphiql: true
  })
);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Doctor_appointment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 //useCreateIndex:true
}).then(()=>{
    console.log('connection sucessful');
}).catch((e)=>{
    console.log('no connetion');
})

module.exports = { mongoose };       


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`A GraphQL API running at port ${port}`);
});
