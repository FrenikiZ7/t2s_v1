//  o React e ReactDOM para construir e renderizar os componentes React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { register } from 'swiper/element/bundle';
import {
  BrowserRouter, Routes, Route, useParams,
} from 'react-router-dom';
import Prop from 'prop-types';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global-styles';

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/element/css/autoplay';

import { Login } from './layout/Login/Login';
import { Register } from './layout/Register/Register';
import { PlayerProvider } from './contexts/userContext/PlayerProvider/PlayerProvider';
import { PlayerDashboard } from './layout/Dashboards/PlayerDashboard/PlayerDashboard';
import { Home } from './layout/Home/Home';
import { Friends } from './layout/Dashboards/Components/Friends/Friends';
import { S2tProvider } from './contexts/s2tContext/S2tProvider';
import { Scouts } from './layout/Dashboards/Components/Scouts/Scouts';
import { Clubs } from './layout/Dashboards/Components/Clubs/Clubs';
import { Opportunities } from './layout/Dashboards/Components/Opportunities/Opportunities';
import { EditProfile } from './layout/Dashboards/Components/EditProfile/EditProfile';
import { ClubDashboard } from './layout/Dashboards/ClubDashboard/ClubDashboard';
import { playerData } from './contexts/userContext/PlayerProvider/playerData';
import { ClubFavorites } from './layout/Dashboards/Components/ClubComponents/ClubFavorites/ClubFavorites';
import { ClubProvider } from './contexts/userContext/ClubProvider/ClubProvider';
import { clubData } from './contexts/userContext/ClubProvider/clubData';
import { ClubProfile } from './layout/Dashboards/Components/ClubComponents/ClubProfile/ClubProfile';
import { PlayerProfile } from './layout/Dashboards/Components/PlayerComponents/PlayerProfile/PlayerProfile';
import { Players } from './layout/Dashboards/Components/Players/Players';
import { UniversityDashboard } from './layout/Dashboards/UniversityDashboard/UniversityDashboard';
import { UniversityProvider } from './contexts/userContext/UniversityProvider/UniversityProvider';
import { Events } from './layout/Dashboards/Components/Events/Events';
import { S2TPlus } from './layout/Dashboards/Components/S2TPlus/S2TPlus';
import { PublicDashboard } from './layout/Dashboards/PublicDashboard/PublicDashboard';
import { PublicProfile } from './layout/Dashboards/Components/PublicComponents/PublicProfile/PublicProfile';
import { ForgotPassword } from './layout/ForgotPassword/ForgotPassword';
import { ResetPassword } from './layout/ResetPassword/ResetPassword';
import { MyAffiliates } from './layout/Dashboards/Components/MyAffiliates/MyAffiliates';
import { PlayerHome } from './layout/Dashboards/Components/PlayerComponents/PlayerHome/PlayerHome';
import { Store } from './layout/Dashboards/Components/Store/Store';
import { PlayerFavorites } from './layout/Dashboards/Components/PlayerComponents/PlayerFavorites/PlayerFavorites';
import { s2tData } from './contexts/s2tContext/s2tData';
import { PlayerContacts } from './layout/Dashboards/Components/PlayerComponents/PlayerContacts/PlayerContacts';
import { ClubHome } from './layout/Dashboards/Components/ClubComponents/ClubHome/ClubHome';
import { MyOpportunities } from './layout/Dashboards/Components/MyOpportunities/MyOpportunities';
import { MySquad } from './layout/Dashboards/Components/MySquad/MySquad';
import { UniversityProfile } from './layout/Dashboards/Components/UniversityComponents/UniversityProfile/UniversityProfile';
import { UniversityHome } from './layout/Dashboards/Components/UniversityComponents/UniversityHome/UniversityHome';
import { StaffFavorites } from './layout/Dashboards/Components/StaffComponents/StaffFavorites/StaffFavorites';
import { StaffProfile } from './layout/Dashboards/Components/StaffComponents/StaffProfile/StaffProfile';
import { StaffHome } from './layout/Dashboards/Components/StaffComponents/StaffHome/StaffHome';
import { Logout } from './layout/Logout/Logout';
import { StaffDashboard } from './layout/Dashboards/StaffDashboard/StaffDashboard';
import { Footer } from './components/Footer/Footer';
import { Row } from './components/RowContainer/Row';
import { SocialLink } from './components/elements/SocialLink/SocialLink';
import { Nav } from './components/Nav/Nav';
import { StyledLink } from './components/elements/StyledLink/StyledLink';
import { Text } from './components/elements/Text/Text';
import { Benefits } from './layout/Benefits/Benefits';
import { BenefitsClub } from './layout/Benefits/Components/BenefitsClub/BenefitsClub';
import { Investments } from './layout/Benefits/Components/Investments/Investments';
import { Events as EventsPage } from './layout/Benefits/Components/Events/Events';
import { Users } from './layout/Users/Users';
import { PlayerPage } from './layout/Users/Components/Player/PlayerPage';
import { Logo } from './components/elements/Logo/Logo';
import { ClubPage } from './layout/Users/Components/Club/ClubPage';
import { MyEvents } from './layout/Dashboards/Components/MyEvents/MyEvents';
import { StaffProvider } from './contexts/userContext/StaffProvider/StaffProvider';
import { Interchange } from './layout/Benefits/Components/Interchange/Interchange';
import { CryptoWallet } from './layout/Benefits/Components/CryptoWallet/CryptoWallet';
import { English } from './layout/Benefits/Components/English/English';
import { Crowdfunding } from './layout/Benefits/Components/Crowdfunding/Crowdfunding';
import { LionsPlatform } from './layout/Benefits/Components/LionsPlatform/LionsPlatform';
import { Studies } from './layout/Benefits/Components/Studies/Studies';
import { Home as BenefitsHome } from './layout/Benefits/Components/Home/Home';

import { AmericanStudies } from './layout/Benefits/Components/AmericanStudies/AmericanStudies';
import { LeagueDashboard } from './layout/Dashboards/LeagueDashboard/LeagueDashboard';
import { LeagueProvider } from './contexts/userContext/LeagueProvider/LeagueProvider';
import { leagueData } from './contexts/userContext/LeagueProvider/leagueData';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import { FanProvider } from './contexts/userContext/FanProvider/FanProvider';
import { fanData } from './contexts/userContext/FanProvider/fanData';
import { FanDashboard } from './layout/Dashboards/FanDashboard/FanDashboard';
import { FanProfile } from './layout/Dashboards/Components/FanComponents/FanProfile/FanProfile';
import { FanFavorites } from './layout/Dashboards/Components/FanComponents/FanFavorites/FanFavorites';
import { FanHome } from './layout/Dashboards/Components/FanComponents/FanHome/FanHome';
import { AgencyDashboard } from './layout/Dashboards/AgencyDashboard/AgencyDashboard';
import { AgencyProvider } from './contexts/userContext/AgencyProvider/AgencyProvider';
import { AgencyHome } from './layout/Dashboards/Components/AgencyComponents/AgencyHome/AgencyHome';
import { AgencyProfile } from './layout/Dashboards/Components/AgencyComponents/AgencyProfile/AgencyProfile';
import { AgencyFavorites } from './layout/Dashboards/Components/AgencyComponents/AgencyFavorites/AgencyFavorites';
import { BusinessManProvider } from './contexts/userContext/BusinessManProvider/BusinessManProvider';
import { BusinessManDashboard } from './layout/Dashboards/BusinessManDashboard/BusinessManDashboard';
import { BusinessManHome } from './layout/Dashboards/Components/BusinessManComponents/BusinessManHome/BusinessManHome';
import { BusinessManProfile } from './layout/Dashboards/Components/BusinessManComponents/BusinessManProfile/BusinessManProfile';
import { BusinessManFavorites } from './layout/Dashboards/Components/BusinessManComponents/BusinessManFavorites/BusinessManFavorites';
import { StaffPage } from './layout/Users/Components/Staff/StaffPage';
import { Terms } from './layout/Policies/Components/Terms/Terms';
import { Policies } from './layout/Policies/Policies';
import { Privacy } from './layout/Policies/Components/Privacy/Privacy';
import { Copyright } from './layout/Policies/Components/Copyright/Copyright';
import { AcceptableUse } from './layout/Policies/Components/AcceptableUse/AcceptableUse';
import { agencyData } from './contexts/userContext/AgencyProvider/agencyData';
import { TelemedicineUsa } from './layout/Benefits/Components/TelemedicineUsa/TelemedicineUsa';
import { Solar } from './layout/Benefits/Components/Solar/Solar';
import { Staff } from './layout/Dashboards/Components/Staff/Staff';
import { University } from './layout/Dashboards/Components/EditProfile/Components/University/University';
import { Agency } from './layout/Dashboards/Components/EditProfile/Components/Agency/Agency';

register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Fornecendo o tema para os componentes */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <I18nextProvider i18n={i18n}>
          <S2tProvider>
            <PlayerProvider>
              <ClubProvider>
                <UniversityProvider>
                  <StaffProvider>
                    <AgencyProvider>
                      <LeagueProvider>
                        <BusinessManProvider>
                          <FanProvider>

                            <GlobalStyles />

                            <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/logout" element={<Logout />} />
                              <Route path="/register" element={<Register />} />
                              <Route path="/login" element={<Login />} />
                              <Route path="/forgot-password" element={<ForgotPassword />} />
                              <Route path="/reset-password" element={<ResetPassword />} />

                              <Route path="/policies" element={<Policies />}>
                                <Route path="terms-of-use" element={<Terms />} />
                                <Route path="privacy" element={<Privacy />} />
                                <Route path="copyright" element={<Copyright />} />
                                <Route path="acceptable-use" element={<AcceptableUse />} />
                              </Route>

                              <Route path="/benefits" element={<Benefits />}>
                                <Route path="" element={<BenefitsHome />} />
                                <Route path="club" element={<BenefitsClub />} />
                                <Route path="investments" element={<Investments />} />
                                <Route path="interchange" element={<Interchange />} />
                                <Route path="english" element={<English />} />
                                <Route path="crypto-wallet" element={<CryptoWallet />} />
                                <Route path="crowdfunding" element={<Crowdfunding />} />
                                <Route path="studies" element={<Studies />} />
                                <Route path="american-studies" element={<AmericanStudies />} />
                                <Route path="lions-platform" element={<LionsPlatform />} />
                                <Route path="benefits-club" element={<BenefitsClub />} />
                                <Route path="events" element={<EventsPage items={s2tData.events} />} />
                                <Route path="telemedicine-usa" element={<TelemedicineUsa />} />
                                <Route path="solar" element={<Solar />} />
                              </Route>

                              <Route path="/users" element={<Users />}>
                                <Route path="player" element={<PlayerPage />} />
                                <Route path="staff" element={<StaffPage />} />
                                <Route path="club" element={<ClubPage />} />
                              </Route>

                              {/* Rota do dashboard para jogadores + subrotas dele */}
                              <Route path="/player-dashboard/" element={<PlayerDashboard />}>
                                <Route path="" element={<PlayerHome />} />
                                <Route path="profile" element={<PlayerProfile />} />
                                <Route path="profile-edit" element={<EditProfile type="player" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="favorites" element={<PlayerFavorites />} />
                                <Route path="messages" element={<PlayerContacts />} />
                                <Route path="events" element={<Events />} />
                                <Route path="friends" element={<Friends friends={playerData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              <Route path="/staff-dashboard/" element={<StaffDashboard />}>
                                <Route path="" element={<StaffHome />} />
                                <Route path="profile" element={<StaffProfile />} />
                                <Route path="profile-edit" element={<EditProfile type="staff" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="favorites" element={<StaffFavorites />} />
                                <Route path="messages" element={<h1>Em construção... :)</h1>} />
                                <Route path="events" element={<Events />} />
                                <Route path="friends" element={<Friends friends={playerData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              <Route path="/business-man-dashboard/" element={<BusinessManDashboard />}>
                                <Route path="" element={<BusinessManHome />} />
                                <Route path="profile" element={<BusinessManProfile />} />
                                <Route path="profile-edit" element={<EditProfile type="business-man" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="favorites" element={<BusinessManFavorites />} />
                                <Route path="messages" element={<h1>Em construção... :)</h1>} />
                                <Route path="events" element={<Events />} />
                                <Route path="friends" element={<Friends friends={playerData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              {/* Rota do dashboard para clubes + subrotas dele */}
                              <Route path="/club-dashboard/" element={<ClubDashboard />}>
                                <Route path="" element={<ClubHome />} />
                                <Route path="profile" element={<ClubProfile />} />
                                <Route path="my-squad" element={<MySquad />} />
                                <Route path="profile-edit" element={<EditProfile type="club" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="my-opportunities" element={<MyOpportunities opportunities={s2tData.proposals.male.professional.clubs} />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="players" element={<Players />} />
                                <Route path="favorites" element={<ClubFavorites />} />
                                <Route path="events" element={<Events />} />
                                <Route path="messages" element={<h1>Em construção... :)</h1>} />
                                <Route path="friends" element={<Friends friends={clubData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              <Route path="/league-dashboard/" element={<LeagueDashboard />}>
                                <Route path="" element={<ClubHome />} />
                                <Route path="profile" element={<ClubProfile />} />
                                <Route path="my-squad" element={<MySquad />} />
                                <Route path="profile-edit" element={<EditProfile type="league" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="my-opportunities" element={<MyOpportunities opportunities={s2tData.proposals.male.professional.agents} />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="players" element={<Players />} />
                                <Route path="favorites" element={<ClubFavorites />} />
                                <Route path="events" element={<Events />} />
                                <Route path="messages" element={<h1>Em construção... :)</h1>} />
                                <Route path="friends" element={<Friends friends={leagueData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              <Route path="/agency-dashboard/" element={<AgencyDashboard />}>
                                <Route path="" element={<AgencyHome />} />
                                <Route path="profile" element={<AgencyProfile />} />
                                <Route path="my-squad" element={<MySquad />} />
                                <Route path="profile-edit" element={<EditProfile type="agency" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="my-opportunities" element={<MyOpportunities opportunities={s2tData.proposals.male.professional.clubs} />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="players" element={<Players />} />
                                <Route path="favorites" element={<AgencyFavorites />} />
                                <Route path="events" element={<Events />} />
                                <Route path="messages" element={<h1>Em construção... :)</h1>} />
                                <Route path="friends" element={<Friends friends={agencyData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              <Route path="/university-dashboard/" element={<UniversityDashboard />}>
                                <Route path="" element={<UniversityHome />} />
                                <Route path="profile" element={<UniversityProfile />} />
                                <Route path="my-squad" element={<MySquad />} />
                                <Route path="profile-edit" element={<EditProfile type="university" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="my-opportunities" element={<MyOpportunities />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="players" element={<Players />} />
                                <Route path="favorites" element={<ClubFavorites />} />
                                <Route path="events" element={<Events />} />
                                <Route path="messages" element={<h1>Em construção... :)</h1>} />
                                <Route path="friends" element={<Friends friends={clubData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              <Route path="/fan-dashboard/" element={<FanDashboard />}>
                                <Route path="" element={<FanHome />} />
                                <Route path="profile" element={<FanProfile />} />
                                <Route path="profile-edit" element={<EditProfile type="fan" />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="staff" element={<Staff />} />
                                <Route path="clubs" element={<Clubs />} />
                                <Route path="players" element={<Players />} />
                                <Route path="favorites" element={<FanFavorites />} />
                                <Route path="events" element={<Events />} />
                                <Route path="friends" element={<Friends friends={fanData.friends} />} />
                                <Route path="store" element={<Store />} />
                                <Route path="my-events" element={<MyEvents events={s2tData.events} />} />
                                <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                                <Route path="s2t+" element={<S2TPlus />} />
                              </Route>

                              <Route path="/user/:username" element={<PublicDashboard />}>
                                <Route path="profile" element={<PublicProfile />} />
                                <Route path="squad" element={<Players />} />
                                <Route path="opportunities" element={<Opportunities />} />
                                <Route path="friends" element={<Friends friends={clubData.friends} />} />
                              </Route>

                            </Routes>

                            <Footer />

                          </FanProvider>
                        </BusinessManProvider>
                      </LeagueProvider>
                    </AgencyProvider>
                  </StaffProvider>
                </UniversityProvider>
              </ClubProvider>
            </PlayerProvider>
          </S2tProvider>
        </I18nextProvider>

      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
