import ApolloCient from 'apollo-boost';
import config from '../config';

const { serviceHost } = config;

export default new ApolloCient({
    uri: '${serviceHost}/graphql',
});
