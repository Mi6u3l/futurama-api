const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  data:[
    {
      "type": "episodes",
      "id": 1,
      "attributes":
        {
          "url": "http://www.tvmaze.com/episodes/49288/futurama-1x01-space-pilot-3000",
          "name": "Space Pilot 3000",
          "image": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143950.jpg",
          "summary": "<p>A delivery boy frozen in the year 1999 awakens in the year 3000. Phillip J. Fry delivers a pizza to a Cryogenics lab on New Years eve, only to discover that it is a prank delivery and then accidentally falls into a open cryogenics chamber, is put to sleep and wakes up in the far future.</p>"
        }
    },
    {
      "type": "episodes",
      "id": 2,
      "attributes":
        {
          "url": "http://www.tvmaze.com/episodes/49289/futurama-1x02-the-series-has-landed",
          "name": "The Series Has Landed",
          "image": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143951.jpg",
          "summary":  "<p>The crew takes a mission to an amusement park on the moon.</p>"
        }
    },
    {
      "type": "episodes",
      "id": 3,
      "attributes":
        {
          "url": "http://www.tvmaze.com/episodes/49290/futurama-1x03-i-roommate",
          "name": "I, Roommate",
          "image":  "http://static.tvmaze.com/uploads/images/medium_landscape/57/143952.jpg",
          "summary":  "<p>Bender offers to let Fry move in with him when Fry is forced to move out of the Planet Express because of his slob style of living.</p>"
        }
    },
    {
      "type": "episodes",
      "id": 4,
      "attributes":
        {
          "url": "http://www.tvmaze.com/episodes/49291/futurama-1x04-loves-labors-lost-in-space",
          "name": "Love's Labors Lost in Space",
          "image": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143953.jpg",
          "summary": "<p>The crew encounters infamous space captain Zapp Brannigan.</p>"
        }
    },
    {
      "type": "episodes",
      "id": 5,
      "attributes":
        {
          "url": "http://www.tvmaze.com/episodes/49292/futurama-1x05-fear-of-a-bot-planet",
          "name": "Fear of a Bot Planet",
          "image": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144085.jpg",
          "summary": "<p>The crew makes a delivery to a planet of human-hating robots.</p>"
        }
    },
    {
      "type": "episodes",
      "id": 6,
      "attributes":
        {
          "url": "http://www.tvmaze.com/episodes/49293/futurama-1x06-a-fishful-of-dollars",
          "name": "A Fishful of Dollars",
          "image": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144087.jpg",
          "summary": "<p>Fry becomes a billionaire and buys the world's last can of anchovies.</p>"
        }
    }
  ]
}


function getData(token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token]
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll(token) {
  return new Promise((res) => {
    res(getData(token))
  })
}

module.exports = {
  getAll
}