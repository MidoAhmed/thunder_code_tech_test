import React from "react";

import { useQuery, gql } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const GET_PRODUCTS = gql`
  query GetProducts($first: Int, $after: String) {
    products(first: $first, after: $after) {
      items {
        ProductID
        Name
      }
      endCursor
      hasNextPage
    }
  }
`;

const Products = ({ projectId }) => {
  //   const { user } = useAuth0();
  const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: { first: 5, after: null },
  });

  if (loading) return <Loading />;
  if (error) return <p>Error :{error.message || "Something went wrong"}</p>;

  const { items, endCursor, hasNextPage } = data.products;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {items.map((p) => (
          <li key={p.ProductID}>{p.Name}</li>
        ))}
      </ul>
      {hasNextPage && (
        <button
          onClick={() =>
            fetchMore({
              variables: { after: endCursor },
              updateQuery: (prevResult, { fetchMoreResult }) => ({
                products: {
                  ...fetchMoreResult.products,
                  items: [
                    ...prevResult.products.items,
                    ...fetchMoreResult.products.items,
                  ],
                },
              }),
            })
          }
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Products;
