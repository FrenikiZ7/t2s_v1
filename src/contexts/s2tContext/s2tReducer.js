import * as types from './s2tTypes';

export const s2tReducer = (state, action) => {
  switch (action.type) {
    case types.add_proposal:
      // função disparada no handleSubmit do componente proposalElements > newProposal
      // action.payload contém os dados que vem do formulário de criação de proposta/oportunidade

    case types.edit_proposal:
      // função disparada no handleSubmit do componente proposalElements > editProposal
      // action.payload contém os dados que vem do formulário de edição de proposta/oportunidade

    case types.remove_proposal:
      // função disparada no handleRemoveProposal do componente proposalElements > proposalCard
      // action.payload contém os dados da proposta/oportunidade que está sendo solicitado a remoção

    case types.add_event:
      console.log(action.payload);
      // função disparada no handleSubmit do componente eventElements > newEvent
      // action.payload contém os dados que vem do formulário de criação de evento

    case types.remove_event:
      // função disparada no handleRemoveEvent do componente eventElements > eventCard
      // action.payload contém os dados do evento que está sendo solicitado a remoção

    case types.report_media:
      // insira a função aqui

    case types.filter_players:
      // insira a função aqui

    case types.search_players:
      // insira a função aqui

    case types.search_player_proposals:
      // insira a função aqui

    case types.filter_player_proposals:
      // insira a função aqui

    case types.filter_events:
      // insira a função aqui

    case types.search_events:
      // insira a função aqui

    default: {
      return { ...state };
    }
  }
};
