import { useTranslation } from 'react-i18next'

const useGetMenuList = () => {
  const { t } = useTranslation()

  return [
    {
      iconSrc: '/assets/svg/menuList/fish.svg',
      name: t('menuList.main_dish'),
      slug: 'main_dish',
    },
    {
      iconSrc: '/assets/svg/menuList/fish.svg',
      name: t('menuList.lamb'),
      slug: 'lamb',
    },
    {
      iconSrc: '/assets/svg/menuList/fish.svg',
      name: t('menuList.chicken'),
      slug: 'chicken',
    },
    {
      iconSrc: '/assets/svg/menuList/fish.svg',
      name: t('menuList.fish'),
      slug: 'fish',
    },
    {
      iconSrc: '/assets/svg/menuList/BBQ.svg',
      name: t('menuList.garnishes'),
      slug: 'garnishes',
    },
    {
      iconSrc: '/assets/svg/menuList/BBQ.svg',
      name: t('menuList.salads'),
      slug: 'salads',
    },
    {
      iconSrc: '/assets/svg/menuList/BBQ.svg',
      name: t('menuList.supe'),
      slug: 'supe',
    },
    {
      iconSrc: '/assets/svg/menuList/BBQ.svg',
      name: t('menuList.bread'),
      slug: 'bread',
    },
    {
      iconSrc: '/assets/svg/menuList/BBQ.svg',
      name: t('menuList.mamaliga'),
      slug: 'mamaliga',
    },
  ]
}

export default useGetMenuList
