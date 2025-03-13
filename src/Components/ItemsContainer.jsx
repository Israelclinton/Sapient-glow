import Item from './Item';
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from './Menu.js';

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8 '>
        <Item links={PRODUCTS} title='PRODUCTS' />
        <Item links={RESOURCES} title='RESOURCES' />
        <Item links={COMPANY} title='COMPANY' />
        <Item links={SUPPORT} title='SUPPORT' />
    </div>
  );
};

export default ItemsContainer;
