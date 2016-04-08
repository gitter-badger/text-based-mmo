module.exports = function(){
  var charDemo = {
    name: 'DarthMaul',
    level: 62,
    guild: 'Imperio Sith',
    attack: 125,
    defense: 165,
    action_points: 3,
    critical: 30,
    dodge: 22,
    block: 86,
    max_hp: 1120,
    hp: 632,
    exp: 832,
    expertise: {
      close_range: 9,
      long_range: 0,
      magic: 2
    },
    vehicle: {
      type: 'moto',
      model: 'Moto XS-35',
      speed: 312
    },
    safehouse: 'Capital - Distrito B',
    skills:{
      taked:[
        {
          skill_id: 1,
          level: 2
        }
      ],
      using:[
        {
          skill_id: 1,
          level: 2
        }
      ]
    },
    free_skill_points:3
  };

  return charDemo;
}
