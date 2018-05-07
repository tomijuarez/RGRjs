import axios from 'axios';
import ServerActions from './actions/ServerActions';

class API {

    fetchLinks = () => {
        axios.post('/graphql', {
            query: `{
                links {
                    _id,
                    title,
                    url
                    }
            }`
        })
        .then(resp => {
            console.log("1. In API", resp.data.data);
            ServerActions.receiveLinks(resp.data.data.links);
        })
        .catch(error => console.log(error));
    }
}

export default new API();