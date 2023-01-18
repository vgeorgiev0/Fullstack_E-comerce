import { createSchema } from 'sanity';
import banner from './banner';
import product from './product';

export const schemaTypes = [ product, banner ]
export default createSchema( {
  name: "default",
  types: schemaTypes.concat( [
    product,
    banner,
  ] ),
} );
