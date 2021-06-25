function Player({
  name
}){
  this.id = `Player_${ID()}`
  this.name = name
  this.created_at = Date.now()

  this.characters = []

  return this
}