player: {
  name: String,
  max_hp: Number,
  hp: Number,
  level: Number,
  exp: Number,
  attack: Number,
  defense: Number,
  critical: Number,
  dodge: Number,
  block: Number,
  guild: String,
  expertise: {
    close_range: Number,
    long_range: Number,
    magic: Number
  },
  action_points: {
    type: Number,
    default: 3
  },
  equips:{
    armor: Item,
    weapons:[
      {
        first_hand: Item,
        second_hand: Item
      },
      {
        first_hand: Item,
        second_hand: Item
      }
    ],
    acessorios: [Item,Item],
  },
  vehicle: Item,
  inventory: [{Item}],
  safehouse: Item,
  skills:{
    available:[{Item}];
    using:[{Item}]
  }
}
