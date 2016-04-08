module.exports = function(){
  var questList = [
    {
      title: 'Que tal uma pequena luta?',
      id: 1,
      level_min: 1,
      description: '<p>Vejo que já conheceu o Almirante. Ele é um homem bastante excêntrico hein?\
      Mas não se preocupe com isso, garanto que ele não morde.<p/>\
      <p>Eu sou o tenente “nome legal aqui”. Sim, sou bastante novo para ser um tenente, mas não\
      se engane com a minha aparência. Vejamos… hm… é a sua primeira missão certo?\
      Já lutou antes? Pela sua cara vejo que não. Pois bem, que tal praticar um pouco\
      antes de eu lhe entregar uma missão de verdade.<p/>\
      <p>Ali, derrote aquele soldado na arena.<p/>',
      objective_description: 'Derrote o soldado na arena',
      type: 'kill',
      objective: 'soldier',
      amount: 1,
      reward_exp: 100,
      reward_itens: ['Espada Simples','Escudo de casca de arvore']
    },
    {
      title: 'Limpando as ruas',
      id: 2,
      level_min: 2,
      description: '<p>Meus parabéns por ter ganho sua primeira batalha. Você deixou ele em maus bocados hein?\
      Agora que tal uma missão de verdade? Temos alguns arruaceiros procurando encrenca por ai.\
      Pode dar um jeito nisso?<p/>\
      <p>Claro que pode.<p/>\
      <p>Encontre-os e os traga até mim. Aposto que o Almirante irá adorar ter uma conversinha com eles.<p/>',
      objective_description: 'Derrote 3 arruaceiros',
      type: 'kill',
      objective: 'thief',
      amount: 3,
      reward_exp: 150,
      reward_itens: ['Armadura basica']
    },
    {
      title: 'Impondo ordem',
      id: 3,
      level_min: 3,
      description: '<p>O Almirante me pediu pra agradecê-lo. Disse que fazia tempo\
      em que não se divertia baten… digo, prendendo criminosos.</p>\
      <p>A missão que tenho pra você agora deve ser tratada com uma certa confidencialidade.\
      Nossos acampamentos médicos mais ao sul tem recebido muitos soldados relatando terem\
      sido atacados por outros soldados no intuito de roubar-lhe seus pertences. Encontrez\
      alguns destes indivíduos e os traga aqui para terem uma conversinha com o Almirante. \
      Fique a vontade para tomar como seu tudo que encontrar.</p>\
      <p>Provavelmente você encontrara alguns deles nos becos da cidade baixa</p>',
      objective_description: 'Lute contra 5 jogadores',
      type: 'pvp',
      objective: 'fight',
      amount: 5,
      reward_exp: 450,
      reward_itens: ['Armadura Reforçada','Espada Curta']
    }

  ];

  return questList;
};
