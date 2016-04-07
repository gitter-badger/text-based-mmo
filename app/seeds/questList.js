module.exports = function(){
  var questList = [
    {
      title: 'Que tal uma pequena luta?',
      id: 1,
      description: '<p>Vejo que já conheceu o Almirante. Ele é um homem bastante excêntrico hein?\
      Mas não se preocupe com isso, garanto que ele não morde.<p/>\
      <p>Eu sou o tenente “nome legal aqui”. Sim, sou bastante novo para ser um tenente, mas não\
      se engane com a minha aparência. Vejamos… hm… é a sua primeira missão certo?\
      Já lutou antes? Pela sua cara vejo que não. Pois bem, que tal praticar um pouco\
      antes de eu lhe entregar uma missão de verdade.<p/>\
      <p>Ali, derrote aquele soldado na arena.<p/>',
      objective_description: 'Derrote o soldado na arena',
      type: 'kill',
      objective: 'soldie',
      amount: 1,
      reward_exp: 100,
      reward_itens: ['sword','shield']
    },
    {
      title: 'Limpando as ruas',
      id:2,
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
      reward_itens: ['armor']
    }
  ];

  return questList;
};
