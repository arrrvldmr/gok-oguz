import CardMenu from '../componets/CardMenu/CardMenu'

const Menu = () => {
  return (
    <div className='flex gap-16 pt-16'>
      <div>Sidebar menu</div>
      <div className='flex gap-8'>
        <CardMenu
          title={`Carne "Po-Gheorghievski"`}
          imagePath='https://straus.s3.amazonaws.com/media/CACHE_IMG/products2/66e1df470dca4046bab46a195f10f941/d353a15072aeb4ca0635df1ef66e0a4c.webp'
          weight={680}
          description='Pilaf,legume la cuptor'
          price={353}
        />
        <CardMenu
          title='Friptură bulgărească'
          weight={400}
          description='Carne de  miel'
          price={159}
        />
      </div>
    </div>
  )
}

export default Menu
