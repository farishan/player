function Player({
  name
}){
  this.id = `Player${ID()}`
  this.name = name
  this.created_at = Date.now()

  this.characters = []

  return this

  // Helpers
  function ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
}