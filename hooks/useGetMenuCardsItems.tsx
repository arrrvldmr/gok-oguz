import { useTranslation } from 'react-i18next'

const useGetMenuCardsItems = () => {
  const { t } = useTranslation()

  return [
    {
      image: 'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/66e1df470dca4046bab46a195f10f941/d353a15072aeb4ca0635df1ef66e0a4c.webp',
      title: t('menuCardsItems.carneGherghievschi'),
      description: t('menuCardsItems.descCarne'),
      group: 'main_dish',
      weight: 400,
      price: 353,
    },
    {
      title: t('menuCardsItems.friptura'),
      description: t('menuCardsItems.descFriptura'),
      group: 'lamb',
      weight: 400,
      price: 194,
    },
    {
      image: 'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/d2980b6a04614a6a84169d2b13eb7135/eccc922e4099e0ff48246f0f576d5f30.webp',
      title: t('menuCardsItems.budjak'),
      description: t('menuCardsItems.descBudjak'),
      group: 'main_dish',
      weight: 400,
      price: 249,
    },
    {
      image: 'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/c11700a5618a421ea2bf00cba9e05fac/a83556daba0568b860e12f5917f68d71.webp',
      title: t('menuCardsItems.borsRosu'),
      description: t('menuCardsItems.descBorsRosu'),
      group: 'supe',
      weight: 350,
      price: 93,
    },
  ]
}

export default useGetMenuCardsItems
