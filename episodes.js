const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  episodes: [
    {
      "id": 49288,
      "url": "http://www.tvmaze.com/episodes/49288/futurama-1x01-space-pilot-3000",
      "name": "Space Pilot 3000",
      "season": 1,
      "number": 1,
      "airdate": "1999-03-28",
      "airtime": "22:00",
      "airstamp": "1999-03-29T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143950.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/143950.jpg"
      },
      "summary": "<p>A delivery boy frozen in the year 1999 awakens in the year 3000. Phillip J. Fry delivers a pizza to a Cryogenics lab on New Years eve, only to discover that it is a prank delivery and then accidentally falls into a open cryogenics chamber, is put to sleep and wakes up in the far future.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49288"
        }
      }
    },
    {
      "id": 49289,
      "url": "http://www.tvmaze.com/episodes/49289/futurama-1x02-the-series-has-landed",
      "name": "The Series Has Landed",
      "season": 1,
      "number": 2,
      "airdate": "1999-04-04",
      "airtime": "22:00",
      "airstamp": "1999-04-05T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143951.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/143951.jpg"
      },
      "summary": "<p>The crew takes a mission to an amusement park on the moon.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49289"
        }
      }
    },
    {
      "id": 49290,
      "url": "http://www.tvmaze.com/episodes/49290/futurama-1x03-i-roommate",
      "name": "I, Roommate",
      "season": 1,
      "number": 3,
      "airdate": "1999-04-06",
      "airtime": "22:00",
      "airstamp": "1999-04-07T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143952.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/143952.jpg"
      },
      "summary": "<p>Bender offers to let Fry move in with him when Fry is forced to move out of the Planet Express because of his slob style of living.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49290"
        }
      }
    },
    {
      "id": 49291,
      "url": "http://www.tvmaze.com/episodes/49291/futurama-1x04-loves-labors-lost-in-space",
      "name": "Love's Labors Lost in Space",
      "season": 1,
      "number": 4,
      "airdate": "1999-04-13",
      "airtime": "22:00",
      "airstamp": "1999-04-14T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/143953.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/143953.jpg"
      },
      "summary": "<p>The crew encounters infamous space captain Zapp Brannigan.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49291"
        }
      }
    },
    {
      "id": 49292,
      "url": "http://www.tvmaze.com/episodes/49292/futurama-1x05-fear-of-a-bot-planet",
      "name": "Fear of a Bot Planet",
      "season": 1,
      "number": 5,
      "airdate": "1999-04-20",
      "airtime": "22:00",
      "airstamp": "1999-04-21T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144085.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144085.jpg"
      },
      "summary": "<p>The crew makes a delivery to a planet of human-hating robots.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49292"
        }
      }
    },
    {
      "id": 49293,
      "url": "http://www.tvmaze.com/episodes/49293/futurama-1x06-a-fishful-of-dollars",
      "name": "A Fishful of Dollars",
      "season": 1,
      "number": 6,
      "airdate": "1999-04-27",
      "airtime": "22:00",
      "airstamp": "1999-04-28T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144087.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144087.jpg"
      },
      "summary": "<p>Fry becomes a billionaire and buys the world's last can of anchovies.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49293"
        }
      }
    },
    {
      "id": 49294,
      "url": "http://www.tvmaze.com/episodes/49294/futurama-1x07-my-three-suns",
      "name": "My Three Suns",
      "season": 1,
      "number": 7,
      "airdate": "1999-05-04",
      "airtime": "22:00",
      "airstamp": "1999-05-05T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144088.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144088.jpg"
      },
      "summary": "<p>Fry accidentally swallows another planet's emperor and gains his title.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49294"
        }
      }
    },
    {
      "id": 49295,
      "url": "http://www.tvmaze.com/episodes/49295/futurama-1x08-a-big-piece-of-garbage",
      "name": "A Big Piece of Garbage",
      "season": 1,
      "number": 8,
      "airdate": "1999-05-11",
      "airtime": "22:00",
      "airstamp": "1999-05-12T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144089.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144089.jpg"
      },
      "summary": "<p>A giant garbage ball from space threatens to destroy New New York.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49295"
        }
      }
    },
    {
      "id": 49296,
      "url": "http://www.tvmaze.com/episodes/49296/futurama-1x09-hell-is-other-robots",
      "name": "Hell Is Other Robots",
      "season": 1,
      "number": 9,
      "airdate": "1999-05-18",
      "airtime": "22:00",
      "airstamp": "1999-05-19T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144090.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144090.jpg"
      },
      "summary": "<p>Bender is sent to Robot Hell for all of his sins. Title tagline \"Condemned By The Space Pope\".</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49296"
        }
      }
    },
    {
      "id": 49297,
      "url": "http://www.tvmaze.com/episodes/49297/futurama-2x01-a-flight-to-remember",
      "name": "A Flight to Remember",
      "season": 2,
      "number": 1,
      "airdate": "1999-09-26",
      "airtime": "22:00",
      "airstamp": "1999-09-27T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144091.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144091.jpg"
      },
      "summary": "<p>The crew takes a vacation on the maiden voyage of the spaceship Titanic.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49297"
        }
      }
    },
    {
      "id": 49298,
      "url": "http://www.tvmaze.com/episodes/49298/futurama-2x02-mars-university",
      "name": "Mars University",
      "season": 2,
      "number": 2,
      "airdate": "1999-10-03",
      "airtime": "22:00",
      "airstamp": "1999-10-04T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144092.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144092.jpg"
      },
      "summary": "<p>The Professor introduces the crew to his newest experiment at Mars University.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49298"
        }
      }
    },
    {
      "id": 49299,
      "url": "http://www.tvmaze.com/episodes/49299/futurama-2x03-when-aliens-attack",
      "name": "When Aliens Attack",
      "season": 2,
      "number": 3,
      "airdate": "1999-11-07",
      "airtime": "22:00",
      "airstamp": "1999-11-08T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144093.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144093.jpg"
      },
      "summary": "<p>Aliens invade Earth in search of a TV star from 1999. Title sequence tagline \"Proudly Made On Earth\".</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49299"
        }
      }
    },
    {
      "id": 49300,
      "url": "http://www.tvmaze.com/episodes/49300/futurama-2x04-fry-the-slurm-factory",
      "name": "Fry & the Slurm Factory",
      "season": 2,
      "number": 4,
      "airdate": "1999-11-14",
      "airtime": "22:00",
      "airstamp": "1999-11-15T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144094.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144094.jpg"
      },
      "summary": "<p>Fry wins a trip to the Slurm Factory and discovers the secret behind the addictive soda. Title sequence tagline \"Live from Omicron Persei 8\".</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49300"
        }
      }
    },
    {
      "id": 49301,
      "url": "http://www.tvmaze.com/episodes/49301/futurama-2x05-i-second-that-emotion",
      "name": "I Second That Emotion",
      "season": 2,
      "number": 5,
      "airdate": "1999-11-21",
      "airtime": "22:00",
      "airstamp": "1999-11-22T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144095.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144095.jpg"
      },
      "summary": "<p>Leela, Fry and Bender search the mutant-filled sewers for Nibbler. Title sequence tagline \"Made From Meat By-Products\".</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49301"
        }
      }
    },
    {
      "id": 49302,
      "url": "http://www.tvmaze.com/episodes/49302/futurama-2x06-brannigan-begin-again",
      "name": "Brannigan Begin Again",
      "season": 2,
      "number": 6,
      "airdate": "1999-11-28",
      "airtime": "22:00",
      "airstamp": "1999-11-29T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144096.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144096.jpg"
      },
      "summary": "<p>Stripped of his title, space captain Zapp Brannigan begs for a job at Planet Express.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49302"
        }
      }
    },
    {
      "id": 49303,
      "url": "http://www.tvmaze.com/episodes/49303/futurama-2x07-a-head-in-the-polls",
      "name": "A Head in the Polls",
      "season": 2,
      "number": 7,
      "airdate": "1999-12-12",
      "airtime": "22:00",
      "airstamp": "1999-12-13T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144097.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144097.jpg"
      },
      "summary": "<p>When the value of titanium skyrockets, Bender sells his body for a large sum of money.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49303"
        }
      }
    },
    {
      "id": 49304,
      "url": "http://www.tvmaze.com/episodes/49304/futurama-2x08-xmas-story",
      "name": "Xmas Story",
      "season": 2,
      "number": 8,
      "airdate": "1999-12-19",
      "airtime": "22:00",
      "airstamp": "1999-12-20T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144098.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144098.jpg"
      },
      "summary": "<p>An evil robotic Santa Claus attack shows Fry how Christmas has changed in the last 1,000 years. Title tagline 'Based on a true story'.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49304"
        }
      }
    },
    {
      "id": 49305,
      "url": "http://www.tvmaze.com/episodes/49305/futurama-2x09-why-must-i-be-a-crustacean-in-love",
      "name": "Why Must I Be a Crustacean in Love",
      "season": 2,
      "number": 9,
      "airdate": "2000-02-06",
      "airtime": "22:00",
      "airstamp": "2000-02-07T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144099.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144099.jpg"
      },
      "summary": "<p>Zoidberg gets caught up in his species' mating frenzy. Title tagline 'From the network that brought you 'The Simpsons''</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49305"
        }
      }
    },
    {
      "id": 49306,
      "url": "http://www.tvmaze.com/episodes/49306/futurama-2x10-put-your-head-on-my-shoulder",
      "name": "Put Your Head on My Shoulder",
      "season": 2,
      "number": 10,
      "airdate": "2000-02-13",
      "airtime": "22:00",
      "airstamp": "2000-02-14T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144100.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144100.jpg"
      },
      "summary": "<p>Fry's head is conjoined with Amy's body after a car crash. Meanwhile, Bender receives a robot recall and faces the risk of catastrophic butt failure. Title sequence tagline ' Not based on the novel by James Fenimore Cooper'.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49306"
        }
      }
    },
    {
      "id": 49307,
      "url": "http://www.tvmaze.com/episodes/49307/futurama-2x11-lesser-of-two-evils",
      "name": "Lesser of Two Evils",
      "season": 2,
      "number": 11,
      "airdate": "2000-02-20",
      "airtime": "22:00",
      "airstamp": "2000-02-21T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144101.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144101.jpg"
      },
      "summary": "<p>Fry suspects Bender's robotic duplicate has stolen a valuable item from the Miss Universe pageant.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49307"
        }
      }
    },
    {
      "id": 49308,
      "url": "http://www.tvmaze.com/episodes/49308/futurama-2x12-raging-bender",
      "name": "Raging Bender",
      "season": 2,
      "number": 12,
      "airdate": "2000-02-27",
      "airtime": "22:00",
      "airstamp": "2000-02-28T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144102.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144102.jpg"
      },
      "summary": "<p>Bender inadvertently beats up the Ultimate Robot Fighting champion. Leela reminisces about when she wanted to become a fighting champion.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49308"
        }
      }
    },
    {
      "id": 49309,
      "url": "http://www.tvmaze.com/episodes/49309/futurama-2x13-a-bicyclops-built-for-two",
      "name": "A Bicyclops Built for Two",
      "season": 2,
      "number": 13,
      "airdate": "2000-03-19",
      "airtime": "22:00",
      "airstamp": "2000-03-20T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/46/117306.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/46/117306.jpg"
      },
      "summary": "<p>Leela meets a man named Alkazar and finds out she is not the only Cyclops. He takes her to his planet and proposes marriage to her, however Fry is suspicious of his motives. Title sequence tagline 'This episode has been modified to fit your primitive screen'.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49309"
        }
      }
    },
    {
      "id": 49310,
      "url": "http://www.tvmaze.com/episodes/49310/futurama-2x14-how-hermes-requisitioned-his-groove-back",
      "name": "How Hermes Requisitioned His Groove Back",
      "season": 2,
      "number": 14,
      "airdate": "2000-04-02",
      "airtime": "22:00",
      "airstamp": "2000-04-03T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144103.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144103.jpg"
      },
      "summary": "<p>Hermes is forced to take a vacation while a female bureaucrat replaces him. Title sequence tagline 'As foretold by Nostradamus'.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49310"
        }
      }
    },
    {
      "id": 49311,
      "url": "http://www.tvmaze.com/episodes/49311/futurama-2x15-a-clone-of-my-own",
      "name": "A Clone of My Own",
      "season": 2,
      "number": 15,
      "airdate": "2000-04-09",
      "airtime": "22:00",
      "airstamp": "2000-04-10T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144104.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144104.jpg"
      },
      "summary": "<p>Professor Farnsworth names his teenage clone to be the successor of his research. Title sequence tagline 'Coming soon to an illegal Dvd'.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49311"
        }
      }
    },
    {
      "id": 49312,
      "url": "http://www.tvmaze.com/episodes/49312/futurama-2x16-the-deep-south",
      "name": "The Deep South",
      "season": 2,
      "number": 16,
      "airdate": "2000-04-16",
      "airtime": "22:00",
      "airstamp": "2000-04-17T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144105.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144105.jpg"
      },
      "summary": "<p>The crew discovers the lost city of Atlanta, where Fry falls in love with a mermaid. Title sequence tagline 'A stern warning of things to come'.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49312"
        }
      }
    },
    {
      "id": 49313,
      "url": "http://www.tvmaze.com/episodes/49313/futurama-2x17-bender-gets-made",
      "name": "Bender Gets Made",
      "season": 2,
      "number": 17,
      "airdate": "2000-04-30",
      "airtime": "22:00",
      "airstamp": "2000-05-01T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144106.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144106.jpg"
      },
      "summary": "<p>Bender impresses the robot mafia with his thievery and joins them as a hired goon.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49313"
        }
      }
    },
    {
      "id": 49314,
      "url": "http://www.tvmaze.com/episodes/49314/futurama-2x18-the-problem-with-popplers",
      "name": "The Problem with Popplers",
      "season": 2,
      "number": 18,
      "airdate": "2000-05-07",
      "airtime": "22:00",
      "airstamp": "2000-05-08T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144107.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144107.jpg"
      },
      "summary": "<p>Aliens threaten to devour mankind after the crew unknowingly sells their young as fast food.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49314"
        }
      }
    },
    {
      "id": 49315,
      "url": "http://www.tvmaze.com/episodes/49315/futurama-2x19-mothers-day",
      "name": "Mother's Day",
      "season": 2,
      "number": 19,
      "airdate": "2000-05-14",
      "airtime": "22:00",
      "airstamp": "2000-05-15T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144108.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144108.jpg"
      },
      "summary": "<p>Mom's broken heart leads her to organize a robot rebellion.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49315"
        }
      }
    },
    {
      "id": 49316,
      "url": "http://www.tvmaze.com/episodes/49316/futurama-2x20-anthology-of-interest-1",
      "name": "Anthology of Interest (1)",
      "season": 2,
      "number": 20,
      "airdate": "2000-05-21",
      "airtime": "22:00",
      "airstamp": "2000-05-22T02:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144109.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144109.jpg"
      },
      "summary": "<p>The Professor creates a What-If machine that answers every question.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49316"
        }
      }
    },
    {
      "id": 49317,
      "url": "http://www.tvmaze.com/episodes/49317/futurama-3x01-the-honking",
      "name": "The Honking",
      "season": 3,
      "number": 1,
      "airdate": "2000-11-05",
      "airtime": "22:00",
      "airstamp": "2000-11-06T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144110.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144110.jpg"
      },
      "summary": "<p>The Professor creates a What-If machine that answers every question.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49317"
        }
      }
    },
    {
      "id": 49318,
      "url": "http://www.tvmaze.com/episodes/49318/futurama-3x02-war-is-the-h-word",
      "name": "War Is the H-Word",
      "season": 3,
      "number": 2,
      "airdate": "2000-11-26",
      "airtime": "22:00",
      "airstamp": "2000-11-27T03:00:00+00:00",
      "runtime": 30,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/57/144111.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/57/144111.jpg"
      },
      "summary": "<p>When Bender and Fry volunteer for military duty, Leela also joins the all-male ranks, as Lee Lemon.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/49318"
        }
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