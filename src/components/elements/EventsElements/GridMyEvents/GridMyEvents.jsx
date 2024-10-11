import Prop from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { Add as AddIcon } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as Styled from './GridMyEvents-Styles';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { EventModal } from '../EventModal/EventModal';
import { EventCard } from '../EventCard/EventCard';
import { NewEvent } from '../NewEvent/NewEvent';
import { Row } from '../../../RowContainer/Row';
import { IconDiv } from '../../IconDiv/IconDiv';
import { Title } from '../../Title/Title';
import { Text } from '../../Text/Text';

export function GridMyEvents({ items }) {
  const [selectedEvent, setSelectedEvent] = useState();
  const [isAddNewEvent, setIsAddNewEvent] = useState(false);

  const { t } = useTranslation();

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
    <Styled.GridMyEventsContainer>

      {isAddNewEvent ? (<NewEvent onclick={() => setIsAddNewEvent(!isAddNewEvent)} />) : (
        <>

          <Row>
            <Title text={t('my_events')} uppercase />
            <IconDiv name={t('create_new_event')} onclick={() => setIsAddNewEvent(!isAddNewEvent)}>
              <AddIcon />
            </IconDiv>
          </Row>

          {displayItems && displayItems.length ? (
            <GridLayout>
              {displayItems.map((item) => (
                <EventCard
                  key={item.id}
                  ownerview
                  event={item}
                  onClick={() => setSelectedEvent(item)}
                />
              ))}
            </GridLayout>
          ) : (
            <Text text={t('no_owner_events_found')} />
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
        </>
      )}

      {selectedEvent && (
        <EventModal ownerview event={selectedEvent} onclick={() => setSelectedEvent()} />
      )}
    </Styled.GridMyEventsContainer>
  );
}

GridMyEvents.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired,
};
