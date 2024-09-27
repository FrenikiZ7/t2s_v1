import Prop from 'prop-types';
import React, { useState } from 'react';
import { Check as CheckIcon } from '@styled-icons/fluentui-system-filled/Check';
import { PersonEdit as PersonEditIcon } from '@styled-icons/fluentui-system-filled/PersonEdit';
import { BookOpenGlobe as BookOpenIcon } from '@styled-icons/fluentui-system-filled/BookOpenGlobe';
import { Image as ImageIcon } from '@styled-icons/fluentui-system-filled/Image';
import { VideoAdd as VideoAddIcon } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import * as Styled from './ClubPage-Styles';
import { Title } from '../../../../components/elements/Title/Title';
import { GridLayout } from '../../../../components/GridLayout/GridLayout';
import { IconDiv } from '../../../../components/elements/IconDiv/IconDiv';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { theme } from '../../../../styles/theme';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { IconCard } from '../../../../components/elements/IconCard/IconCard';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';
import { Banner } from '../../../../components/elements/Banner/Banner';
import { Button } from '../../../../components/elements/Button/Button';
import { Text } from '../../../../components/elements/Text/Text';
import { Row } from '../../../../components/RowContainer/Row';
import { ListContainer, ListItem } from '../../../../components/elements/List/List-Styles';
import { List } from '../../../../components/elements/List/List';

export function ClubPage() {
  const { t } = useTranslation();
  const [explanation, setExplanation] = useState('step-1');

  const handleExplanation = (selectedStep) => {
    setExplanation(explanation === selectedStep ? '' : selectedStep);
  };

  return (
    <Styled.ClubPageContainer>
      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">
        <Subtitle
          as="h2"
          uppercase
          text={t('slogan')}
          size={theme.sizes.huge}
        />
        <Text
          size={theme.sizes.large}
          text={t('club_text')}
        />
        <Button
          path="/register"
          text={t('register')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.lightprimary}
          texthover={theme.colors.primary}
          border={theme.colors.lightprimary}
          borderhover={theme.colors.primary}
          size={theme.sizes.large}
        />
      </Banner>

      <Subtitle text={t('how_it_works')} size={theme.sizes.xxlarge} uppercase />

      <GridLayout>

        <IconCard
          name={t('club_step_1_title')}
          onClick={() => handleExplanation('step-1')}
          active={explanation === 'step-1'}
          activecolor={theme.colors.primary}
        >
          <CheckIcon />
          <Subtitle text={t('club_step_1_title')} size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-1' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  {t('generic_step_1_part_1')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('generic_step_1_part_2')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('club_step_1_part_3')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('generic_step_1_part_4')}
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
          )}
        </IconCard>

        <IconCard
          name={t('club_step_2_title')}
          onClick={() => handleExplanation('step-2')}
          active={explanation === 'step-2'}
          activecolor={theme.colors.primary}
        >
          <PersonEditIcon />
          <Subtitle text={t('club_step_2_title')} size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-2' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  {t('generic_step_2_part_1')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('generic_step_2_part_2')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('club_step_2_part_3')}
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
          )}
        </IconCard>

        <IconCard
          name={t('club_step_3_title')}
          onClick={() => handleExplanation('step-3')}
          active={explanation === 'step-3'}
          activecolor={theme.colors.primary}
        >
          <VideoAddIcon />
          <Subtitle text={t('club_step_3_title')} size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-3' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  {t('generic_step_3_part_1')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('generic_step_3_part_2')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('club_step_3_part_3')}
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
          )}
        </IconCard>

        <IconCard
          name={t('club_step_4_title')}
          onClick={() => handleExplanation('step-4')}
          active={explanation === 'step-4'}
          activecolor={theme.colors.primary}
        >
          <BookOpenIcon />
          <Subtitle text={t('club_step_4_title')} size={theme.sizes.small} uppercase as="h3" />

          {explanation === 'step-4' && (
            <Styled.Explanation>
              <ListContainer>
                <ListItem color={theme.colors.primary}>
                  {t('club_step_4_part_1')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('club_step_4_part_2')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('club_step_4_part_3')}
                </ListItem>

                <ListItem color={theme.colors.primary}>
                  {t('club_step_4_part_4')}
                </ListItem>
              </ListContainer>
            </Styled.Explanation>
          )}
        </IconCard>

      </GridLayout>

      <BannerSlide slidesperview={1}>
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
        <img src="/assets/images/backgrounds/slider-bg-1.png" alt="" />
      </BannerSlide>

      <Styled.Benefits>
        <Slide items={s2tData.photos.benefits} title={t('benefits')} />
      </Styled.Benefits>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Subtitle text={t('be_part_exclamation')} uppercase size={theme.sizes.xhuge} />

        <Text
          size={theme.sizes.large}
          text={t('club_text_2')}
        />

        <Row>
          <Button
            path="/login"
            text={t('login')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.lightprimary}
            texthover={theme.colors.primary}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
            size={theme.sizes.medium}
          />

          <Button
            path="/register"
            text={t('register')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.lightprimary}
            texthover={theme.colors.primary}
            border={theme.colors.lightprimary}
            borderhover={theme.colors.primary}
            size={theme.sizes.medium}
          />

        </Row>

      </Banner>

    </Styled.ClubPageContainer>
  );
}

ClubPage.propTypes = {

};
