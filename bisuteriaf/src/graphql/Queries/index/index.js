
import { gql } from '@apollo/client';


export const GET_PAG_ARRAY_LAYER = gql`
    query ArrayLayer($enabled: Boolean!, $page: Int!, $numItem: Int!) {
        arrayLayer(enabled: $enabled, page: $page, numItem: $numItem) {
            array {
                _id
                name
                updatedAt
                enabled
                view
                description
                createdAt
                imageId {
                    name
                    path
                    category
                    createdAt
                    updatedAt
                }
            }
            lastPage
            numItem
            page
            quantity
        }
        }
`;