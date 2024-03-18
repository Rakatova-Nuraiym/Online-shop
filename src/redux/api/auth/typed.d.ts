/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
  type PostFindResponse = {
    token: string;
  };
  type PostFindRequest = {
    email: string;
    password: string;
  };
}
