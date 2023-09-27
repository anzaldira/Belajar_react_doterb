import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


const apiUrl = 'https://fakestoreapi.com/products?limit=10';

export const useGetProducts = () => {
    return useQuery(['products'], async () => {
        const { data } = await axios.get(apiUrl);
        return data;
    });
  }; 

  export const useAddProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (newProduct) => { 
            return axios.post(apiUrl, newProduct);
        },
        {
            onMutate: async (newProduct) => {
                await queryClient.cancelQueries(['products']);
            },
            onError: (err, newProduct, context) => {
            },
            onSettled: () => {
                queryClient.invalidateQueries(['products']);
            },
        }
    );
  }

  