import React from 'react';
import { CustomText } from '@components/atoms';
import { Layout } from '@components/organisms';
import { useGetPropertiesQuery } from '@services/PropertiesService';

const HomeScreen = () => {
  const { data: properties } = useGetPropertiesQuery();

  console.log('API: ' + JSON.stringify(properties, null, 3));

  return (
    <Layout>
      <CustomText>Hey!</CustomText>
    </Layout>
  );
};

export default HomeScreen;
