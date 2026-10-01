#about this games
programming language    : html, css, js classic DOM style
website structure       : Dynamic matrix model, with hireracical game structures 
amount of miningame     : 4 games
maximum size each games : 200Kb


#Root structure and mapping explain

/MyMiniGamesProject
├── /Assets (or /Source)
│   ├── /Global                            <-- Shared code, core managers, and UI
│   │   ├── /Scripts                       <-- Main menu, audio manager, game switcher
│   │   ├── /UI                            <-- Shared buttons, fonts, themes
│   │   └── /Audio                         <-- Universal sound effects & music
│   
|── /MiniGames                             <-- Isolated folder for every mini-game
|   |
│   │── /MiniGame_Pong                     <-- Self-contained mini-game 1
│   │      ├── logic.js                    <-- Paddle, ball, and score logic
│   │      ├── style.css                   <-- Sprites and textures for Pong
│   │      ├── main.html                   <-- main game window structures
│   │      └── /art                        <-- folder comtains arts,images,sounds
│   │   
│   │── /MiniGame_rock-paper-scicor        <-- Self-contained mini-game 2
│   │       ├── logic.js                   <-- Question parser, timer logic, 
│   │       ├── main.html                  <-- main game window structures
│   │       └── /Art                       <-- folder comtains arts,images,sounds
│   │
|   |── /MiniGame_dino-run                 <-- Self-contained mini-game 3
│   │       ├── logic.js                   <-- Question parser, timer logic
│   │       ├── main.html                  <-- main game window structures
│   │       └── /Art                       <-- folder comtains arts,images,sounds
|   |
|   |── /MiniGame_mini-spacebox            <-- Self-contained mini-game 4
│   │       ├── logic.js                   <-- Question parser, timer logic
│   │       ├── main.html                  <-- main game window structures
│   │       └── /Art                       <-- folder comtains arts,images,sounds
|   | 
│   └── /ThirdParty                        <-- Asset store plugins, external libraries
│
├── /Docs                                  <-- Game Design Documents (GDD)
└── README.md                              <-- this file 
