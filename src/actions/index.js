import service from '../services/service';

export const fetchCurrentUser = () => async(dispatch) => {
  const response = await service.get(`./user/`);
  dispatch({type: 'FETCH_CURRENT_USER', payload:response.data});
};