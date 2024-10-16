import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './StaffProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Row } from '../../../../../components/RowContainer/Row';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { StaffContext } from '../../../../../contexts/userContext/StaffProvider/StaffContext';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function StaffProfile() {
  const { t } = useTranslation();
  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  return (
    <Styled.StaffProfileContainer>

      <ProfileInfo items={staffState?.profile?.info || []} />

      <OwnerSlide items={staffState?.profile?.photos || []} title={t('photos')} ownerview />
      <OwnerVideoSlide items={staffState?.profile?.videos || []} title={t('videos')} profileType="staff" />
      <Historic items={staffState?.profile?.clubs || []} title={t('club_history')} />

      <Row>
        <Historic items={staffState?.profile?.certificatesOrLicenses || []} title={t('certificates_or_licenses')} />
        <Historic items={staffState?.profile?.coursesOrTrainings || []} title={t('courses_or_trainings')} />
      </Row>

      <TextSlide items={staffState?.profile?.awards || []} title={t('titles_and_awards')} />

    </Styled.StaffProfileContainer>
  );
}
