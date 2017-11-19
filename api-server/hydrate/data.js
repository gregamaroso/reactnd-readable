
const categories = {
  categories: [
      {
        name: 'Road Bikes',
        path: 'road'
      },
      {
        name: 'Mountain Bikes',
        path: 'mountain'
      },
  ]
};

const posts = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166340134,
    title: 'Wilier Cento 10 NDR Super Record Disc',
    body: 'With an increase in global numbers of older recreational cyclists looking for a premium road bike, Wilier sees this as a growing market for its products. Many won’t want the race-oriented geometry that you find on those top end-road bikes that are often consumer versions of the bikes ridden by pro teams. The Wilier Cento 10 NDR builds on the design features of the brand’s successful race bikes to offer a more endurance-focussed ride. It follows the modern endurance trends, offering a more relaxed riding position, wider tyres and disc braking.',
    author: 'Roadie Warrior',
    category: 'road',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479707730,
    title: 'Genesis Croix de Fer 20',
    body: "Genesis has been selling its Croix de Fer for years. It’s a classic do-it-all machine, as happy load-lugging as picking its way along muddy tracks – and anything in between. Genesis markets the Croix de Fer as an adventure bike and, with its wide clearance and tyres, it fits well into this fashionable category.",
    author: 'Cyclomaniac',
    category: 'road',
    voteScore: -5,
    deleted: false,
    commentCount: 2
  },
  "je74yr610zue64meis7w6": {
    id: 'je74yr610zue64meis7w6',
    timestamp: 1468479797490,
    title: 'Pinarello Paris',
    body: "The Four By 4 system is the only suspension design that completely decouples wheel path from shock progression, allowing us to tune them individually. This allows results in a higher level of performance than competing designs, and we can tweak these performance values for each model's intended application. The primary performance focus here at Knolly is traction, and the Four By 4 system provides unparalleled performance in all conditions.",
    author: 'Pesky Peddler',
    category: 'road',
    voteScore: 2,
    deleted: false,
    commentCount: 2
  },
  "fir75k385hg8573jcswo2": {
    id: 'fir75k385hg8573jcswo2',
    timestamp: 1468475627190,
    title: 'Specialized S-Works Tarmac',
    body: "The Specialized S-Works Tarmac race bike is, and always has been, the GC race bike from Specialized and it has won a number of massive races over the years including world titles with Peter Sagan.",
    author: 'Spoke & Mirrors',
    category: 'road',
    voteScore: 0,
    deleted: false,
    commentCount: 2
  },
  "d84kfir75y30596kgjr83": {
    id: 'd84kfir75y30596kgjr83',
    timestamp: 1468479767291,
    title: 'Salsa Redpoint',
    body: "Are you efficiency minded but still want an aggressive ride without the trappings of a gushy-feeling long-travel bike? If so, chances are that you'll be very happy with Salsa's new Redpoint. Much more capable than its 150 millimeters of progressive, Split-Pivot suspension would indicate, the mid-travel support and end-stroke ramp give the rear suspension a bottomless feel. Our testers felt comfortable charging through the chunder alongside some of the longer-travel bikes in the category.",
    author: 'Handlebar Army',
    category: 'mountain',
    voteScore: 8,
    deleted: false,
    commentCount: 2
  },
  "284jd84jdur64y56e85ur": {
    id: '284jd84jdur64y56e85ur',
    timestamp: 1468479482990,
    title: 'Pivot Firebird',
    body: "Comparing this Firebird to the previous model is like looking at CrossFit before-and-after photos. Sometimes we're not sure they're even the same bike, and in many ways, they're not. The new 170-millimeter-travel Firebird takes design cues from Pivot's Phoenix downhill bike, so it's no surprise it was the longest, slackest and biggest-travel bike in this year's garage. The numbers looked as good as the bike itself, and the pressure was on to use the Firebird to its potential. To our surprise, much of that potential was on the uphills. The long cockpit, short chainstays and steep seat angle made for powerful and comfortable climbing, even without clips. The proven DW-link adeptly isolates pedal force from suspension force, especially important on such a squishy bike. It wouldn't have climbed the same without the Fox Float X2 Lever, which kept us from sinking too deep into all that travel.",
    author: 'Chaingang',
    category: 'mountain',
    voteScore: 12,
    deleted: false,
    commentCount: 2
  },
  "vur846diske8thgy39did": {
    id: 'vur846diske8thgy39did',
    timestamp: 1468479724710,
    title: 'Knolly Wardon Carbon',
    body: "Knolly Bikes may not be a household name, but the decade-old brand proudly incorporates the innovations and riding styles that have evolved from Vancouver, British Columbia, into its designs. It offers three full-suspension bikes, ranging in rear-wheel travel from 130 to 170 millimeters. The 155-millimeter-travel, enduro-race-inspired Warden is Knolly's entrance into the carbon-fiber frame game. Built around 650b wheels, it employs Knolly's take on the four-bar Horst-link suspension, called Fourby4. Developed by Knolly chief designer and CEO, Noel Buckley, the strut-style suspension claims to allow the wheel path and shock progression to be manipulated independently to create an efficient pedaling platform with a bottomless feel on big impacts. The Warden is loaded with features, such as 'Neutral' and 'Low' geometry settings at the lower shock-mount bolt. The Low position drops the bottom bracket from 345 millimeters to 337 and slackens the head angle from 66.5 to 65.5 degrees. The frame also has a 'trap door' in the downtube to house Shimano's Di2 battery.",
    author: 'Old Crank',
    category: 'mountain',
    voteScore: -2,
    deleted: false,
    commentCount: 2
  },
};

const comments = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: "For god sake, it’s a beautiful bike with outstanding components, and then it’s shod in Rubino’s. They are ok but you’d think at the price point there’s enough fat in the price for some 28C Corsa’s.",
    author: 'Tour de Farce',
    voteScore: 4,
    deleted: false,
    parentDeleted: false
  },
  "rhwbjzha4wzd7vfnre5nj": {
    id: 'rhwbjzha4wzd7vfnre5nj',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479237497,
    body: 'Integer tincidunt elit nec porta dictum. Integer vitae urna volutpat, faucibus nisl ac, porta est. Etiam eget tellus a neque convallis auctor. Nulla fringilla sodales condimentum. Vivamus tortor mauris, dictum sit amet fringilla sed, vulputate in elit. Phasellus tristique pellentesque ipsum, eu scelerisque turpis porttitor ac.',
    author: 'Look Ma No Hands',
    voteScore: 1,
    deleted: false,
    parentDeleted: false
  },
  "e9w9y2p31gsqlb6io0w12": {
    id: 'e9w9y2p31gsqlb6io0w12',
    parentId: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1469479657192,
    body: 'Proin finibus, quam et vehicula laoreet, justo felis malesuada diam, vel sodales libero urna vel purus. In et justo maximus, imperdiet ipsum vel, dignissim lectus. Fusce eu ornare libero, nec mollis ligula.',
    author: 'Pedal Pusher',
    voteScore: 7,
    deleted: false,
    parentDeleted: false
  },
  "m8tdhf84kegabzx7b1sqf": {
    id: 'm8tdhf84kegabzx7b1sqf',
    parentId: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1469479745196,
    body: 'Sed varius massa sit amet ligula pulvinar, in dictum orci auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    author: 'Grind My Gears',
    voteScore: -8,
    deleted: false,
    parentDeleted: false
  },
  "1q1puox7fobpyy0qafglv": {
    id: '1q1puox7fobpyy0qafglv',
    parentId: "je74yr610zue64meis7w6",
    timestamp: 1469479127198,
    body: 'Aenean et arcu est. Mauris a odio eu purus accumsan commodo eu eu enim. Sed varius nec enim ut semper. Donec a est suscipit augue ullamcorper posuere.',
    author: 'The Spin Doctor',
    voteScore: 3,
    deleted: false,
    parentDeleted: false
  },
  "48v8vbtvm7y2o9waoxq03": {
    id: '48v8vbtvm7y2o9waoxq03',
    parentId: "je74yr610zue64meis7w6",
    timestamp: 1469479723111,
    body: 'Etiam accumsan, enim et consectetur feugiat, elit purus fermentum lacus, at auctor ex nisl vitae neque. Ut tempor risus non nisi commodo porta. Nulla facilisi.',
    author: 'Pedal Power',
    voteScore: 5,
    deleted: false,
    parentDeleted: false
  },
  "0y70jol7cmd3cyzparo2c": {
    id: '0y70jol7cmd3cyzparo2c',
    parentId: "fir75k385hg8573jcswo2",
    timestamp: 1469479263199,
    body: 'Donec euismod, orci consequat aliquet posuere, ex ex congue augue, quis luctus dolor massa fermentum sem. Integer condimentum et est non porttitor. Quisque in nibh at velit hendrerit porta at et nunc. Maecenas vulputate urna odio. Nunc sed vestibulum lacus. Mauris laoreet varius est id accumsan. Sed tempor nunc neque, sit amet tristique nibh laoreet et. Nunc vel mi sapien. Quisque et semper ex, quis pulvinar enim.',
    author: 'Peddling Squares',
    voteScore: 14,
    deleted: false,
    parentDeleted: false
  },
  "4bnfvxayfrpgg4fydrs4a": {
    id: '4bnfvxayfrpgg4fydrs4a',
    parentId: "fir75k385hg8573jcswo2",
    timestamp: 1469479762140,
    body: 'Phasellus posuere a erat et gravida. Proin quis nisi tristique, porta enim ac, bibendum nibh. Aliquam sed efficitur felis. Sed et ullamcorper nisl, tempus efficitur lorem. Vestibulum non semper diam.',
    author: 'Chain Reaction',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  "toai7o19xuruzl6dl00he": {
    id: 'toai7o19xuruzl6dl00he',
    parentId: "d84kfir75y30596kgjr83",
    timestamp: 1469479761294,
    body: 'Morbi ipsum odio, commodo ac scelerisque ac, gravida et dui. Sed sit amet metus at tellus condimentum interdum. Mauris eu dui rutrum, volutpat mauris et, pellentesque tortor.',
    author: 'Sid Vicious Cycle',
    voteScore: 3,
    deleted: false,
    parentDeleted: false
  },
  "1ncch6wbgfsrskmc79sgm": {
    id: '1ncch6wbgfsrskmc79sgm',
    parentId: "d84kfir75y30596kgjr83",
    timestamp: 1469479767034,
    body: 'Aenean nec ipsum sed lectus porttitor congue ut vel sem. Curabitur libero lacus, venenatis eget enim dapibus.',
    author: 'Bikelicious',
    voteScore: 0,
    deleted: false,
    parentDeleted: false
  },
  "r7fklgm81e19skn16d8dj": {
    id: 'r7fklgm81e19skn16d8dj',
    parentId: "284jd84jdur64y56e85ur",
    timestamp: 1469479767002,
    body: 'Aenean euismod semper ante, sed porta neque commodo in. Mauris vel accumsan nunc. Curabitur quis ornare est. Aenean scelerisque leo et tortor semper viverra. Sed porttitor.',
    author: 'DZ Nuts',
    voteScore: 5,
    deleted: false,
    parentDeleted: false
  },
  "zd1qmpa10hj6h7y7ou61p": {
    id: 'zd1qmpa10hj6h7y7ou61p',
    parentId: "284jd84jdur64y56e85ur",
    timestamp: 1469479766290,
    body: 'Vestibulum sed tortor a libero lacinia hendrerit. Ut eu massa porttitor, tristique enim ac, pharetra ligula.',
    author: 'Weekend Warrior',
    voteScore: -7,
    deleted: false,
    parentDeleted: false
  },
  "0eo9gj4gdaya8fvqxz5sb": {
    id: '0eo9gj4gdaya8fvqxz5sb',
    parentId: "vur846diske8thgy39did",
    timestamp: 1469479247190,
    body: 'Donec commodo quam a eleifend feugiat. Pellentesque lacinia volutpat odio, eu pellentesque turpis sollicitudin a.',
    author: 'Contadorian',
    voteScore: 0,
    deleted: false,
    parentDeleted: false
  },
  "mwrup3e7jby19htuh0nrf": {
    id: 'mwrup3e7jby19htuh0nrf',
    parentId: "vur846diske8thgy39did",
    timestamp: 1469479763490,
    body: 'Proin sed ante malesuada, luctus turpis eu, porttitor est. Pellentesque sapien urna, dapibus ut porttitor congue, congue vitae nunc. Vivamus aliquam mauris auctor ullamcorper malesuada. Aliquam vitae dapibus erat. Vivamus bibendum posuere ex, vitae condimentum ipsum scelerisque sit amet.',
    author: 'The Process',
    voteScore: 3,
    deleted: false,
    parentDeleted: false
  },
};

module.exports = {
  categories,
  posts,
  comments
};
