import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, SectionList } from 'react-native';
import styled from 'styled-components/primitives';
import {
  AssetListHeader,
  AssetListItem,
  BalanceCoinRow,
  UniqueTokenGridList,
} from '../components/asset-list';
import { FabWrapper, WalletConnectFab } from '../components/fab';
import WalletHeader from './WalletHeader';

const Separator = styled.View`
  height: 27;
`;

const WalletScreen = ({ wallet: { assets = [] } }) => {
  const sections = {
    balances: {
      data: assets,
      renderItem: BalanceCoinRow,
      title: 'Balances',
      totalValue: '456.60',
    },
    collectibles: {
      data: [['fake nft #1', 'fake nft #2', 'fake nft #3']],
      renderItem: UniqueTokenGridList,
      title: 'Collectibles',
      totalValue: '26.32',
    },
  };

  return (
    <FabWrapper fabs={[<WalletConnectFab key="walletConnectFab" />]}>
      <ScrollView>
        <WalletHeader />
        <SectionList
          keyExtractor={(item, index) => item + index}
          renderItem={AssetListItem}
          renderSectionHeader={props => <AssetListHeader {...props} />}
          renderSectionFooter={() => <Separator />}
          sections={[sections.balances, sections.collectibles]}
        />
      </ScrollView>
    </FabWrapper>
  );
};

WalletScreen.propTypes = {
  loading: PropTypes.bool,
  wallet: PropTypes.object,
};

export default WalletScreen;
