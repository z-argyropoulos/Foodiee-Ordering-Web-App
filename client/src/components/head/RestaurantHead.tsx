import Head from 'next/head';

const RestaurantHead = ({
  restaurantName,
}: {
  restaurantName: string | undefined;
}) => {
  const titleText = `${restaurantName} - Foodie`;
  return (
    <Head>
      <title>{titleText}</title>
    </Head>
  );
};

export default RestaurantHead;
