import React from 'react';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Input} from '../components/';

const Home = () => {
  const {t} = useTranslation();

  const {colors, sizes} = useTheme();

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>

      {/* course list */}
      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {/* list/map courses here */}
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
