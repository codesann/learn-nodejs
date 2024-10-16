import supertest from 'supertest';
import { app } from '../src/hello';

test('should be hello world', async () => {
  app.get('/', (req, res) => {
    res.json({ message: 'hello joko.' });
  });

  const response = await supertest(app).get('/');
  expect(response.body.message).toBe('hello joko.');
});
