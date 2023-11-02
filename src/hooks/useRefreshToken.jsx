import axios from "../utils/axios";
import useMainContext from "./useMainContext";

const useRefreshToken = () =>
{
  const { setAuth } = useMainContext()
      
  const refresh = async () =>
  {
    const response = await axios.get( '/refresh');
    setAuth( ( prev ) =>
    {
      return {...prev,accessToken:response.data.accessToken}
    })
    console.log(response.data)
    return response.data.accessToken
  }
  return refresh; 
}

export default useRefreshToken