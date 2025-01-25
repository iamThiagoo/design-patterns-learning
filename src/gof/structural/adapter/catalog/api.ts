import GetProduct from './use-case/GetProduct';
import { ExpressAdapter, HapiAdapter } from './adapter/HttpServer';
import { ProductRepositoryMemory } from './repository/ProductRepository';

const productRepository = new ProductRepositoryMemory();
const getProduct = new GetProduct(productRepository);
const httpServer = new ExpressAdapter();
// const httpServer = new HapiAdapter();

httpServer.register(
  'get',
  '/products/:{productId}',
  async function (params: any, body: any) {
    const productId = parseInt(params.productId);
    const output = await getProduct.execute(productId);
    return output;
  },
);
httpServer.listen(3001);
