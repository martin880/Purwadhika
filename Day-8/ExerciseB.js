// Exercise - Shooting Game

// ● Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// ● Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
// ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// ■ start() → start shooting games
// ○ Player class :
// ■ Property → name, health (default 100), power (default 10)
// ■ hit(power) → subtract player health
// ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ○ ShootingGame start() function flow :
// ■ In every turn :
// ● Show each player status before shooting
// ● Get random item for each player before shooting
// ● Show each player status after shooting
// ■ Show winner name

class Player {
    constructor(name, health, power) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    getHealth() {
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        console.log(`${this.name} dapat health item (+10 health)`);
        this.health += 10;
      } else {
        console.log(`${this.name} gak dapat health item.`);
      }
    }
  
    getPower() {
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        console.log(`${this.name} dapat power item (+10 power)`);
        this.power += 10;
      } else {
        console.log(`${this.name} gak dapat power item.`);
      }
    }
  
    shoot(target) {
      console.log(`${this.name} sedang menembak ${target.name}`);
      target.health -= this.power;
      console.log(`${target.name} HP sekarang ${target.health}`);
    }
  }
  
  const player1 = new Player("Player 1", 100, 10);
  const player2 = new Player("Player 2", 100, 10);
  
  let turn =Math.floor(Math.random() * 2);
  while (player1.health > 0 && player2.health > 0) {
    if (turn === 1) {
      player1.getHealth();
      player1.getPower();
      player1.shoot(player2);
      turn = 2;
    } else {
      player2.getHealth();
      player2.getPower();
      player2.shoot(player1);
      turn = 1;
    }
  }
  
  if (player1.health <= 0) {
    console.log(`${player2.name} Menang!`);
  } else if (player2.health <= 0) {
    console.log(`${player1.name} Menang!`);
  }
  