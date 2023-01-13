export type Tower = Upgrade & { upgrades: Upgrade[][] };

type Upgrade = {
	name: string,
	cost: number,
	income?: number,
	incomeMultiplier?: number,
}

const Towers: Tower[] = [{"name":"Dart Monkey",
"cost":200,
"upgrades":[[{"name":"Sharp Shots",
"cost":140},
{"name":"Razor Sharp Shots",
"cost":220},
{"name":"Spike-o-pult",
"cost":300},
{"name":"Juggernaut",
"cost":1800},
{"name":"Ultra-Juggernaut",
"cost":15000}],
[{"name":"Quick Shots",
"cost":100},
{"name":"Very Quick Shots",
"cost":190},
{"name":"Triple Shot",
"cost":400},
{"name":"Super Monkey Fan Club",
"cost":8000},
{"name":"Plasma Monkey Fan Club",
"cost":45000}],
[{"name":"Long Range Darts",
"cost":90},
{"name":"Enhanced Eyesight",
"cost":200},
{"name":"Crossbow",
"cost":625},
{"name":"Sharp Shooter",
"cost":2000},
{"name":"Crossbow Master",
"cost":23500}]]},
{"name":"Boomerang Monkey",
"cost":325,
"upgrades":[[{"name":"Improved Rangs",
"cost":200},
{"name":"Glaives",
"cost":280},
{"name":"Glaive Ricochet",
"cost":1300},
{"name":"M.O.A.R Glaives",
"cost":3000},
{"name":"Glaive Lord",
"cost":32400}],
[{"name":"Faster Throwing",
"cost":175},
{"name":"Faster Rangs",
"cost":250},
{"name":"Bionic Boomerang",
"cost":1450},
{"name":"Turbo Charge",
"cost":4200},
{"name":"Perma Charge",
"cost":35000}],
[{"name":"Long Range Rangs",
"cost":100},
{"name":"Red Hot Rangs",
"cost":300},
{"name":"Kylie Boomerang",
"cost":1300},
{"name":"MOAB Press",
"cost":2200},
{"name":"MOAB Domination",
"cost":50000}]]},
{"name":"Bomb Shooter",
"cost":525,
"upgrades":[[{"name":"Bigger Bombs",
"cost":350},
{"name":"Heavy Bombs",
"cost":650},
{"name":"Really Big Bombs",
"cost":1200},
{"name":"Bloon Impact",
"cost":3600},
{"name":"Bloon Crush",
"cost":55000}],
[{"name":"Faster Reload",
"cost":250},
{"name":"Missile Launcher",
"cost":400},
{"name":"MOAB Mauler",
"cost":1100},
{"name":"MOAB Assassin",
"cost":3200},
{"name":"MOAB Eliminator",
"cost":25000}],
[{"name":"Extra Range",
"cost":200},
{"name":"Frag Bombs",
"cost":300},
{"name":"Cluster Bombs",
"cost":800},
{"name":"Recursive Cluster",
"cost":2800},
{"name":"Bomb Blitz",
"cost":35000}]]},
{"name":"Tack Shooter",
"cost":280,
"upgrades":[[{"name":"Faster Shooting",
"cost":150},
{"name":"Even Faster Shooting",
"cost":300},
{"name":"Hot Shots",
"cost":600},
{"name":"Ring of Fire",
"cost":3500},
{"name":"Inferno Ring",
"cost":45500}],
[{"name":"Long Range Tacks",
"cost":100},
{"name":"Super Range Tacks",
"cost":225},
{"name":"Blade Shooter",
"cost":550},
{"name":"Blade Maelstrom",
"cost":2700},
{"name":"Super Maelstrom",
"cost":15000}],
[{"name":"More Tacks",
"cost":100},
{"name":"Even More Tacks",
"cost":100},
{"name":"Tack Sprayer",
"cost":450},
{"name":"Overdrive",
"cost":3200},
{"name":"The Tack Zone",
"cost":20000}]]},
{"name":"Ice Monkey",
"cost":500,
"upgrades":[[{"name":"Permafrost",
"cost":100},
{"name":"Cold Snap",
"cost":350},
{"name":"Ice Shards",
"cost":1500},
{"name":"Embrittlement",
"cost":2200},
{"name":"Super Brittle",
"cost":28000}],
[{"name":"Enhanced Freeze",
"cost":225},
{"name":"Deep Freeze",
"cost":350},
{"name":"Arctic Wind",
"cost":2900},
{"name":"Snowstorm",
"cost":3000},
{"name":"Absolute Zero",
"cost":20000}],
[{"name":"Larger Radius",
"cost":175},
{"name":"Re-Freeze",
"cost":225},
{"name":"Cryo Cannon",
"cost":1950},
{"name":"Icicles",
"cost":2750},
{"name":"Icicle Impale",
"cost":30000}]]},
{"name":"Glue Gunner",
"cost":275,
"upgrades":[[{"name":"Glue Soak",
"cost":200},
{"name":"Corrosive Glue",
"cost":300},
{"name":"Bloon Dissolver",
"cost":2500},
{"name":"Bloon Liquefier",
"cost":5000},
{"name":"The Bloon Solver",
"cost":22000}],
[{"name":"Bigger Globs",
"cost":100},
{"name":"Glue Splatter",
"cost":1800},
{"name":"Glue Hose",
"cost":3250},
{"name":"Glue Strike",
"cost":3500},
{"name":"Glue Storm",
"cost":15000}],
[{"name":"Stickier Glue",
"cost":120},
{"name":"Stronger Glue",
"cost":400},
{"name":"MOAB Glue",
"cost":3400},
{"name":"Relentless Glue",
"cost":3000},
{"name":"Super Glue",
"cost":28000}]]},
{"name":"Sniper Monkey",
"cost":350,
"upgrades":[[{"name":"Full Metal Jacket",
"cost":350},
{"name":"Large Calibre",
"cost":1500},
{"name":"Deadly Precision",
"cost":3000},
{"name":"Maim MOAB",
"cost":5000},
{"name":"Cripple MOAB",
"cost":34000}],
[{"name":"Night Vision Goggles",
"cost":300},
{"name":"Shrapnel Shot",
"cost":450},
{"name":"Bouncing Bullet",
"cost":3200},
{"name":"Supply Drop",
"cost":7200},
{"name":"Elite Sniper",
"cost":13000}],
[{"name":"Fast Firing",
"cost":400},
{"name":"Even Faster Firing",
"cost":400},
{"name":"Semi-Automatic",
"cost":3500},
{"name":"Full Auto Rifle",
"cost":4250},
{"name":"Elite Defender",
"cost":14000}]]},
{"name":"Monkey Sub",
"cost":325,
"upgrades":[[{"name":"Longer Range",
"cost":130},
{"name":"Advanced Intel",
"cost":500},
{"name":"Submerge and Support",
"cost":500},
{"name":"Bloontonium Reactor",
"cost":2500},
{"name":"Energizer",
"cost":32000}],
[{"name":"Barbed Darts",
"cost":450},
{"name":"Heat-tipped Darts",
"cost":300},
{"name":"Ballistic Missile",
"cost":1400},
{"name":"First Strike Capability",
"cost":13000},
{"name":"Pre-emptive Strike",
"cost":32000}],
[{"name":"Twin Guns",
"cost":450},
{"name":"Airburst Darts",
"cost":1000},
{"name":"Triple Guns",
"cost":1100},
{"name":"Armor Piercing Darts",
"cost":3000},
{"name":"Sub Commander",
"cost":25000}]]},
{"name":"Monkey Buccaneer",
"cost":500,
"upgrades":[[{"name":"Faster Shooting",
"cost":350},
{"name":"Double Shot",
"cost":550},
{"name":"Destroyer",
"cost":2950},
{"name":"Aircraft Carrier",
"cost":7200},
{"name":"Carrier Flagship",
"cost":25000}],
[{"name":"Grape Shot",
"cost":550},
{"name":"Hot Shot",
"cost":500},
{"name":"Cannon Ship",
"cost":900},
{"name":"Monkey Pirates",
"cost":4500},
{"name":"Pirate Lord",
"cost":21000}],
[{"name":"Long Range",
"cost":180},
{"name":"Crow's Nest",
"cost":400},
{"name":"Merchantman",
"cost":2300},
{"name":"Favored Trades",
"cost":5500},
{"name":"Trade Empire",
"cost":23000}]]},
{"name":"Monkey Ace",
"cost":800,
"upgrades":[[{"name":"Rapid Fire",
"cost":650},
{"name":"Lots More Darts",
"cost":650},
{"name":"Fighter Plane",
"cost":1000},
{"name":"Operation: Dart Storm",
"cost":3000},
{"name":"Sky Shredder",
"cost":40000}],
[{"name":"Exploding Pineapple",
"cost":200},
{"name":"Spy Plane",
"cost":350},
{"name":"Bomber Ace",
"cost":900},
{"name":"Ground Zero",
"cost":18000},
{"name":"Tsar Bomba",
"cost":30000}],
[{"name":"Sharper Darts",
"cost":500},
{"name":"Centered Path",
"cost":300},
{"name":"Neva-Miss Targeting",
"cost":2200},
{"name":"Spectre",
"cost":24000},
{"name":"Flying Fortress",
"cost":85000}]]},
{"name":"Heli Pilot",
"cost":1600,
"upgrades":[[{"name":"Quad Darts",
"cost":800},
{"name":"Pursuit",
"cost":500},
{"name":"Razor Rotors",
"cost":1750},
{"name":"Apache Dartship",
"cost":19600},
{"name":"Apache Prime",
"cost":45000}],
[{"name":"Bigger Jets",
"cost":300},
{"name":"IFR",
"cost":600},
{"name":"Downdraft",
"cost":3000},
{"name":"Support Chinook",
"cost":12000},
{"name":"Special Poperations",
"cost":30000}],
[{"name":"Faster Darts",
"cost":250},
{"name":"Faster Firing",
"cost":350},
{"name":"MOAB Shove",
"cost":3500},
{"name":"Comanche Defense",
"cost":8500},
{"name":"Comanche Commander",
"cost":35000}]]},
{"name":"Mortar Monkey",
"cost":750,
"upgrades":[[{"name":"Bigger Blast",
"cost":500},
{"name":"Bloon Buster",
"cost":500},
{"name":"Shell Shock",
"cost":900},
{"name":"The Big One",
"cost":8000},
{"name":"The Biggest One",
"cost":28000}],
[{"name":"Faster Reload",
"cost":300},
{"name":"Rapid Reload",
"cost":500},
{"name":"Heavy Shells",
"cost":900},
{"name":"Artillery Battery",
"cost":5500},
{"name":"Pop and Awe",
"cost":30000}],
[{"name":"Increased Accuracy",
"cost":200},
{"name":"Burny Stuff",
"cost":500},
{"name":"Signal Flare",
"cost":700},
{"name":"Shattering Shells",
"cost":11000},
{"name":"Blooncineration",
"cost":40000}]]},
{"name":"Dartling Gunner",
"cost":850,
"upgrades":[[{"name":"Focused Firing",
"cost":300},
{"name":"Laser Shock",
"cost":900},
{"name":"Laser Cannon",
"cost":4250},
{"name":"Plasma Accelerator",
"cost":11000},
{"name":"Ray of Doom",
"cost":80000}],
[{"name":"Advanced Targeting",
"cost":250},
{"name":"Faster Barrel Spin",
"cost":950},
{"name":"Hydra Rocket Pods",
"cost":5250},
{"name":"Rocket Storm",
"cost":5100},
{"name":"M.A.D",
"cost":60000}],
[{"name":"Faster Swivel",
"cost":150},
{"name":"Powerful Darts",
"cost":1200},
{"name":"Buckshot",
"cost":3400},
{"name":"Bloon Area Denial System",
"cost":12000},
{"name":"Bloon Exclusion Zone",
"cost":58000}]]},
{"name":"Wizard Monkey",
"cost":375,
"upgrades":[[{"name":"Guided Magic",
"cost":150},
{"name":"Arcane Blast",
"cost":450},
{"name":"Arcane Mastery",
"cost":1300},
{"name":"Arcane Spike",
"cost":10000},
{"name":"Archmage",
"cost":32000}],
[{"name":"Fireball",
"cost":300},
{"name":"Wall of Fire",
"cost":950},
{"name":"Dragon's Breath",
"cost":3000},
{"name":"Summon Phoenix",
"cost":4000},
{"name":"Wizard Lord Phoenix",
"cost":54000}],
[{"name":"Intense Magic",
"cost":300},
{"name":"Monkey Sense",
"cost":300},
{"name":"Shimmer",
"cost":1700},
{"name":"Necromancer: Unpopped Army",
"cost":2800},
{"name":"Prince of Darkness",
"cost":26500}]]},
{"name":"Super Monkey",
"cost":2500,
"upgrades":[[{"name":"Laser Blasts",
"cost":2500},
{"name":"Plasma Blasts",
"cost":3000},
{"name":"Sun Avatar",
"cost":20000},
{"name":"Sun Temple",
"cost":100000},
{"name":"True Sun God",
"cost":500000}],
[{"name":"Super Range",
"cost":1000},
{"name":"Epic Range",
"cost":1400},
{"name":"Robo Monkey",
"cost":8000},
{"name":"Tech Terror",
"cost":19000},
{"name":"The Anti-Bloon",
"cost":90000}],
[{"name":"Knockback",
"cost":3000},
{"name":"Ultravision",
"cost":1200},
{"name":"Dark Knight",
"cost":5600},
{"name":"Dark Champion",
"cost":60000},
{"name":"Legend of the Night",
"cost":200000}]]},
{"name":"Ninja Monkey",
"cost":500,
"upgrades":[[{"name":"Ninja Discipline",
"cost":300},
{"name":"Sharp Shurikens",
"cost":350},
{"name":"Double Shot",
"cost":850},
{"name":"Bloonjitsu",
"cost":2750},
{"name":"Grandmaster Ninja",
"cost":35000}],
[{"name":"Distraction",
"cost":350},
{"name":"Counter-Espionage",
"cost":500},
{"name":"Shinobi Tactics",
"cost":900},
{"name":"Bloon Sabotage",
"cost":5200},
{"name":"Grand Saboteur",
"cost":22000}],
[{"name":"Seeking Shuriken",
"cost":250},
{"name":"Caltrops",
"cost":400},
{"name":"Flash Bomb",
"cost":2750},
{"name":"Sticky Bomb",
"cost":4500},
{"name":"Master Bomber",
"cost":40000}]]},
{"name":"Alchemist",
"cost":550,
"upgrades":[[{"name":"Larger Potions",
"cost":250},
{"name":"Acidic Mixture Dip",
"cost":350},
{"name":"Berserker Brew",
"cost":1250},
{"name":"Stronger Stimulant",
"cost":3000},
{"name":"Permanent Brew",
"cost":60000}],
[{"name":"Stronger Acid",
"cost":250},
{"name":"Perishing Potions",
"cost":475},
{"name":"Unstable Concoction",
"cost":3000},
{"name":"Transforming Tonic",
"cost":4500},
{"name":"Total Transformation",
"cost":45000}],
[{"name":"Faster Throwing",
"cost":650},
{"name":"Acid Pool",
"cost":450},
{"name":"Lead to Gold",
"cost":1000},
{"name":"Rubber to Gold",
"cost":2750},
{"name":"Bloon Master Alchemist",
"cost":40000}]]},
{"name":"Druid",
"cost":400,
"upgrades":[[{"name":"Hard Thorns",
"cost":250},
{"name":"Heart of Thunder",
"cost":1000},
{"name":"Druid of the Storm",
"cost":1650},
{"name":"Ball Lightning",
"cost":4500},
{"name":"Superstorm",
"cost":65000}],
[{"name":"Thorn Swarm",
"cost":250},
{"name":"Heart of Oak",
"cost":350},
{"name":"Druid of the Jungle",
"cost":950},
{"name":"Jungle's Bounty",
"cost":5000},
{"name":"Spirit of the Forest",
"cost":35000}],
[{"name":"Druidic Reach",
"cost":100},
{"name":"Heart of Vengeance",
"cost":300},
{"name":"Druid of Wrath",
"cost":600},
{"name":"Poplust",
"cost":2500},
{"name":"Avatar of Wrath",
"cost":45000}]]},
{"name":"Banana Farm",
"cost":1250,
"income":80,
"upgrades":[[{"name":"Increased Production",
"cost":500,
"income": 40},
{"name":"Greater Production",
"cost":600,
"income": 40},
{"name":"Banana Plantation",
"cost":3000,
"income": 160},
{"name":"Banana Research Facility",
"cost":19000},
{"name":"Banana Central",
"cost":100000}],
[{"name":"Long Life Bananas",
"cost":300},
{"name":"Valuable Bananas",
"cost":800},
{"name":"Monkey Bank",
"cost":3500},
{"name":"IMF loan",
"cost":7500},
{"name":"Monkey-Nomics",
"cost":100000}],
[{"name":"EZ Collect",
"cost":250},
{"name":"Banana Salvage",
"cost":200},
{"name":"Marketplace",
"cost":2900,
"income": 320},
{"name":"Central Market",
"cost":15000},
{"name":"Monkey Wall Street",
"cost":60000}]]},
{"name":"Spike Factory",
"cost":1000,
"upgrades":[[{"name":"Bigger Stacks",
"cost":800},
{"name":"White Hot Spikes",
"cost":600},
{"name":"Spiked Balls",
"cost":2300},
{"name":"Spiked Mines",
"cost":9500},
{"name":"Super Mines",
"cost":150000}],
[{"name":"Faster Production",
"cost":600},
{"name":"Even Faster Production",
"cost":800},
{"name":"MOAB SHREDR",
"cost":2500},
{"name":"Spike Storm",
"cost":5000},
{"name":"Carpet of Spikes",
"cost":40000}],
[{"name":"Long Reach",
"cost":150},
{"name":"Smart Spikes",
"cost":400},
{"name":"Long Life Spikes",
"cost":1400},
{"name":"Deadly Spikes",
"cost":3500},
{"name":"Perma-Spike",
"cost":30000}]]},
{"name":"Monkey Village",
"cost":1200,
"upgrades":[[{"name":"Bigger Radius",
"cost":400},
{"name":"Jungle Drums",
"cost":1500},
{"name":"Primary Training",
"cost":800},
{"name":"Primary Mentoring",
"cost":2500},
{"name":"Primary Expertise",
"cost":25000}],
[{"name":"Grow Blocker",
"cost":250},
{"name":"Radar Scanner",
"cost":2000},
{"name":"Monkey Intelligence Bureau",
"cost":7500},
{"name":"Call to Arms",
"cost":20000},
{"name":"Homeland Defense",
"cost":40000}],
[{"name":"Monkey Business",
"cost":500},
{"name":"Monkey Commerce",
"cost":500},
{"name":"Monkey Town",
"cost":10000},
{"name":"Monkey City",
"cost":3000},
{"name":"Monkeyopolis",
"cost":5000}]]},
{"name":"Engineer Monkey",
"cost":400,
"upgrades":[[{"name":"Sentry Gun",
"cost":500},
{"name":"Faster Engineering",
"cost":400},
{"name":"Sprockets",
"cost":575},
{"name":"Sentry Expert",
"cost":2500},
{"name":"Sentry Champion",
"cost":32000}],
[{"name":"Larger Service Area",
"cost":250},
{"name":"Deconstruction",
"cost":350},
{"name":"Cleansing Foam",
"cost":850},
{"name":"Overclock",
"cost":13500},
{"name":"Ultraboost",
"cost":105000}],
[{"name":"Oversize Nails",
"cost":450},
{"name":"Pin",
"cost":220},
{"name":"Double Gun",
"cost":500},
{"name":"Bloon Trap",
"cost":3500},
{"name":"XXXL Trap",
"cost":54000}]]}];

export default Towers;