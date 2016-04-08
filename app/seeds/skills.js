module.exports = function(){
  var skills = [
    {
      name: 'Corte Vertical',
      id:1,
      description: 'Ataca o inimigo de cima para baixo.',
      type: 'close',
      damage: 50,
      cost:1,
      recharge: 0,
      effects: [],
      effect_description: 'Nenhum',
      level_min: 1,
      needed_points: 1,
      img_url: 'images/icons/skills/01.png',
      require: [
        {
          first: 'sword'
        },
        {
          first: 'axe'
        },
        {
          first: 'greatsword'
        }
      ]
    },
    {
      name: 'Investida',
      id:2,
      description: 'Avança contra o inimigo causando dano e podendo lhe atordoar.',
      type: 'close',
      damage: 60,
      cost:2,
      recharge: 2,
      effects: [
        {
          type: 'debuff',
          att: 'action_points',
          turns: 1,
          value: 1,
          chance: 0.35
        }
      ],
      effect_description:'35% de chance de remover PA.',
      level_min: 2,
      needed_points: 1,
      img_url: 'images/icons/skills/02.png',
      require: [
        {
          first: 'sword',
          second: 'shield'
        },
        {
          first: 'axe',
          second: 'shield'
        }
      ]
    },
    {
      name: 'Muralha',
      id:3,
      description: 'Levanta o escudo se portando em modo de defesa.',
      type: 'close',
      damage: 0,
      cost:1,
      recharge: 1,
      effects: [
        {
          type: 'buff',
          att: 'block',
          turns: 1,
          value: 0.4,
          chance: 1
        }
      ],
      effect_description:'35% de chance de remover PA.',
      level_min: 2,
      needed_points: 1,
      img_url: 'images/icons/skills/03.png',
      require: [
        {
          first: 'shield'
        }
      ]
    }

  ];

  return skills;
};
