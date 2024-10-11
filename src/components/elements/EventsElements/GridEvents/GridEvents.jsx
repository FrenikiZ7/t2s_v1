import Prop from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { t } from 'i18next';
import * as Styled from './GridEvents-Styles';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { EventModal } from '../EventModal/EventModal';
import { EventCard } from '../EventCard/EventCard';
import { FilterEvents } from '../FilterEvents/FilterEvents';
import { Text } from '../../Text/Text';

export function GridEvents({ items, selectedevent }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => { setSelectedEvent(selectedevent); }, [selectedevent]);

  // Pagination stuff
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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
      setItemsPerPage(window.innerWidth < 768 ? 2 : 4);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePaginationClick = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.GridEventsContainer>

      <FilterEvents />

      {displayItems && displayItems.length ? (
        <GridLayout>
          {displayItems.map((item) => (
            <EventCard
              key={item.id}
              event={item}
              onClick={() => setSelectedEvent(item)}
            />
          ))}
        </GridLayout>
      ) : (
        <Text text={t('event_not_found')} />
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

      {selectedEvent && (
        <EventModal event={selectedEvent} onclick={() => setSelectedEvent()} />
      )}
    </Styled.GridEventsContainer>
  );
}

GridEvents.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired,
  selectedevent: Prop.object,
};
