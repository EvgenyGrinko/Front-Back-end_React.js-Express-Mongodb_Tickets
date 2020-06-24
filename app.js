const express = require("express");
const path = require('path');
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(cors());

const url = "mongodb+srv://admin-e:4dJ71t3e@tickets-mdett.mongodb.net/ticketsdb";
const mongoClient = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
// app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
//res.sendFile(path.join(__dirname, 'build', 'index.html'));

app.get("/tickets", (req, res) => {

    mongoClient.connect(function(err, client){
        
        const db = client.db("ticketsdb");
        const tickets = db.collection("tickets");
        tickets.aggregate([
            { $lookup: 
                {
                    from: 'owners',
                    localField: 'owner_id',
                    foreignField: '_id',
                    as: 'owner'
                }
            },
            { $lookup: 
                {
                    from: 'assets',
                    localField: 'asset_id',
                    foreignField: '_id',
                    as: 'asset',
                }
            }
        ]).toArray(function(err, tickets) {
            if (err) throw err;

            tickets.forEach(ticket => {
                ticket.owner = ticket.owner[0];
                ticket.asset = ticket.asset[0];

                delete ticket.owner_id;
                delete ticket.asset_id;

                ticket.ticketId = ticket._id;
                delete ticket._id;

                ticket.owner.ownerId = ticket.owner._id;
                delete ticket.owner._id;

                ticket.asset.assetId = ticket.asset._id;
                delete ticket.asset._id;
            })

            res.send(tickets);
            // client.close();
        });
    })
});

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log("The server is running on port " + port);
});

