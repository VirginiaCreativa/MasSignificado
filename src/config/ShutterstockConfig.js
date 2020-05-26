import sstk from 'shutterstock-api';

const id = 'TXjMyg6YHHVWiMT0WjdTn8byfrGcZFGx';
const secret = 'ZWTQN4NAXAx4qQY8';

sstk.setBasicAuth(id, secret);
const apiShutterstock = new sstk.ImagesApi();

export default apiShutterstock;
