/* eslint-disable @typescript-eslint/no-unused-vars */
namespace USERS {
  type PostUsersResponse = {
    userName: string;
    email: string;
    password: string;
  };
  type PostUsersRequest = {
    userName: string;
    email: string;
    password: string;
  }[];
}
