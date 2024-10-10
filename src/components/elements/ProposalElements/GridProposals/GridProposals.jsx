import React, { useEffect, useMemo, useState } from 'react';
import Prop from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as Styled from './GridProposals-Styles';
import { Title } from '../../Title/Title';
import { GridLayoutContainer } from '../../../GridLayout/GridLayout-Styles';
import { ProposalCard } from '../ProposalCard/ProposalCard';
import { ProposalModal } from '../ProposalModal/ProposalModal';
import { FilterProposals } from '../FilterProposals/FilterProposals';
import { Text } from '../../Text/Text';
import { StaffProposalModal } from '../StaffProposalModal/StaffProposalModal';
import { FilterStaffProposals } from '../FilterStaffProposals/FilterStaffProposals';

export function GridProposals({
  items, title, selectedproposal, type = 'player',
}) {
  const { t } = useTranslation();

  const normalizedType = type.toLowerCase();

  const proposalModalComponents = {
    player: ProposalModal,
    staff: StaffProposalModal,
  };

  const filterProposalComponents = {
    player: FilterProposals,
    staff: FilterStaffProposals,
  };

  const FilterProposalComponent = filterProposalComponents[normalizedType];
  const ProposalModalComponent = proposalModalComponents[normalizedType];

  // Pagination stuff
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const pagesVisited = pageNumber * itemsPerPage;

  const displayItems = useMemo(() => {
    if (items) {
      return items.slice(pagesVisited, pagesVisited + itemsPerPage);
    }

    return [];
  }, [items, pageNumber, itemsPerPage]);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Altera o itemsPerPage baseado no Width
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 4 : 8);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recebe os dados do card clicado pelo usuário
  const [selectedProposal, setSelectedProposal] = useState(null);

  useEffect(() => {
    setSelectedProposal(selectedproposal);
  }, [selectedproposal]);

  const handleCardClick = (item) => {
    setSelectedProposal(item);
  };

  const handlePaginationClick = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.GridProposalsContainer>

      {title && <Title text={title} uppercase />}
      <FilterProposalComponent />

      <Styled.ModalContainer>

        {displayItems && displayItems.length > 0 ? (
          <GridLayoutContainer>
            {displayItems.map((item) => (
              <ProposalCard
                from={item.details.from}
                date={item.details.date}
                opportunity={item.details.opportunity}
                category={item.details.category}
                country={item.details.country}
                org={item.details.org}
                orglogo={item.details.orgLogo}
                orgpath={item.details.orgPath}
                onclick={() => handleCardClick(item)}
                id={item.opportunityId}
                key={item.opportunityId}
                publicview
              />
            ))}
          </GridLayoutContainer>
        ) : (

          <Text text={t('no_opportunities')} />
        )}

        {displayItems.length > 0 && (
          <Styled.StyledPaginate
            previousLabel={t('previous')}
            nextLabel={t('next')}
            breakLabel="..."
            pageCount={items ? Math.ceil(items.length / itemsPerPage) : 0}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={changePage}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onClick={handlePaginationClick}
          />
        )}

        {/* Renderiza um modal com os dados do card clicado pelo usuário */}
        {selectedProposal && (
          <ProposalModalComponent proposal={selectedProposal} onclick={() => setSelectedProposal(null)} />
        )}

      </Styled.ModalContainer>

    </Styled.GridProposalsContainer>
  );
}

GridProposals.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object),
  type: Prop.string,
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
