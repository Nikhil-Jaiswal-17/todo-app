import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      isCompleted
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    insert_todos(objects: { title: $title }) {
      returning {
        id
        title
        isCompleted
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: uuid!, $isCompleted: Boolean!) {
    update_todos(where: { id: { _eq: $id } }, _set: { isCompleted: $isCompleted }) {
      returning {
        id
        isCompleted
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: uuid!) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
