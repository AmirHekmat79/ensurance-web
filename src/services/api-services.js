import axios from "axios";

const BASE_URL = 'https://server.easybimeh.com/api';

const apiService = {
    getInsuranceCentreInfo(subDomain){
        return  axios.get(`${BASE_URL}/InsuranceCentre/Info?subDomain=${subDomain}`);
    } ,
    getInsurancePlan(subDomain){
        return  axios.get(`${BASE_URL}/InsurancePolicyPlan/SpecialPlan?subDomain=${subDomain}`);
    },
    getSuggestionFormPlans(subDomain){
        return  axios.get(`${BASE_URL}/InsurancePolicyPlan/SuggestionForm_Plans?subDomain=${subDomain}`);
    }
    
}

export default apiService;