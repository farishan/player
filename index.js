/**
 * Player Template
 * @param {string} name - Player's name
 * @param {Object} extend - Additional properties
 * @returns Player object
 */
function Player({ name = "default", extend = {} }) {
  this.id = `Player${ID()}`;
  this.name = name;
  this.created_at = Date.now();
  this.characters = [];

  // Feature-specific properties
  const extendKeys = Object.keys(extend);
  if (extendKeys.length > 0) {
    for (let index = 0; index < extendKeys.length; index++) {
      const element = extendKeys[index];
      this[element] = extend[element];
    }
  }

  return this;

  // Helpers
  function ID() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
}
