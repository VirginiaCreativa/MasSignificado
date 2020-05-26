import sstk from 'shutterstock-api';

const applicationConsumerId = 'TXjMyg6YHHVWiMT0WjdTn8byfrGcZFGx';
const applicationConsumerSecret = 'ZWTQN4NAXAx4qQY8';

sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);
const apiShutterstock = new sstk.ImagesApi();

export default apiShutterstock;
