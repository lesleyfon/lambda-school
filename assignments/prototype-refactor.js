/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*//*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// creating the gameObject using the class syntax
class GameObject{
    constructor(attr){
        this.name = attr.name;
        this.createdAt = attr.createdAt;
        this.dimensions = attr.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
 // Created character stats that extends/inherits gameObject properties
class CharacterStats extends GameObject {
    constructor(attr){
        // we are able to pass Game object properties to the CharacterStats constructor here 
        super(attr);
        this.healthPoints = attr.healthPoints;
    }
    takeDamage(){
        return `${this.name} took heavy damage`;
    }
}  

  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
 class Humanoid extends CharacterStats {
    constructor(attr){
        super(attr);
        this.team = attr.team;
        this.weapons = attr.weapons;
        this.language = attr.language;
    }
    greet(){
        return `${this.name} offers Greeting in ${this.language}`;
    }
}
  
  /*]
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
  
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
   
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  const fight = function(args){
    // // player one is attacking 
    // if(args === player1.name){
    //   player1.healthPoints = player1.healthPoints  + 2;
    //   player2.healthPoints = player2.healthPoints  - 2;
    //   return `${player2.name} just got hit by ${player1.name}\n ${player1.name}'s news Score: ${player1.healthPoints}\n${player2.name}'s news Score: ${player2.healthPoints}
    //   `;
    // } else  if(args === player2.name){
    //   player1.healthPoints = player1.healthPoints  - 2;
    //   player2.healthPoints = player2.healthPoints  + 2;
    //   return `${player1.name} just got hit by ${player2.name}\n
    //     ${player1.name}'s news Score: ${player1.healthPoints}
    //     ${player2.name}'s news Score: ${player2.healthPoints}
    //   `;
    // }
  }
//   const player = {}
//   console.log(player2.attack(player1));
//   console.log(player2.attack(player1));
//   const container = document.querySelector("div");
//   container.innerHTML = markUp;
