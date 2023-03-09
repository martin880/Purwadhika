// Exercise - Shooting Game

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
  