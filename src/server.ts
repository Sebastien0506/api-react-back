import express, { Request, Response } from 'express';
import { InMemoryStorage } from './Repository/InMemoryStorage';
import { CartController } from './Controller/CardController';

const app = express();
app.use(express.json());

const storage = new InMemoryStorage();
const cartController = new CartController(storage);

// Utilisez les types Request et Response pour req et res
app.post('/cart/products', (req: Request, res: Response) => cartController.addProduct(req, res));
app.get('/cart/total', (req: Request, res: Response) => cartController.getTotal(req, res));

const port = 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
