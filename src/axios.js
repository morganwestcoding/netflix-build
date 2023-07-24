import axios from 'axios';

const API_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWZmYTYyODU0MzBjODU2NTY4ODgwYWVkNTgzYTM0NyIsInN1YiI6IjY0YmNhNDFkMGVkMmFiMDExY2E3ZGZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xPnQoMiCVa04cqBPVHw_3f4kQ6ScUAHPKNAK_UBIz5E';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // Replace with the base URL of the API
  headers: {
    'Authorization': `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
});

export default instance;