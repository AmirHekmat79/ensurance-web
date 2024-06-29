import axios from "axios";

const BASE_URL = 'https://server.easybimeh.com/api';

const apiService = {
    getInsuranceCentreInfo(subDomain){
        return  axios.get(`${BASE_URL}/InsuranceCentre/Info?subDomain=${subDomain}`);
    }
    
}

export default apiService;