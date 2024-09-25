import { useTranslation } from 'react-i18next'

const useGetMenuCardsItems = () => {
  const { t } = useTranslation()

  return [
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/66e1df470dca4046bab46a195f10f941/d353a15072aeb4ca0635df1ef66e0a4c.webp',
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
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/d2980b6a04614a6a84169d2b13eb7135/eccc922e4099e0ff48246f0f576d5f30.webp',
      title: t('menuCardsItems.budjak'),
      description: t('menuCardsItems.descBudjak'),
      group: 'main_dish',
      weight: 400,
      price: 249,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/c11700a5618a421ea2bf00cba9e05fac/a83556daba0568b860e12f5917f68d71.webp',
      title: t('menuCardsItems.borsRosu'),
      description: t('menuCardsItems.descBorsRosu'),
      group: 'supe',
      weight: 350,
      price: 93,
    },
    {
      title: t('menuCardsItems.musafiri'),
      description: t('menuCardsItems.descMusafiri'),
      group: 'main_dish',
      weight: 325,
      price: 179,
    },
    {
      title: t('menuCardsItems.ardeiUmplut'),
      description: t('menuCardsItems.descArdeiUmplut'),
      group: 'main_dish',
      weight: 150,
      price: 107,
    },
    {
      title: t('menuCardsItems.ardeiDulce'),
      description: t('menuCardsItems.descArdeiDulce'),
      group: 'main_dish',
      weight: 250,
      price: 97,
    },
    {
      title: t('menuCardsItems.ardeiDulce'),
      description: t('menuCardsItems.descArdeiDulce'),
      group: 'main_dish',
      weight: 250,
      price: 97,
    },
    {
      title: t('menuCardsItems.laRachiu'),
      description: t('menuCardsItems.descLaRachiu'),
      group: 'main_dish',
      weight: 360,
      price: 151,
    },
    {
      title: t('menuCardsItems.dinSomon'),
      description: t('menuCardsItems.descDinSomon'),
      group: 'main_dish',
      weight: 130,
      price: 179,
    },
    {
      title: t('menuCardsItems.heringCeapa'),
      description: t('menuCardsItems.descHeringCeapa'),
      group: 'main_dish',
      weight: 310,
      price: 107,
    },
    {
      title: t('menuCardsItems.cartofiHering'),
      description: t('menuCardsItems.descCartofiHering'),
      group: 'main_dish',
      weight: 430,
      price: 123,
    },
    {
      title: t('menuCardsItems.salataBulgara'),
      description: t('menuCardsItems.descSalataBulgara'),
      group: 'salads',
      weight: 300,
      price: 93,
    },
    {
      title: t('menuCardsItems.salataIliderim'),
      description: t('menuCardsItems.descSalataIliderim'),
      group: 'salads',
      weight: 350,
      price: 97,
    },
    {
      title: t('menuCardsItems.salataDeSarbatoare'),
      description: t('menuCardsItems.descSalataDeSarbatoare'),
      group: 'salads',
      weight: 300,
      price: 163,
    },
    {
      title: t('menuCardsItems.salataPlacereaSef'),
      description: t('menuCardsItems.descPlacereaSef'),
      group: 'salads',
      weight: 300,
      price: 97,
    },
    {
      title: t('menuCardsItems.salataFierbinte'),
      description: t('menuCardsItems.descSalataFierbinte'),
      group: 'salads',
      weight: 300,
      price: 137,
    },
    {
      title: t('menuCardsItems.salataContemporan'),
      description: t('menuCardsItems.descSalataContemporan'),
      group: 'salads',
      weight: 220,
      price: 121,
    },
    {
      title: t('menuCardsItems.salataDeLegume'),
      description: t('menuCardsItems.descSalataDeLegume'),
      group: 'salads',
      weight: 220,
      price: 89,
    },
    {
      title: t('menuCardsItems.salataSmantana'),
      description: t('menuCardsItems.descSalataSmantana'),
      group: 'salads',
      weight: 220,
      price: 89,
    },
    {
      title: t('menuCardsItems.salataIarna'),
      description: t('menuCardsItems.descSalataIarna'),
      group: 'salads',
      weight: 220,
      price: 77,
    },
    {
      title: t('menuCardsItems.ciorbaComrat'),
      description: t('menuCardsItems.descCiorbaComrat'),
      group: 'supe',
      weight: 355,
      price: 93,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/ab1746efaae644e9ad2473e66f549527/7a3eb33ed28af5b0e63cf0b386c8cbc1.webp',
      title: t('menuCardsItems.ciorbaGaina'),
      description: t('menuCardsItems.descCiorbaGaina'),
      group: 'supe',
      weight: 350,
      price: 93,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/67c02533eace46eeb418f36e83b49a4d/62b004ced266045155b56210a6c605c3.webp',
      title: t('menuCardsItems.borsVerde'),
      description: t('menuCardsItems.descBorsVerde'),
      group: 'supe',
      weight: 350,
      price: 132,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/9935033bb8bd48beaa80eaf0e454dc7f/be032167fd99aa211c0e6b422a7c0ba3.webp',
      title: t('menuCardsItems.supaHarcio'),
      description: t('menuCardsItems.descSupaHarcio'),
      group: 'supe',
      weight: 330,
      price: 146,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/e0c34390a5534503ad049b8c341eda34/503249f93c5b02285d7e09e857869102.webp',
      title: t('menuCardsItems.bulionMiel'),
      description: t('menuCardsItems.descBulionMiel'),
      group: 'supe',
      weight: 300,
      price: 137,
    },
    {
      title: t('menuCardsItems.tarator'),
      description: t('menuCardsItems.descTarator'),
      group: 'supe',
      weight: 300,
      price: 129,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/38eab48a046e47358bc6d695ae9db3db/c80247de0f084059a05c7ed539c8f08b.webp',
      title: t('menuCardsItems.surpa'),
      description: t('menuCardsItems.descSurpa'),
      group: 'supe',
      weight: 520,
      price: 279,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/d3e53a531c6e403fa685c3d900f10836/ed1bd5914818995399b788db1b611f18.webp',
      title: t('menuCardsItems.lagman'),
      description: t('menuCardsItems.descLagman'),
      group: 'supe',
      weight: 450,
      price: 238,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/17520491e0844346ac11a35b3fce0747/0271ab00f06db09f4bac68b614c39c1f.webp',
      title: t('menuCardsItems.pieptMiel'),
      description: t('menuCardsItems.descPieptMiel'),
      group: 'lamb',
      weight: 440,
      price: 194,
    },
    {
      image:
        'https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/2a6bf28e668d402abc1a6f38a6d68027/571a19da5bdff3451f63f51bab02031d.webp',
      title: t('menuCardsItems.kebabMiel'),
      description: t('menuCardsItems.descKebabMiel'),
      group: 'lamb',
      weight: 350,
      price: 237,
    },
  ]
}

export default useGetMenuCardsItems
