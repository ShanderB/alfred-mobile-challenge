const pacientListApi = async function getMoviesFromApiAsync() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error);
    }
  }

export default pacientListApi;
